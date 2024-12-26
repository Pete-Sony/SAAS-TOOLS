import React from 'react'
import { generateHaiku } from './actions'
import { Button, Card, Typography } from '@mui/joy'

export default function Page() {
  return (
    <><Card sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%"
        // border:"2px solid red"
    }}>
    <Typography>Open AI</Typography>
        <Button onClick={generateHaiku}>Generate Haiku</Button>
        </Card>
    </>
  )
}
