'use client';

import { Typography,Sheet,Box, Stack } from "@mui/joy";
export default function Logo({offering='Cashflowy',href,sx={}}){

  const sxDefault={
    border:1,
    borderRadius:8 }

  return (
    <Sheet
      component='a'
      href='/'
      sx={{...sx,...sxDefault}}
    >
      
      <Stack
        direction='row'
  
      >

        <Typography level="h3" sx={{color:'white',bgcolor:'black',borderRadius:7,px:1}}>CF</Typography>
        <Typography level="h3" sx={{px:1}}>{offering}</Typography>
      </Stack>
      
    </Sheet>
  )
}