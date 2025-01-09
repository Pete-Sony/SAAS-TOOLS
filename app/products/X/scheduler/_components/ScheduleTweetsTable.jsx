'use client'
import React from 'react'
import { Table, Box, Select, IconButton, Typography,Chip, FormControl, FormLabel } from '@mui/joy'
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/joy/Checkbox';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { getTweets, deleteTweet } from '../action';

import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/joy';
import { Add } from '@mui/icons-material';


export default function ScheduleTweetsTable() {
 const [tweets,setTweets ] = React.useState([])
 const [page,setPage] = React.useState(0)

  React.useEffect(()=>{
    const fetchTweets = async() => {
      const data = await getTweets()
      console.log(data)
      setTweets(data)
    };
    fetchTweets()
  },[])

  const handleDelete = async(id) => {
    await deleteTweet(id)
    setTweets(tweets.filter((tweet) => tweet.id!==id))
  }

// Complete this sorting Header. Consider the pending and success status too
function labeDisplayedRows({from, to, count}){
  return `${from}-${to} of ${count}`
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
    {tweets.map((tweet)=>(
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
            <Select/>
          </FormControl>
          <Typography>{labeDisplayedRows({
            from: 1,
            to:30,
            count:50
          })}
          </Typography>
          <Box sx={{display:'flex', gap:1 }}>
            <IconButton
             onClick={(page) => {setPage(page-1)}} 
             disabled={page==1}>
              <KeyboardArrowLeftIcon/>
            </IconButton>
            <IconButton
            onClick={(page) => {setPage(page+1)}} 
            disabled={page==1}
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
