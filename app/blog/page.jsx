'use client'
import React from 'react'
import TabNav from '../_components/TabNav'
import { Grid } from '@mui/joy'
import Blogcard from './_components/Blogcard'


export default function page() {
  return (
  <>
  <TabNav/>
  <Grid container spacing={2}>
    <Blogcard/>
    <Blogcard/>
    <Blogcard/>


  </Grid>
  </>
  )
}
