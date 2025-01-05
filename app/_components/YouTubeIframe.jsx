"use client"

import React, { useState } from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Box from '@mui/joy/Box';
import LinearProgress from '@mui/joy/LinearProgress';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';


export default function YouTubeIframe() {
    const [isLoading, setIsLoading] = useState(true);
    const title = "So may we start"
  const videoId ="YWb3KpvAz8s"
  const videoUrl = `https://www.youtube.com/embed/${videoId}?`+
  'rel=0&' +               // Hide related videos
  'modestbranding=1&' +    // Hide YouTube logo (1, not 0)
  'controls=1&' +          // Hide video controls
  'loop=1&' +             // Enable loop
//   'playlist=${videoId}&' + // Required for loop to work
  'cc_load_policy=1&' +    // Show closed captions
  'hl=en&' +               // language for subtittles
  'iv_load_policy=3&' +    // Hide video annotations
  'showinfo=0&' +          // Hide video title and info
  'hd=1';                  // Force HD quality


  return (
    <Card
      variant="soft"
      sx={{
        width: '100%',
        maxWidth: '800px',
        mx: 'auto',
        overflow: 'hidden'
      }}
    >
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Box sx={{ position: 'relative', width: '100%', pb: '56.25%' }}>
          <iframe
            src={videoUrl}
            title={title}
            allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </Box>
      </CardContent>
    </Card>
  )
}
