// app/page.js
"use client";

import React, { useState } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Subscribing email:", email);
    setSubscribed(true);
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
            Subscribe to Our Newsletter
          </Typography>
          {subscribed ? (
            <Typography color="success">Thank you for subscribing!</Typography>
          ) : (
            <form onSubmit={handleSubmit}>
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <Button type="submit" fullWidth>
                Subscribe
              </Button>
            </form>
          )}
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
