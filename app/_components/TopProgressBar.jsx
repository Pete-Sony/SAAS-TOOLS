"use client"
import { AppProgressBar  } from 'next-nprogress-bar';

export default function TopProgressBar() {
    return <AppProgressBar 
    color="#0d99fd"
    height="5px"
    options={{ showSpinner: false }}
/>
}
