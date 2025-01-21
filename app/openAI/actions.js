"use server";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

const openai = new OpenAI();

const Tweet = z.object({
  tweet: z.string(),
});

const Tweets = z.object({
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
          If provided with a paragraph, use the paragraph as knowledge to generate the tweets.
          Otherwise use your own knowledge to create tweets.
        `,
      },
      { role: "user", content: text },
    ],
    response_format: zodResponseFormat(Tweets, "tweets"),
  });

  return completion.choices[0].message.parsed;
}
