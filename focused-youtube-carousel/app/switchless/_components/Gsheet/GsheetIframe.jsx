import React, { useState } from 'react';
import { Box, IconButton, Modal, Typography } from '@mui/joy';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const GsheetIframe = ({ src, width = '100%', height = '400px' }) => {
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

  const iframeStyle = {
    width: '100%',
    height: isFullScreen ? '100vh' : isTheaterMode ? '80vh' : height,
    border: 'none',
  };

  const content = (
    // <Box sx={{ position: 'relative', width: isFullScreen || isTheaterMode ? '100%' : width }}>
    //   <iframe
    //     src={src}
    //     style={iframeStyle}
    //     allowFullScreen
    //   />
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '8px', 
        backgroundColor: '#edf2f6',
        color: '#394351',
      }}>
        <Typography level="body-sm">Google sheet</Typography>
        <Box>
          <IconButton onClick={toggleTheaterMode} sx={{ mr: 1 }}>
            <TheaterComedyIcon />
          </IconButton>
          <IconButton onClick={toggleFullScreen} sx={{ mr: 1 }}>
            {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
          <IconButton component="a" href={src} target="_blank" rel="noopener noreferrer">
            <OpenInNewIcon />
          </IconButton>
        </Box>
      </Box>
    // </Box>
  );

  if (isFullScreen) {
    return (
      <Modal
        open={isFullScreen}
        onClose={() => setIsFullScreen(false)}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {content}
      </Modal>
    );
  }

  return content;
};

export default GsheetIframe;
