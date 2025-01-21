"use server";

import { YoutubeTranscript } from "youtube-transcript";
import { generateTweets } from "../openAI/actions";

export default async function generate(url) {
  // Fetch the English transcript if available from Youtube Video.
  const response = await YoutubeTranscript.fetchTranscript(url, {lang: 'en'})
  const transcript = response.map(item => item.text.replace(/&amp;#39;/g, "'")).join(' ')

  // Generate tweets from the transcript.
  const tweets = generateTweets(transcript)
  return tweets
}
