'use client'
import React from 'react';
import DateCard from './DateCard';
import { Grid, Typography, Box, Button } from '@mui/joy';
import DateCard2 from './DateCard2';
import { AppointmentData } from '../_data/AppointmentData';
import { getAppointments } from '../action';
import { format, addDays } from 'date-fns';


export default function CalendarGrid() {

  const [appointments,setAppointments] = React.useState([])
  const days = Array.from({ length: 31 }, (_, i) =>{
    return format(addDays(new Date(2025, 0, 1), i), 'yyyy-MM-dd')
  });
  
  React.useEffect(() => {
    const fetchAppointments = async () => {
      const data = await getAppointments();
      setAppointments(data)
      console.log('Reached Here')
      console.log(data);
      
    }
    fetchAppointments();
  },[])

  React.useEffect(() => {
    console.log("Updated Appointments State:", appointments);
  }, [appointments]);

  const getAppointmentsForDate = (day) =>  {
    const filteredData = appointments.filter((apt) => apt.date === day)
    console.log('Filtering data' , filteredData);
    return  filteredData
  }

    
  return (
      <>
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
         key={day} sm={12/7} lg={12/7}
         sx={{ 
          borderRight: 'solid',
          borderBottom: 'solid',
          borderColor: 'divider', 
        }}
         >
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
               }}>
              <DateCard2  date={day}
              appointments={getAppointmentsForDate(day)}
              />
              {/* <pre>{day}</pre> */}
              </Grid>
            ))}  
          </Grid>
       </Box>
      </>
  );
}