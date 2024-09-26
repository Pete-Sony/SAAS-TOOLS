import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import NextLink from "next/link";

export default function LinkButton({ href, children }) {
  return (
    <>
       <NextLink href={href}>
        <Button>{children}</Button>
        </NextLink>
    </>
  )
  
}