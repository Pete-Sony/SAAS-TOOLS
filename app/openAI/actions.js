"use server";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

const openai = new OpenAI();

const Tweet = z.object({
  tweet: z.string(),
});

const CalendarEvent = z.object({
  tweets: z.array(Tweet),
});

export async function generateTweets(text) {
  const completion = await openai.beta.chat.completions.parse({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
          You are a tweet generator and should generate 5 tweets, the tweets must be attention grabbing, 
          knowledgeable and aggressive.
          The tweet must teach others about technology.
          Sample Input: NFT
        `,
      },
      { role: "user", content: text },
    ],
    response_format: zodResponseFormat(CalendarEvent, "tweets"),
  });

  return completion.choices[0].message.parsed;
}
