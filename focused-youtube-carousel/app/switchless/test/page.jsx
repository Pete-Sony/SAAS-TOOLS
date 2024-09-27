"use client"
// import { Link } from "@mui/joy";
import { Button } from "@mui/joy";
import LinkButton from "../_components/LinkButton";
import LinkV2 from "../_components/LinkV2";
import Link from "../_components/Link";
function page() {
  return (
    <>
    <h1>Test Page</h1>
    {/* <LinkButton href="/">Home</LinkButton> */}
    {/* <CustomLink component={Button} href="/">Home</CustomLink> */}
    {/* <Link href="/">Home</Link> */}
    <LinkV2 target="_self"
    Component={()=> <Button>Home</Button>}
     href="/switchless/">This is  overriden</LinkV2>
    <Link href="/switchless/">Home</Link>
    </>
  )
}

export default page