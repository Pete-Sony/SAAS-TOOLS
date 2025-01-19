"use client"
import React, { useState } from 'react'
import { Button, Card, Typography } from '@mui/joy'
import { generateTweets } from './actions'

export default function Page() {
  const [tweets, setTweets] = useState([]);

  const handleClick = async () => {
    alert("Generating Tweets")
    const response = await generateTweets("AI Agents taking over the world")
    setTweets(response.tweets)
  }

  return (
    <>
     <Card sx={{
        display:"flex",
        flexDirection:"column",
        gap:2,
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
        }}
      >
        <Typography>Open AI</Typography>
        <Button
          onClick={handleClick}
        >Generate Tweets
        </Button>
        
        {tweets.length > 0 && tweets.map((tweet, index) => (
          <Typography key={index} sx={{ mt: 1 }}>
            {tweet.tweet}
          </Typography>
        ))}
      </Card>
    </>
  )
}
