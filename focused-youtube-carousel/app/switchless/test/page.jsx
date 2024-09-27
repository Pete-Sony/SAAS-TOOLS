"use client"
// import { Link } from "@mui/joy";
import { Button } from "@mui/joy";
import LinkButton from "../_components/LinkButton";
import LinkV2 from "../_components/LinkV2";
import Box from "@mui/joy/Box";

import TabPanel from "../_components/TabPanel";
function page() {
  return (
    <>
    <h1>Test Page</h1>

    {/* <LinkV2 target="_self"
    Component={()=> <Button>Home</Button>}
     href="/switchless/">This is  overriden</LinkV2>
    <Link href="/switchless/">Home</Link> */}
    <Box sx={{width: "30vw", height: "30vh"}}>
    <TabPanel />
    </Box>
    </>
  )
}

export default page