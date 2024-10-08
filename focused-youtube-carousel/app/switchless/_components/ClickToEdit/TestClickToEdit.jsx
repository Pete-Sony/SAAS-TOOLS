import ClickToEdit from "./ClickToEdit";
import ClickToEditAlex from "./ClickToEditAlex";
import {saveName,saveDescription,getName} from "./actions";
import {Box,CardContent,Typography} from "@mui/joy";

// const data = getName();
 const data = await getName('ClickToEdit') 

 console.log( "Name : ",data[0].name);

export default function TestClickToEdit(){
    return(
        <>
        <CardContent sx={{width:'300px'}}>
        <Typography level="h3" title="No name">
          <ClickToEdit onSave={saveName} >
       {data[0].name}
          </ClickToEdit>
        </Typography>
        {/* <Typography level="h3" title="No name">
          <ClickToEditAlex  onSave={saveName} >
       {data[0].name}
          </ClickToEditAlex>
        </Typography> */}
        {/* <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          Created on : JuLy
        </Typography>
        // <Typography level="h1" sx={{ color: 'neutral.400' }}>
        //   <ClickToEdit >
        //    'No Description'
        //   </ClickToEdit>
        // </Typography>
        <Typography level="body-lg" fontWeight="lg" sx={{ color: 'neutral.400' }}>
          <ClickToEdit >
           'No Description'
          </ClickToEdit>
        </Typography>
        <Typography level="body-sm" sx={{ color: 'neutral.400' }}>
          <ClickToEdit >
           'No Description'
          </ClickToEdit>
        </Typography> */}
      </CardContent>
      <div style={{display: 'inline-flex', justifyContent: 'space-between', width: '200px'}}>
  <div>Item 1</div>
  <div>Item 2</div>
</div>
<p>This text will be inline with the flex container.</p>
<div style={{display:'inline-flex',alignItems:'center',justifyContent:'space-between', border:'1px solid black', width:'500px'}}>
<div style={{ width:'100px', backgroundColor: 'lightblue'}}>
  Box 1
</div>
{/* <div style={{width:'100px', backgroundColor: 'lightcoral'}}>
  Box 2
</div> */}
<p>This text will also flow inli.</p>
</div>
      
      
      </>
    )
}