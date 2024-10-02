"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CssVarsProvider,
  CssBaseline,
  Box,
  Button,
  Typography,
  FormControl,
  FormLabel,
  Input,
} from "@mui/joy";
import { createPaymentIntent } from "./action"; // Import the server action

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const amounts = [25, 100, 500, 1000, 1500, 3000, 5000];

export default function PaymentPage() {
  const [amount, setAmount] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe failed to initialize.");

      const clientSecret = await createPaymentIntent(Number(amount) * 100); // Convert to paise

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          // In a real implementation, you'd use Stripe Elements here
          card: {
            token: "tok_visa", // This is a test token, replace with actual card details in production
          },
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
      } else if (result.paymentIntent?.status === "succeeded") {
        alert("Payment successful!");
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.body",
          p: 3,
        }}
      >
        <Box
          sx={{
            maxWidth: 400,
            width: "100%",
            bgcolor: "background.surface",
            p: 3,
            borderRadius: "sm",
            boxShadow: "md",
          }}
        >
          <Typography level="h2" component="h1" sx={{ mb: 2 }}>
            Make a Donation
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Amount (INR)</FormLabel>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                {amounts.map((amt) => (
                  <Button
                    key={amt}
                    variant={amount === amt ? "solid" : "outlined"}
                    color="primary"
                    onClick={() => setAmount(amt)}
                  >
                    ₹{amt}
                  </Button>
                ))}
                <Button
                  variant={
                    typeof amount === "number" && !amounts.includes(amount)
                      ? "solid"
                      : "outlined"
                  }
                  color="primary"
                  onClick={() => setAmount("")}
                >
                  Other
                </Button>
              </Box>
              {(amount === "" ||
                (typeof amount === "number" && !amounts.includes(amount))) && (
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  required
                />
              )}
            </FormControl>
            <Button type="submit" fullWidth loading={loading}>
              Donate
            </Button>
          </form>
          {error && (
            <Typography color="danger" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
