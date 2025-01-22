import React from 'react';
import { Chip, Stack, Typography, Sheet } from '@mui/joy';
import { format, isToday } from 'date-fns';


export default function DateCard({date,appointments=[]}) {

       const isCurrentDay = isToday(date);
    
     // Calculate if appointments might overflow and need truncating
      const shouldTruncate = appointments.length > 3;
      const visibleAppointments = shouldTruncate ? appointments.slice(0, 2) : appointments;
 

  const formatTime = (time) => {
    try {
      return format(new Date(`2024-01-01T${time}`), 'h:mm a');
    } catch(error) {
      return time
    }
  };

  const getDay = (date) => {
    const day = new Date(date).getDate()
    // console.log(date)
    return day
  }


  return (
    <>
    <Sheet sx={{minHeight: '115px', bgcolor: isCurrentDay ? 'background.level1' : 'background.surface',
          '&:hover': {
              bgcolor: 'primary.100',
              transition: 'background-color 0.4s ease',
            },
            }} >
           <Typography level="body-sm" fontWeight={isCurrentDay ? '1000' : '500'} sx={{ mb: 1, textAlign:"center" }}>
             {getDay(date)}
            </Typography>
      <Stack spacing={0.5} sx={{ overflow: 'hidden', mb:0.5 }}>
      {visibleAppointments.map((apt) => (
          <Chip
            key={apt.id}
            size="sm"
            variant="soft"
            color="primary"
            sx={{
              maxWidth: '100%',
              fontSize: '12px',
              py: 0,
              height: '24px',
              '& .MuiChip-label': {
                px: 1,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            }}
          >
            {`${formatTime(apt.time)} ${apt.title}`}
          </Chip>
        ))}
         {shouldTruncate && (
          <Chip
            size="sm"
            variant="soft"
            color="neutral"
            sx={{
              maxWidth: '100%',
              fontSize: '12px',
              py: 0,
              height: '24px',
            }}
          >
            +{appointments.length - 2} more
          </Chip>
        )}
        </Stack>
        </Sheet>
    </>
  );
}