import React from 'react';
import DateCard from './DateCard';
import { Grid, Typography, Box, Button } from '@mui/joy';
import DateCard2 from './DateCard2';
import { AppointmentData } from '../_data/AppointmentData';
import { getAppointments } from '../action';

export default function CalendarGrid() {
  React.useEffect(() => {
    handleFetch()
  }, [])

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    
    const handleFetch = ()=> {
      // console.log("fetching")
      getAppointments()
    }

  return (
      <>
      {/* <Button onSubmit={handleFetch}>Fetch</Button> */}
       <Box  sx={{ maxWidth:{ xs: "100%", sm: "600px", lg: "100%"}, margin:"0 auto", pt:0.2}}>
         <Typography level="h3" sx={{ mb: 2 }}> January 2025</Typography>
        <Grid container
        
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: "solid",
          borderLeft: 'solid',
          borderColor: 'divider',  
        }}
        >
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
         <Grid  
         sx={{ 
          borderRight: 'solid',
          borderBottom: 'solid',
          borderColor: 'divider', 
        }}
         key={day} sm={12/7} lg={12/7}>
            <Box  sx={{ textAlign: 'center', fontWeight: 'bold' }}>{day} </Box>
          </Grid>
        ))}   
        {days.map((day) =>(
              // <DateCard day={day} key={day}/>

              <Grid  key={day} sm={12/7} lg={12/7}
               sx={{
               
                  borderRight: 'solid',
                  borderBottom: 'solid',
                  borderColor: 'divider',
            
               }}
          
              >
              <DateCard2  key={day} date={day}
              appointments={AppointmentData}
              />
              {/* <pre>{day}</pre> */}
              </Grid>
            ))}  
          </Grid>
       </Box>
      </>
  );
}