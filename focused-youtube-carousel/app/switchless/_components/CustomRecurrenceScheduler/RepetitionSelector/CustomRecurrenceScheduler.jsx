import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, ToggleButtonGroup, ToggleButton, RadioGroup, Radio, FormControlLabel, Input, Button } from '@mui/joy';

const CustomRecurrenceScheduler = ({ onScheduleSet }) => {
  const [repeatFrequency, setRepeatFrequency] = useState('week');
  const [repeatEvery, setRepeatEvery] = useState(1);
  const [repeatOn, setRepeatOn] = useState(['M']);
  const [endsOption, setEndsOption] = useState('never');
  const [endsDate, setEndsDate] = useState('');
  const [endsOccurrences, setEndsOccurrences] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process and submit the schedule data
    const scheduleData = {
      repeatFrequency,
      repeatEvery,
      repeatOn,
      endsOption,
      endsDate,
      endsOccurrences,
    };
    onScheduleSet(scheduleData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto' }}>
      <Typography level="h4" mb={2}>Custom Recurrence</Typography>
      
      {/* Repeat frequency selector */}
      // Add this inside the form
<Box display="flex" alignItems="center" mb={2}>
  <Typography mr={1}>Repeat every</Typography>
  <Input
    type="number"
    value={repeatEvery}
    onChange={(e) => setRepeatEvery(Number(e.target.value))}
    sx={{ width: 60, mr: 1 }}
  />
  <Select value={repeatFrequency} onChange={(e) => setRepeatFrequency(e.target.value)}>
    <MenuItem value="day">day</MenuItem>
    <MenuItem value="week">week</MenuItem>
    <MenuItem value="month">month</MenuItem>
    <MenuItem value="year">year</MenuItem>
  </Select>
</Box>
      {/* Day of week selector */}
      // Add this after the repeat frequency selector
{repeatFrequency === 'week' && (
  <Box mb={2}>
    <Typography mb={1}>Repeat on</Typography>
    <ToggleButtonGroup
      value={repeatOn}
      onChange={(e, newValue) => setRepeatOn(newValue)}
      aria-label="days of week"
    >
      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
        <ToggleButton key={day} value={day} aria-label={day}>
          {day}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  </Box>
)}
      {/* Ends section */}
      // Add this after the day of week selector
<Box>
  <Typography mb={1}>Ends</Typography>
  <RadioGroup value={endsOption} onChange={(e) => setEndsOption(e.target.value)}>
    <FormControlLabel value="never" control={<Radio />} label="Never" />
    <FormControlLabel
      value="on"
      control={<Radio />}
      label={
        <Box display="flex" alignItems="center">
          <Typography mr={1}>On</Typography>
          <Input
            type="date"
            value={endsDate}
            onChange={(e) => setEndsDate(e.target.value)}
            disabled={endsOption !== 'on'}
          />
        </Box>
      }
    />
    <FormControlLabel
      value="after"
      control={<Radio />}
      label={
        <Box display="flex" alignItems="center">
          <Typography mr={1}>After</Typography>
          <Input
            type="number"
            value={endsOccurrences}
            onChange={(e) => setEndsOccurrences(Number(e.target.value))}
            disabled={endsOption !== 'after'}
            sx={{ width: 60, mr: 1 }}
          />
          <Typography>occurrences</Typography>
        </Box>
      }
    />
  </RadioGroup>
</Box>
      
      <Button type="submit" sx={{ mt: 2 }}>Done</Button>
    </Box>
  );
};

export default CustomRecurrenceScheduler;