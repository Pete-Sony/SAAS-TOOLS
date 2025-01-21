import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components for the calendar
const CalendarGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: theme.spacing(0),
  padding: theme.spacing(0),
  backgroundColor: "background.level2",
}));

const DayCell = styled(Paper)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '1',
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent:'center',
  backgroundColor: theme.palette.background.paper,
}));

const Event = styled(Box)(({ theme }) => ({
  position: 'absolute',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.75rem',
  maxWidth: '90%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

const Calendar = () => {
  // Generate days for a month (example: 31 days)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  
  // Example events with day and position
  const events = [
    { 
      day: 15,  // Event on the 15th
      title: 'Meeting',
      position: 'bottom' // Position within the cell
    },
    {
      day: 5,   // Event on the 5th
      title: 'Lunch',
      position: 'bottom'
    }
  ];

  // Function to render events for a specific day
  const renderEvents = (day) => {
    const dayEvents = events.filter(event => event.day === day);
    return dayEvents.map((event, index) => (
      <Event
        key={index}
        sx={{
          top: event.position === 'top' ? '4px' : 'auto',
          bottom: event.position === 'bottom' ? '4px' : 'auto'
        }}
      >
        {event.title}
      </Event>
    ));
  };

  return (
    <>
  
     <Paper sx={{ maxHeight:'100vh', margin: 'auto', p: 2, overflow:'auto'}}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        January 2025
      </Typography>
      <CalendarGrid>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <Box key={day} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            {day}
          </Box>
        ))}
        {days.map((day) => (
          <DayCell key={day} elevation={1}>
            <Typography>{day}</Typography>
            {renderEvents(day)}
          </DayCell>
        ))}
      </CalendarGrid>
     </Paper>
    </>
  );
};

export default Calendar;