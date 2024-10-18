'use client';
import _ from 'lodash';
import { Typography,Sheet,Box, Stack } from "@mui/joy";
export default function Logo({offering='Cashflowy',href,sx={}}){
  // const a = {}
  const sxDefault={
    border:1,
    borderRadius:8,
    // bgcolor:'rgb(241, 255, 231)'
    // bgcolor:'#009C95',
  }

  return (
    <Sheet
      component='a'
      href='/'
      sx={{...sx,...sxDefault}}
    >
      
      <Stack
        direction='row'
        // spacing={1}
        // px={1}
      >

        <Typography level="h3" sx={{color:'white',bgcolor:'black',borderRadius:7,px:1}}>CF</Typography>
        <Typography level="h3" sx={{px:1}}>{offering}</Typography>
      </Stack>
      
    </Sheet>
  )
}