import React from 'react'
import { Grid, Typography, Box, Card, Chip } from '@mui/joy'


export default function DateCard({day,chips=[]}) {
 
  return (
   <>
    <Grid  xs={12} md={7} lg={7}>
      <Card variant='soft'
        sx={{
          textDecoration: "none", transition: "all 0.1s ease-in-out",border:'2px solid blue',
          "&:hover": { textDecoration: "none", boxShadow: "lg", backgroundColor: "blue", transform: "translateY(-2px)" },
        }}
      >
        <Typography level="title-lg" sx={{color:"inherit"}} >{day}</Typography>
        <Box sx={{display:'flex',gap:0.5}} >
        {chips.map((chip,index)=><Chip color='success' key={index}>{chip}</Chip>)}
        </Box>
      </Card>
    </Grid>
    </>
  )
}
