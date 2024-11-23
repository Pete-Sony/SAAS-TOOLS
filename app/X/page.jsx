"use client"
import React from 'react'

// Direct API call using fetch
const postTweet = async (text) => {
    const TWITTER_API_URL = 'https://api.twitter.com/2/tweets';
    const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAD6BxAEAAAAA66hNoKbkzwbC7RgS9TxETKQ1law%3DRrRK4BRIEKe6jHlWtfcPCfoMlsj3KTuUF54WaBJJpuxjRUaUFL';
    try {
        const { text } = await request.json();
    
        const response = await fetch(TWITTER_API_URL, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text }),
        });
    
        if (!response.ok) {
          throw new Error(`Twitter API error: ${response.statusText}`);
        }
    
        const data = await response.json();
        return NextResponse.json(data);
      } catch (error) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        );
      }
    }
    
    // app/components/TweetForm.jsx

    
    import { useState } from 'react';
    
    export  function TweetForm() {
      const [text, setText] = useState('');
      const [status, setStatus] = useState({ message: '', type: '' });
      const [isLoading, setIsLoading] = useState(false);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ message: '', type: '' });
    
        try {
          const response = await fetch('/api/tweet', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
          });
    
          const data = await response.json();
    
          if (!response.ok) {
            throw new Error(data.error || 'Failed to post tweet');
          }
    
          setText('');
          setStatus({
            message: 'Tweet posted successfully!',
            type: 'success'
          });
        } catch (error) {
          setStatus({
            message: error.message,
            type: 'error'
          });
        } finally {
          setIsLoading(false);
        }
      };
    
      return (
        <form onSubmit={handleSubmit} >
          <div >
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={280}
              placeholder="What's happening?"
             
              rows={4}
            />
            <div >
              {text.length}/280
            </div>
          </div>
    
          <button
            type="submit"
            disabled={isLoading || !text.trim()}
          
          >
            {isLoading ? 'Posting...' : 'Post Tweet'}
          </button>
    
          {status.message && (
            <div 
            >
              {status.message}
            </div>
          )}
        </form>
      );
    }
    
    // app/page.js
    
    
    export default function Page() {
      return (
        <main >
          <div >
            <h1 >
              Post a Tweet
            </h1>
            <TweetForm />
          </div>
        </main>
      );
    }