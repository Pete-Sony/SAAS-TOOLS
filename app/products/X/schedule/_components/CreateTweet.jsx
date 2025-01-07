'use client'
import React from 'react'
import Button from '@mui/joy/Button';
import { Add } from '@mui/icons-material';

export default function CreateTweet() {
 

  const handleClick =()=>{

  }


  return (
    <Button startDecorator={<Add/>} variant="soft" onClick={handleClick} >Create Tweet</Button>
  )
}
