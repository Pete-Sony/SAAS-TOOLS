import React from 'react'
import Sidebar from './_components/Sidebar'
import { Box } from '@mui/joy'

export default function ProductsLayoutPage({children}) {
  return (
    <>
    <Box sx={{display:"flex"}}>
        <Sidebar/>
    <Box sx={{ flexGrow: 1, paddingX: 2 }}>
    {children}
    </Box>
    </Box>
    </>
  )
}
