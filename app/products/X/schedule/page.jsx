import { Typography,Box } from '@mui/joy'
import React from 'react'
import ScheduleTweetsTable from './_components/ScheduleTweetsTable'
import CreateTweet from './_components/CreateTweet'

function Schedule() {
  return (
    <>
    <Box sx={{mt:2,mb:2,p:1,
      // border:"2px solid red"
      }}>
     <Typography level='h3'>Schedule Tweets</Typography>
    </Box>

  <Box sx={{display:"flex", justifyContent:"flex-end",mb:1 }}>

    <CreateTweet/>
  </Box>

    <ScheduleTweetsTable/>
    {/* <div>Schedule</div> */}
    </>
  )
}

export default Schedule