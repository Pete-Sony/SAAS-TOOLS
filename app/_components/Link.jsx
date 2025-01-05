import React from 'react'
import { Link as JoyLink } from '@mui/joy'
import NextLink from 'next/link'


export default function Link({ children, href="/" }){
  return (
    <JoyLink color="neutral" component={NextLink} underline="none" href={href}>
        {children}
    </JoyLink>
  )
}
