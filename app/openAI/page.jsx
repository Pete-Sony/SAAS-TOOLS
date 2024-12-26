import React from 'react'
import { generateHaiku } from './actions'
import { Button, Card, Typography } from '@mui/joy'

export default function Page() {
  return (
    <>
     <Card sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
        }}
        >
        <Typography>Open AI</Typography>
            <Button
            onClick={generateHaiku}
            >Generate Haiku
            </Button>
        </Card>
    </>
  )
}
