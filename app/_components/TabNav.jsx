import React from 'react'
import { Box, Tabs ,Tab, TabList, TabPanel} from '@mui/joy'
import  { tabClasses } from '@mui/joy/Tab';

import Link from './Link';

export default function TabNav() {
  return (
  
          <Box sx={{display:"flex", justifyContent:"center"}}>
        <Tabs defaultValue={0} sx={{bgcolor:'transparent' }}>
          <TabList 
           disableUnderline
           sx={{
              p: 0.5,
              gap: 0.5,
              borderRadius: 'xl',
              bgcolor: 'background.level1',
              [`& .${tabClasses.root}[aria-selected="true"]`]: {//Confused
                boxShadow: 'sm',
                bgcolor: 'background.surface',
              },
    
            }}>
                <Link href='/products'>
            <Tab disableIndicator value={0}>Products</Tab>
                </Link>
            <Link href="/blog" >
                <Tab disableIndicator value={1}>Blog</Tab>
             </Link>
             <Link href="/pricing" >
            <Tab disableIndicator value={2}>Pricing</Tab>
            </Link>
          </TabList>
          {/* <TabPanel value={0}>Products content here</TabPanel>
          <TabPanel value={1}>Blog content here</TabPanel>
          <TabPanel value={2}>Pricing content here</TabPanel> */}
        </Tabs>
        </Box>
  )
}
