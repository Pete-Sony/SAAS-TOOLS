'use client'; // This is required for interactivity


import React from 'react';
import { Card,Divider,FormControl,FormLabel,Input,Typography,Button, Textarea,  } from '@mui/joy';
import {Box} from '@mui/joy';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';// import { postTweet } from './action';

export default function Tweet() {
  const handleSubmit = async () => {
    // const result = await postTweet("hello Sir");
    // console.log(result);
  };

  return (
    <div style={{ display:'flex', justifyContent:'center',alignItems:'center',height:'100dvh'}}>
    <Card
     variant='outlined'
      sx={{
          maxHeight:"max-content",
          maxWidth:"max-content",
          minWidth: "25dvw",
          minHeight:"25vh", 
        }}
     >
      <Typography  >Tweet New Post</Typography>
      <Divider/>
        <FormControl>
          <Textarea size='lg' placeholder='Type Text Here' minRows={5} variant='soft'
              sx={{
                //  border: 1, 
                "--Input-minHeight": "60px",
                  }}
               endDecorator={
                <Box
                  sx={{
                    display:"flex",
                    borderTop: '3px solid',
                    borderColor: 'divider',
                    flex: 'auto',
                    pt: '5px',
                }}>
                   <Button sx={{ ml: 'auto' }}>Tweet</Button>
                </Box>
            }   
            />
        </FormControl>
      </Card>
    </div>
  );
}

