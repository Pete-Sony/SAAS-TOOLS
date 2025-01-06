"use server";

import OAuth from "oauth-1.0a";
import crypto from "crypto";

const consumer_key = process.env.CONSUMER_KEY
const consumer_secret = process.env.CONSUMER_SECRET
const access_token = process.env.ACCESS_TOKEN
const access_token_secret = process.env.ACCESS_TOKEN_SECRET

const url = 'https://api.twitter.com/2/tweets';

export default async function postTweet(tweet) {
    // console.log(consumer_key, consumer_secret, access_token, access_token_secret)
    const body = {text: tweet}

    const oauth = OAuth({
        consumer: { key: consumer_key, secret: consumer_secret },
        signature_method: 'HMAC-SHA1',
        hash_function(base_string, key) {
            return crypto.createHmac('sha1',key).update(base_string).digest('base64');
        },
    });

    const requestData = {url, method: 'POST'};
    const authHeader = oauth.toHeader(oauth.authorize(requestData, { key: access_token, secret: access_token_secret }));

    const twitterResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: authHeader.Authorization,
        },
        body: JSON.stringify(body),
    });
    if (!twitterResponse.ok) {
        throw new Error(`HTTP error! status: ${twitterResponse.status}`);
    }
    const data = await twitterResponse.json();
    return data;
}

