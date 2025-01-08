import React from 'react'
import { Grid, Typography, Box, Card, Chip } from '@mui/joy'
import Link from 'next/link'


export default function ProductCard({name, href='/',chips=[], description}) {
 

  return (
   <>
    <Grid  xs={12} sm={6} md={4} lg={3}>
      <Card variant='soft'  component={Link} href={href}
        sx={{
          textDecoration: "none", transition: "all 0.1s ease-in-out",
          "&:hover": { textDecoration: "none", boxShadow: "lg", backgroundColor: "background.level2", transform: "translateY(-2px)" },
        }}
      >
        <Typography level="title-lg" sx={{color:"inherit"}} >{name}</Typography>
        <Typography level='body-md'>{description}</Typography>
        <Box sx={{display:'flex',gap:0.5}} >
        {chips.map((chip,index)=><Chip color='success' key={index}>{chip}</Chip>)}
        </Box>
      </Card>
    </Grid>
    </>
  )
}
