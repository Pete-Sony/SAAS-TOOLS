import React from 'react'
import Button from '@mui/joy/Button';
import { Add } from '@mui/icons-material';

export default function CreateTweet() {
  return (
    <Button startDecorator={<Add/>} variant="soft" >Create Tweet</Button>
  )
}
