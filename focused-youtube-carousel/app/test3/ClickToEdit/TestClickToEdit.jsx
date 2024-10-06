import ClickToEdit from "./ClickToEdit";
import {saveName,saveDescription} from "./actions";
import {Box,CardContent,Typography} from "@mui/joy";

export default function TestClickToEdit(){
    return(
        <CardContent>
        <Typography level="title-lg">
          <ClickToEdit >
           'No name'
          </ClickToEdit>
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          Created on : JuLy
        </Typography>
        <Typography fontSize="md" fontWeight="lg" sx={{ color: 'neutral.400' }}>
          <ClickToEdit >
           'No Description'
          </ClickToEdit>
        </Typography>
      </CardContent>
    )
}