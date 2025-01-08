'use client'
import React from 'react'
import Button from '@mui/joy/Button';
import { Add } from '@mui/icons-material';
import { createTweet } from '../action';
import { Modal } from '@mui/joy';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import {Input} from '@mui/joy';

export default function CreateTweet() {
  const now = new Date();
  const [open, setOpen] = React.useState(false)
  const [text, setText] = React.useState('')
  const [dateValue, setDateValue] = React.useState(now.toISOString().split('T')[0]);
  const [timeValue,setTimeValue] = React.useState(
    now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    })
  )
  const [error,setError] = React.useState('')

 

  const handleClick =()=>{
    setOpen(true)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(text && dateValue && timeValue){
      try{
      // console.log('reached here', dateValue, timeValue)

      const [ hours, minutes ] = timeValue.split(':')

    
      const dateTime = new Date(dateValue);
      dateTime.setHours(parseInt(hours))
      dateTime.setMinutes(parseInt(minutes))
      dateTime.setSeconds(0)

      // console.log('DateTime'+dateTime)

     if (isNaN(dateTime.getTime())){
       setError('Invalid date/time combination')
       return;
     }
     const pgTimestampz = dateTime.toISOString()
     const response= await createTweet(text,pgTimestampz)
    //  console.log("Create Tweet Response",response)
     setError('')

    } catch (err) {
       setError('Invalid date/time format')
   } 
   setText('')
    }
    setOpen(false)
  }

  const handleChange =(type,value)=>{
    if(type === 'date') {
      setDateValue(value)
    }
    else {
      setTimeValue(value)
    }

  }

  return (
    <>
    <Button startDecorator={<Add/>} variant="soft" onClick={handleClick} >Create Tweet</Button>
    <Modal open={open} onClose={()=>setOpen(false)}>
      <ModalDialog>
        <DialogTitle>Schedule Tweet</DialogTitle>
        <DialogContent>Add in the details of your Tweet</DialogContent>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Tweet</FormLabel>
                <Textarea
                  minRows={2}
                  maxRows={4}
                  placeholder='Tweet'
                  onChange={(event)=> setText(event.target.value)}
                  // endDecorator={
                  //   <Typography level="body-xs" sx={{ ml: 'auto' }}>
                  //     {text.length} character(s)
                  //   </Typography>
                  // }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Schedule Date</FormLabel>
                <Input type="date"
                  value={dateValue}
                  onChange={(e) => handleChange('date', e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Scheduled Time</FormLabel>
                <Input type="time" 
                  value={timeValue}
                  onChange={(e) => handleChange('time', e.target.value)}

                />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
      </ModalDialog>

    </Modal>
    </>
  )
}
