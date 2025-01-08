import React from 'react'
import { Box, Tabs ,Tab, TabList, TabPanel} from '@mui/joy'
import  { tabClasses } from '@mui/joy/Tab';
import { usePathname } from 'next/navigation';


export default function TabNavigationHeader() {
 const pathname = usePathname()
 
 const getTabValue = () => {
  switch(pathname){
    case '/products': return 0
    case '/blog': return 1
    case '/pricing': return 2
  }
 }

  return (
    <Box sx={{ display:"flex", justifyContent:"center" }}>
        <Tabs defaultValue={getTabValue} sx={{ bgcolor:'transparent' }}>
          <TabList 
           disableUnderline
           sx={{ p: 0.5, gap: 0.5, borderRadius: 'xl', bgcolor: 'background.level1',
              [`& .${tabClasses.root}[aria-selected="true"]`]: {
                boxShadow: 'sm',
                bgcolor: 'background.surface',
              },
            }}>
            <Tab disableIndicator value={0} component='a' href="/products">Products</Tab>
            <Tab disableIndicator value={1} component='a' href="/blog">Blog</Tab>
            <Tab disableIndicator value={2} component='a' href="/pricing">Pricing</Tab>
          </TabList>
        </Tabs>
        </Box>
  )
}
