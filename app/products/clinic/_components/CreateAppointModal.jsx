import React from "react";
import { Modal, ModalDialog, Stack, FormControl, FormLabel, Input, Button, Select, Option  } from "@mui/joy";
import Add from "@mui/icons-material/Add";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';




// import { DatePicker ,TimePicker, LocalizationProvider, AdapterDayjs } from "@mui/x-date-pickers";
import { addHours,addDays, format } from 'date-fns';

import { createAppointment } from "../action";
import { useRouter } from 'next/navigation'



export default function CreateAppointModal() {
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState('')

//Check for possible alternatives for other date functions
  // const [date, setDate] = React.useState(new Date(Date.now() + 86400000).toLocaleDateString('en-GB'));

  const router = useRouter()

  const handleClick = (event) => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  const handleSubmit = async (e) => {
    await createAppointment(e)
    setOpen(false)
    router.refresh()
  }

  return (
    <>
      <Button variant="solid" color="primary" startDecorator={<Add />}
        onClick={handleClick}
        sx={{
          bgcolor: "rgb(26, 115, 232)",
          borderRadius: "100px",
          px: 2,
          py: 1,
          "&:hover": {
            bgcolor: "rgb(66, 133, 244)",
          },
          gap: 0.5,
        }}
      >
        Create Appointment
      </Button>
      <Modal open={open} onClose={handleClose}>
        <ModalDialog>
         <form action={handleSubmit}>
         <Stack spacing={2}>
         <FormControl required>
                <FormLabel>Title</FormLabel>
                <Input
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Appointment Title"
                />
         </FormControl>
         <FormControl >
                <FormLabel>Date</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-cn">
                  <DatePicker
                    name="date"
                    defaultValue={dayjs()}
                    // value={date}
                    // onChange={(newDate) => setDate(newDate)}
                    // disablePast
                  />
                </LocalizationProvider>
              </FormControl>
              <FormControl >
                <FormLabel>Time</FormLabel>
                <LocalizationProvider
                dateAdapter={AdapterDayjs}
                >
                  <TimePicker
                    name="time"
                    defaultValue={dayjs('2022-04-17T16:00')}
                    // value={time}
                    // onChange={(newTime) => setTime(newTime)}
                  />
                </LocalizationProvider>
              </FormControl>
              <FormControl >
                <FormLabel>Duration</FormLabel>
                <Select
                  name="duration"
                  defaultValue="60"
                  // value={duration}
                  // onChange={(_, newValue) => setDuration(newValue)}
                >
                  <Option value="30">30 minutes</Option>
                  <Option value="60">1 hour</Option>
                  <Option value="90">1.5 hours</Option>
                  <Option value="120">2 hours</Option>
                </Select>
              </FormControl>
          <Stack  direction="row" spacing={1} justifyContent="flex-end">
            <Button variant="outlined" color="neutral" onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="solid" color="primary">Schedule Appointment</Button>
           </Stack>
          </Stack>
         </form>
        </ModalDialog>
      </Modal>
    </>
  );
};
