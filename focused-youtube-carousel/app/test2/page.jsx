"use client"
import { Button } from "@mui/joy";
import Box from "@mui/joy/Box";
import StateFullTabs2 from "../switchless/_components/StateFullTabs2";
import Logo from "../switchless/_components/LogoV1";
import {Link} from 'switchless'
const CustomButton = (props) => {
  return <Button variant="solid" sx={{color: "red"}} >While this is visible</Button>
}


function Page() {
  return (
    <>
     <Link href="/"
    
     Component={CustomButton}

     >This is a hidden</Link>
       {/* This should not be hidden */}
    </>
  )
}

export default Page   