import React from 'react';
import DateCard from './DateCard';
import { Grid, Typography, Box } from '@mui/joy';

export default function CalendarGrid() {

    const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <>
    <Box 
        sx={{  maxWidth: {xs: "100%",sm: "600px",md: "900px",lg: "1200px"} ,
                margin:"0 auto", pt:"50px"}}>
      <Grid container>
        <Grid >
            {days.map((day) =>{

            <DateCard day={day} key={day}/>
            })}
            <Typography>JOel</Typography>
        </Grid>
      </Grid>
      </Box>
 
    </>
  );
}