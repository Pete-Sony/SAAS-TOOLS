import { Stripe } from "stripe";

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function createPaymentIntent(amount: number) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
    });
    return paymentIntent.client_secret;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
