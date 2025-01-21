import React from 'react'
import Sidebar from './_components/SideBar'
import { Box } from '@mui/material'

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
