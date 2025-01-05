import React from 'react'
import { Box, Tabs ,Tab, TabList, TabPanel} from '@mui/joy'


const Navbar = () => {
  return (
    <Tabs defaultValue={0} sx={{bgcolor:'transparent' }}>
      <TabList 
       disableUnderline
       sx={{
          p: 0.5,
          gap: 0.5,
          borderRadius: 'xl',
        }}>
        <Tab disableIndicator value={0}>Products</Tab>
        <Tab disableIndicator value={1}>Blog</Tab>
        <Tab disableIndicator value={2}>Pricing</Tab>
      </TabList>
      <TabPanel value={0}>Products content here</TabPanel>
      <TabPanel value={1}>Blog content here</TabPanel>
      <TabPanel value={2}>Pricing content here</TabPanel>
    </Tabs>
  )
}
export default function page() {

  return (
    <>
     <Box sx={{display:"flex", justifyContent:"center"}}>
    <Navbar/>
     </Box>
    <div>We are a ragtag group of people trying to find what interests us. So far we are interested in products that saves us time and curates information.</div>
    </>
  )
}
