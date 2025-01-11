'use client'
import React from 'react'
import { Typography, Card, Divider, FormControl, Textarea, Box, Button } from '@mui/joy'
import updateSheets from './action';


export default function page() {

  const handleClick = async () => {
    alert('Added Standup');
    updateSheets();
  }

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
      
      <Typography  >Daily Standup</Typography>
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
                   <Button sx={{ ml: 'auto' }} onClick={handleClick}>Add</Button>
                </Box>
            }   
            />
        </FormControl>
      </Card>
    </div>
  )
}
