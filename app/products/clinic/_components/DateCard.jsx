import React from 'react'
import { Grid, Typography, Box, Card, Chip } from '@mui/joy'


export default function DateCard({day,chips=[]}) {
 
  return (
   <>
    <Grid  sm={12/7} lg={12/7}>
      <Card variant='soft'
        sx={{
          textDecoration: "none", transition: "all 0.1s ease-in-out",
          // "&:hover": { textDecoration: "none", boxShadow: "lg", backgroundColor:'back', transform: "translateY(-2px)" },
        }}
      >
        <Typography level="title-lg" sx={{color:"inherit", textAlign:"center"}} >{day}</Typography>
        <Box sx={{display:'flex',gap:0.5}} >
        {chips.map((chip,index)=><Chip color='success' key={index}>{chip}</Chip>)}
        </Box>
      </Card>
    </Grid>
    </>
  )
}
