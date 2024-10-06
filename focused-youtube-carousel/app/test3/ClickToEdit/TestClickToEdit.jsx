import ClickToEdit from "./ClickToEdit";
import {saveName,saveDescription} from "./actions";
import {Box} from "@mui/joy";

export default function TestClickToEdit(){
    return(
        <Box sx={{display:'inline-block'}}>
        <ClickToEdit >
            Hello World
        </ClickToEdit>
        </Box>
    )
}