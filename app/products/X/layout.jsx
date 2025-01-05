import React from 'react'
import Sidebar from './_components/Sidebar'
import { Box } from '@mui/joy'

export default function ProductsLayoutPage({children}) {
  return (
    <>
    <Box sx={{display:"flex"}}>

        <Sidebar/>
    {/* Layout UI */}
    {/* Place children where you want to render a page or nested layout */}
    <Box sx={{ flexGrow: 1, paddingX: 2 }}>

    {children}
    </Box>

    </Box>
  


    </>
  )
}
