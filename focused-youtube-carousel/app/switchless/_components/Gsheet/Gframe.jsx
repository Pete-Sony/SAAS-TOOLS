import React, { useState } from 'react';
import {Box, Card, CardContent ,CardCover, CardOverflow, Button, Divider, Typography, AspectRatio} from '@mui/joy'
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import WidthFullIcon from '@mui/icons-material/WidthFull';



function Gframe({src, width = '100%', height = '100%'}) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isTheaterMode, setIsTheaterMode] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    setIsTheaterMode(false);
  };

  const toggleTheaterMode = () => {
    setIsTheaterMode(!isTheaterMode);
    setIsFullScreen(false);
  };

  const sandbox = "allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
  
  return (
  

    <Card variant="outlined"
     sx={{  width: '100%',
      maxWidth: '720px',
     position: 'relative' }}>
    <CardOverflow>
      <AspectRatio ratio="2">
      <iframe 
                sandbox={sandbox}
                loading="lazy"
                allowFullScreen
                frameBorder="0"
                src={src} />
      </AspectRatio>
    </CardOverflow>
  
    <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1', px: 1 }} >
      <Divider inset="context" />
      <CardContent orientation="horizontal"
       sx={{ display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', p: 0,  
        minHeight: '20px',
        height: '1vh',
        maxHeight: '60px'}}>
        <Typography
          level="body-sm"
          textColor="text.secondary"
          sx={{ fontWeight: 'md' }}
          ml={0}
          pl={0}

        >
          Google Sheet
        </Typography>
         <Divider/>
        <CardActions sx={{ p: 0, justifyContent: 'flex-end' }}>
          <IconButton size="xs" mr={1} >
            <WidthFullIcon sx={{fontSize: '1rem'}} />
          </IconButton>
          <IconButton size="xs" mr={1} onClick={toggleFullScreen} >
          {isFullScreen ? <FullscreenExitIcon sx={{fontSize: '1rem'}}/> : <FullscreenIcon sx={{fontSize: '1rem'}}/>}
          </IconButton>
          <IconButton size="xs" mr={1} component="a" href={src} target="_blank" rel="noopener noreferrer">
            <OpenInNewIcon sx={{fontSize: '1rem'}} />
          </IconButton>
        </CardActions>
      </CardContent>
    </CardOverflow>
  </Card>
   
  )
}

export default Gframe
