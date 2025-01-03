import { Typography,Box } from '@mui/joy'
import React from 'react'
import ScheduleTweetsTable from './_components/ScheduleTweetsTable'

function Schedule() {
  return (
    <>
    <Box sx={{mt:2,mb:2,p:1,
      // border:"2px solid red"
      }}>
     <Typography level='h3'>Schedule Tweets</Typography>
    </Box>

    <ScheduleTweetsTable/>
    {/* <div>Schedule</div> */}
    </>
  )
}

export default Schedule