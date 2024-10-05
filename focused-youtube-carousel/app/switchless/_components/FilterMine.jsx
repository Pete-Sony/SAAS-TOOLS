import { useState } from 'react';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Typography from '@mui/joy/Typography';
import  Form from '@mui/joy/Form';
function FilterMine() {
    const [isLoading, setIsLoading] = useState(false);
    const handleReset = () => {
    }
  return (
        <AccordionGroup>
         <Accordion defaultExpanded>
            <AccordionSummary> <Typography level="title-md" fontWeight="bold">
              Filter
            </Typography></AccordionSummary>
           <AccordionDetails>
            <Form onSubmit={handleSubmit}>
           <Grid container spacing={2}>
           <Grid size={{ xs:12, md:12, lg:6}}>
                    <Button   startDecorator={<FilterAltIcon />} disabled={isLoading}
                    sx={{whiteSpace: 'nowrap'}}>
                      Apply filter
                    </Button>
                  </Grid>
                  <Grid size={{ xs:12, md:12, lg:6}}>
                    <Button
                      variant="outlined"
                      onClick={handleReset}
                      disabled={isLoading}>
                      Reset
                    </Button>
                  </Grid>
                  </Grid>
                  </Form>
           </AccordionDetails>
         </Accordion>
        </AccordionGroup>
    )
}

export default FilterMine