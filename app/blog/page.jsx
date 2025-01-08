'use client'
import React from 'react'
import TabNavigationHeader from '../_components/TabNavigationHeader'
import { Grid } from '@mui/joy'
import Blogcard from './_components/Blogcard'


export default function page() {
  return (
  <>
  <TabNavigationHeader/>
  <Grid container spacing={2}>
    <Blogcard/>
    <Blogcard/>
    <Blogcard/>


  </Grid>
  </>
  )
}
