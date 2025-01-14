'use client'
import React, { useEffect } from 'react'
import { Typography, Card, Divider, FormControl, Textarea, Box, Button, Select, Option } from '@mui/joy'
import {readSheets, updateSheets } from '../action';

export default function Standup() {
    const [inputValue, setInputValue] = React.useState('');
    const [selectedUser, setSelectedUser] = React.useState('PRITHVI');

    useEffect(() => {
        const fetchData = async () => {
            const standup = await readSheets(selectedUser);
            setInputValue(standup);
        }
        fetchData();
    }, [selectedUser])

    const handleClick = async () => {
        updateSheets(inputValue, selectedUser);
        console.log(`Updated ${selectedUser} with ${inputValue}`);
    }

  return (
    <div style={{ display:'flex', justifyContent:'center',alignItems:'center',height:'100dvh'}}>
    <Card
     variant='outlined'
      sx={{
          maxHeight:"max-content",
          maxWidth:"max-content",
          minWidth: "25dvw",
          minHeight:"25vh", 
        }}
     >

      <Typography>Daily Standup</Typography>
      <Select
          value={selectedUser}
          onChange={(e, newValue) => setSelectedUser(newValue)}
          sx={{ mt: 1, mb: 2 }}
        >
          <Option value="JOEL">JOEL</Option>
          <Option value="PRITHVI">PRITHVI</Option>
          <Option value="MUBARIS">MUBARIS</Option>
          <Option value="JACOB">JACOB</Option>
        </Select>
      <Divider/>
        <FormControl>
          <Textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)} size='lg' placeholder='Type Text Here' minRows={5} variant='soft'
              sx={{
                //  border: 1, 
                "--Input-minHeight": "60px",
                  }}
               endDecorator={
                <Box
                  sx={{
                    display:"flex",
                    borderTop: '3px solid',
                    borderColor: 'divider',
                    flex: 'auto',
                    pt: '5px',
                }}>
                   <Button sx={{ ml: 'auto' }} onClick={handleClick}>Add</Button>
                </Box>
            }   
            />
        </FormControl>
      </Card>
    </div>



  )
}
