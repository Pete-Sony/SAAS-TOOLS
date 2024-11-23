'use server';
import { TwitterApiv2 } from 'twitter-api-v2';
// const API_KEY = process.env.TWITTER_API_KEY;
// const API_SECRET = process.env.TWITTER_API_SECRET;
// const ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN;
// const ACCESS_SECRET = process.env.TWITTER_ACCESS_TOKEN_SECRET;
//   // const text = formData.get('text');
// const TWITTER_API_URL = 'https://api.twitter.com/2/tweets';
// const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

const twitterClient = new TwitterApiv2({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

// const rwClient = twitterClient.readWrite;

export async function postTweet(text) {


   try {
    const tweet = await rwClient.v2.tweet(text);
    return { success: true, data: tweet };
  } catch (error) {
    console.error('Tweet posting error:', error);
    return { success: false, error: error.message };
  }
//   console.dir(response, { 
//     depth: null // Shows full object structure in console
//   });
//     if (!response.ok) {
//         throw new Error(`Twitter API error: ${response.statusText}`);
//       }
//       const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Tweet posting error:', error);
//     throw error;
//   }
}