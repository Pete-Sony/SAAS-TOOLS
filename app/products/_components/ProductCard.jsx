import { CardContent, Grid, Typography } from '@mui/joy'
import Link from 'next/link'
import React from 'react'
import Card from '@mui/joy/Card';
import Chip from '@mui/joy';

export default function ProductCard({product, href='/',chips=[]}) {
 

  return (
   <>
   <Grid>
    <Card  href={href}>
    <Typography>{product}</Typography>
    <Typography></Typography>
    {chips.map((chip)=>{<Chip>chip</Chip>})}
    </Card>
   </Grid>
   </>
  )
}
