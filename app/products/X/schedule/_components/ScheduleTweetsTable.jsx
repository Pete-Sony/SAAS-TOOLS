import React from 'react'
import { Table,Box, IconButton, Typography,Chip } from '@mui/joy'
import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/joy';


export default function ScheduleTweetsTable() {


const CreateTweet = () => {
  return (
    <div>ScheduleTweetsTable</div>
  )
}



  return (

<Table size='md'variant='soft' borderAxis='yBetween'>
  <thead>
    <tr>

    <th>Tweets</th>
    <th>Scheduled At</th>
    <th >Status</th>
    <th style={{width:'10%'}}>Actions</th>
    </tr>

  </thead>
  <tbody>
    <tr>
      <td><Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography>This is where we Tweet</Typography>
        </Box></td>
      <td>2024-01-04 5:40:35</td>
      <td> <Chip  color="warning" variant="soft">Pending</Chip></td>
      <td><IconButton size='small'><EditIcon/></IconButton>
      {/* <IconButton size='small' variant="plain" sx={{ '&:hover': { color: 'red' }, color: "grey" }}><DeleteIcon/></IconButton> */}
      </td>
    </tr>
    <tr>
      <td><Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography>This is where we Tweet</Typography>
        </Box></td>
      <td>2024-01-04 5:40:35</td>
      <td> <Chip  color="warning" variant="soft">Pending</Chip></td>
      <td><IconButton size='small'><EditIcon/></IconButton>
      {/* <IconButton size='small' variant="plain" sx={{ '&:hover': { color: 'red' }, color: "grey" }}><DeleteIcon/></IconButton> */}
      </td>
    </tr>
    <tr>
      <td><Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography>This is where we Tweet</Typography>
        </Box></td>
      <td>2024-01-04 5:40:35</td>
      <td> <Chip  color="warning" variant="soft">Pending</Chip></td>
      <td><IconButton size='small'><EditIcon/></IconButton>
      {/* <IconButton size='small' variant="plain" sx={{ '&:hover': { color: 'red' }, color: "grey" }}><DeleteIcon/></IconButton> */}
      </td>
    </tr>
    
  
    
  </tbody>

</Table>
  )
}
