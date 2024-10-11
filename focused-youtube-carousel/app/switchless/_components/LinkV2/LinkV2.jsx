import React from 'react'
import { Link as JoyLink } from '@mui/joy'
import NextLink from 'next/link'

export default function LinkV2({ href='/', sx={}, target='_self', onClick=()=>{}, children, Component=null }) {
  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  const content = Component ? <Component>{children}</Component> : children;

  return (
    <NextLink href={href} target={target} passHref>
      <JoyLink 
        color="neutral" 
        underline="none" 
        sx={{
          backgroundColor: "transparent",
          "&:hover": { backgroundColor: "none" },
          ...sx
        }}
        onClick={handleClick}
      >
        {content}
      </JoyLink>
    </NextLink>
  )
}