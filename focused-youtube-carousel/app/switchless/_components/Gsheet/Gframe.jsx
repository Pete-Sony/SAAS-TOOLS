import React from 'react';
import {Card, CardContent , CardOverflow, Divider, Typography, AspectRatio} from '@mui/joy'
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { useRef,useEffect } from 'react';



export default function GsheetIframe({src, width="100%", height="600px"}) {
  const iframeRef = useRef(null);
// Fullscreen handling function
const handleFullscreen = () => {
  if (iframeRef.current) {
    if (iframeRef.current.requestFullscreen) {
      iframeRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      console.error("Fullscreen API is not supported.");
    }
  }
};

useEffect(() => {
  const iframe = iframeRef.current;

  const handleMouseEnter = () => {
    document.body.style.overflow = 'hidden';
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = 'auto';
  };

  if (iframe) {
    iframe.addEventListener('mouseenter', handleMouseEnter);
    iframe.addEventListener('mouseleave', handleMouseLeave);
  }

  // Cleanup event listeners
  return () => {
    if (iframe) {
      iframe.removeEventListener('mouseenter', handleMouseEnter);
      iframe.removeEventListener('mouseleave', handleMouseLeave);
    }
  };
}, []);


  const iframeProps = {
    sandbox: "allow-scripts allow-same-origin allow-popups allow-forms allow-downloads",
    loading: "lazy",
    allowFullScreen: true,
    frameBorder: 0,
    src: src,
    ref:iframeRef
  }
  
  return (
    <Card variant="outlined" sx={{ width: width, height:height, gap: 0 }}>
      <CardOverflow sx={{ paddingBottom: 0 }}>
        {/* <AspectRatio objectFit="inherit" > */}
          <iframe {...iframeProps} />
        {/* </AspectRatio> */}
      </CardOverflow>
      <Divider />
      <CardOverflow variant="soft" sx={{ px: 1 }}>
        <CardContent orientation="horizontal"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 0, ml: 0 }}>
          <Typography level="body-sm">Google Sheet</Typography>
          <CardActions sx={{ p: 0, justifyContent: 'flex-end' }}>
          <IconButton onClick={(e) => {
                e.preventDefault();
                handleFullscreen();
              }} ssize="xs" >
              <FullscreenIcon sx={{ fontSize: '1rem' }} /> 
              <Typography level="body-sm"> FullScreen</Typography>
             
            </IconButton>
            <IconButton size="xs" component="a" href={src} target="_blank" rel="noopener noreferrer">
              <OpenInNewIcon sx={{ fontSize: '1rem' }} /> 
              <Typography sxlevel="body-sm"> Open</Typography>
            </IconButton>
          </CardActions>
        </CardContent>
      </CardOverflow>
    </Card>
   
  )
}


