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
                    <Typography variant="h1" sx={{ mb: 2 }}>
                      January 2025
                    </Typography>
          
      <Grid container>
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
    <Grid  sm={12/7} lg={12/7}>
          <Box key={day} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            {day}
          </Box>
          </Grid>
        ))}
            {days.map((day) =>(
            <DateCard day={day} key={day}/>
           ))}
        
              </Grid>
              </Box>
    </>
  );
}