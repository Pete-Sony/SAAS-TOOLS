import { Typography, Grid, Card, Avatar } from '@mui/joy'
import React from 'react'

export default function Blogcard(){
  return (
    <>
    <Grid md={12} lg={6}>
    <Card>
        <Typography>Header</Typography>
        <Typography>Author</Typography>
        <Typography>Date</Typography>
        <Avatar>JP</Avatar>
    </Card>
    </Grid>
    </>
  )
}
