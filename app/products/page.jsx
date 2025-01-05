'use client'
import React from 'react'
import ProductCard from './_components/ProductCard'
import { Grid } from '@mui/joy'
import TabNav from '../_components/TabNav'

export default function page() {
  return (<>

  <TabNav/>

<Grid container spacing={3}>
      <ProductCard href="https://debts.fahimansari.dev/orgs/042e2e54-bd51-444c-a99d-26d56f37c959/emis" product="Debts App" chips={["joel","peter"]}/>
      <ProductCard href="joel" product="Twiter Bot" chips={["joel","peter"]}/>

    </Grid>
  
  </> 
  )
}
