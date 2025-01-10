'use client'
import React from 'react'
import { Table, Box, Select, IconButton, Typography,Chip, FormControl, FormLabel, Option } from '@mui/joy'
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/joy/Checkbox';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { getTweets, deleteTweet } from '../action';

import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/joy';
import { Add } from '@mui/icons-material';


export default function ScheduleTweetsTable() {
 const [rows,setRows ] = React.useState([])
 const [page,setPage] = React.useState(0)
 const [rowsPerPage,setRowsPerPage]= React.useState(5)

  React.useEffect(()=>{
    const fetchTweets = async() => {
      const data = await getTweets()
      console.log(data)
      setRows(data)
    };
    fetchTweets()
  },[])

  const handleDelete = async(id) => {
    await deleteTweet(id)
    setRows(rows.filter((tweet) => tweet.id!==id))
  }

// Complete this sorting Header. Consider the pending and success status too
function labeDisplayedRows({from, to, count}){
  return `${from}-${to} of ${count}`
}

function handleChangeRowsPerPage(event, newValue){
  console.log("new Value"+ newValue)
  setRowsPerPage(parseInt(newValue.toString(),10));
  setPage(0)
}
 

// function descendingComparator({a,b,orderBy}){

//   if(b[orderBy]<a[orderBy]){
//      return -1
//   }
//   if(b[orderBy]>a[orderBy]){
//   return 1
//   } 
//   return 0
// }
// function getcomparator(order,orderBy){
//   return order =='desc' ? (a,b) => descendingComparator(a,b, orderBy)
//    : (a, b) => - descendingComparator(a,b,orderby)

// }

// function TableHead(props){
//   const { onSelectAllClick,numSelected, rowCount } = props

//   return (
//     <thead>
//       <tr>
//         <th>
//           <Checkbox
//            indeterminate={numSelected > 0 && numSelected < rowCount}
//            checked={rowCount > 0 && numSelected === rowCount}
//            onChange={onSelectAllClick}
//           />
//         </th>
//       </tr>
//     </thead>
//   )
// }




  return (
<Table size='md'variant='soft' borderAxis='bothBetween' hoverRow stickyFooter stickyHeader

>
  <thead>
    <tr>
      <th>Tweets</th>
      <th>Scheduled At</th>
      <th >Status</th>
      <th style={{width:'10%'}}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {rows.map((tweet)=>(
      <tr key={tweet.id}>
        <td><Box sx={{display:'flex',justifyContent:'space-between'}}>
          <Typography>{tweet.tweet_text}</Typography>
          </Box>
        </td>
        <td>{tweet.scheduled_time}</td>
        <td> <Chip  color="warning" variant="soft">Pending</Chip></td>
        <td><IconButton size='small'><EditIcon/></IconButton>
        <IconButton size='small' variant="plain"  onClick={()=>handleDelete(tweet.id)}
          sx={{ '&:hover': { color: 'red' }, color: "grey" }}>
          <DeleteIcon/>
          </IconButton>
        </td>
      </tr>
     ))}  
  </tbody>
  <tfoot>
    <tr>
      <td colSpan={4}>
        <Box sx={{
                display:'flex',
                alignItems:'center',
                gap: 2,
                justifyContent:'flex-end'
        }}
        >
          <FormControl 
          orientation='horizontal'
          >
            <FormLabel>Rows per page:</FormLabel>
            <Select onChange={handleChangeRowsPerPage} value={rowsPerPage}>
              <Option value={5}>5</Option>
              <Option value={10}>10</Option>
              <Option value={25}>25</Option>
            </Select>
          </FormControl>
          <Typography>{labeDisplayedRows({
            from: rows.length === 0 ? 0 : page,
            to:30,
            count:50
          })}
          </Typography>
          <Box sx={{display:'flex', gap:1 }}>
            <IconButton
             onClick={(page) => {setPage(page-1)}} 
             disabled={page === 0}>
              <KeyboardArrowLeftIcon/>
            </IconButton>
            <IconButton
            onClick={(page) => {setPage(page+1)}} 
            disabled={rows.length !== -1 ? page >= Math.ceil(rows.length/ rowsPerPage)- 1: false}
              >
              <KeyboardArrowRightIcon/>
            </IconButton>
          </Box>
        </Box>
      </td>
    </tr>
  </tfoot>

</Table>
  )
}
