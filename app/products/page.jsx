'use client'
import React from 'react'
import ProductCard from './_components/ProductCard'
import { Grid,Box } from '@mui/joy'
import TabNavigationHeader from '../_components/TabNavigationHeader'
import { FindReplaceOutlined } from '@mui/icons-material'

export default function page() {

const products= [
  {
    name:'Debts Tracker',
    href:"https://debts.fahimansari.dev/orgs/042e2e54-bd51-444c-a99d-26d56f37c959/emis",
    description:'Debts App helps track personal finances by managing EMI patments, loans, lenders and payment schedules',
    chips:['Personal Finance','EMI Tracker']
  },
  {
    name:'X Bot',
    href:"/products/X/scheduler",
    description:'Dashboard for managing and Automating Tweets. Users can create, queue and schedule a large number of Tweets',
    chips:['Creator Tool','X-API','Automation',]
  },
]



  return (
    <>
      <TabNavigationHeader/>
      <Box 
        sx={{  maxWidth: {xs: "100%",sm: "600px",md: "900px",lg: "1200px"} ,
                margin:"0 auto", pt:"50px"}}>
        <Grid container spacing={4}>
          {products.map((product,index)=> 
          <ProductCard key={index} name={product.name} href={product.href} 
          description={product.description} chips={product.chips} />)}
        </Grid>
      </Box>
    </> 
    )
  }
