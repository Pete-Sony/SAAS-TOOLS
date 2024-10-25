import React from "react"
import { Typography, AccordionGroup, Accordion, AccordionSummary,AccordionDetails, Box, ButtonGroup, Button } from "@mui/joy"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Grid } from '@mui/joy';
import { useRouter, usePathname } from 'next/navigation';

export default function SideFilter({ children}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const searchParams = new URLSearchParams(formData);
    // Convert searchParams to a normal object
    const searchParamsObject = Object.fromEntries(searchParams.entries());
    // Remove empty values
    Object.keys(searchParamsObject).forEach(key => {
      if (searchParamsObject[key] === '') {
        delete searchParamsObject[key];
      }
    });
  
    // Convert back to URLSearchParams
    const cleanedSearchParams = new URLSearchParams(searchParamsObject);
    const queryString = cleanedSearchParams.toString();
  
    if (queryString) { router.push(`${pathname}?${queryString}`, undefined, { shallow: false }) }
    else { router.push(pathname, undefined, { shallow: false }) }
  }
  const handleReset = () => {
    router.push(pathname, undefined, { shallow: false });
  }

  return (
    <AccordionGroup transition="0.3s ease" variant="outlined" sx={{ borderRadius: "sm" }}>
    <Accordion defaultExpanded>
      <AccordionSummary>
        <Typography level="title-md" fontWeight="bold">Filter</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={handleSubmit}>
          <Box>
            <Grid container spacing={2}>
              {children}
              <Grid xs={12} sx={{ pt: 0 }}>
                <ButtonGroup spacing={1} >
                  <Button type="submit" fullWidth color="primary" variant="solid" startDecorator={<FilterAltIcon />}>Apply filter</Button>
                  <Button fullWidth variant="outlined" color="primary" onClick={handleReset} >Reset</Button>
                  </ButtonGroup>
              </Grid>
            </Grid>
          </Box>
        </form>
      </AccordionDetails>
    </Accordion>
  </AccordionGroup>
  )
}
