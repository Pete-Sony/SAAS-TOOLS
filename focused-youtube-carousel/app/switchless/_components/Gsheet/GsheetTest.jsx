import React from 'react'
import { Box } from '@mui/material'
import GSheetIframe from './GsheetIframeFinal'
import GsheetIframe from './Gframe'
export default function GsheetTest() {
    const src= "https://docs.google.com/spreadsheets/d/1DwykjYrPw7QWs7-WWL9uEiLoCj6YvQUuMzWIpCrfMO4/edit?pli=1&gid=0#gid=0"
    const PlaceHolder = ()=>{ return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quo maiores quibusdam velit ducimus sit porro error? Nostrum quod delectus, nisi accusamus, dolore earum et ex, rem tempore debitis officiis.
    Accusantium ut fugiat in nam quisquam nostrum illo dolores ad. Provident alias repellat quaerat quos cupiditate? Assumenda ex ipsam incidunt fuga quos voluptates laborum. Laborum neque illo maiores consectetur vero.
    Exercitationem rem itaque tempora aspernatur, eveniet quia neque? Ut facere reprehenderit repudiandae aperiam, maxime numquam. Quam, nihil id quibusdam dolores eius consequuntur dolor optio temporibus facilis voluptatem explicabo. Dolorum, nobis!</p>}
  return (
    // <Box sx={{height:400, width:300}}>
    
<>
<Box sx={{ width:1500,height:500, border: "2px solid red"}}>

<GSheetIframe src={src}/>


</Box>
{/* <Box sx={{ height: 700,width:1500, border: "2px solid red"}}>
<GsheetIframe src={src}/>
</Box> */}

{/* <SwtichlessIframe src={src}/> */}
</>
    // </Box>

  )
}
