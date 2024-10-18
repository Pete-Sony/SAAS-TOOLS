import React, { useState, useCallback } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardCover,
  CardOverflow,
  Button,
  Divider,
  Typography,
  AspectRatio,
  IconButton
} from '@mui/joy';
import CardActions from '@mui/joy/CardActions';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Crop75Rounded, CropLandscapeRounded } from '@mui/icons-material';

function Gframe2({ src, width = '100%', height = '100%' }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isTheaterMode, setIsTheaterMode] = useState(false);

  const toggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
    setIsTheaterMode(false);
  }, []);

  const toggleTheaterMode = useCallback(() => {
    setIsTheaterMode(!isTheaterMode);
    setIsFullScreen(false);
  }, [isTheaterMode]);

  const sandbox = "allow-scripts allow-same-origin allow-popups allow-forms allow-downloads";

  return (
    <Card
      variant="outlined"
      sx={{
        width: isTheaterMode ? '100vw' : isFullScreen ? '100vw' : 720,
        height: isTheaterMode ? '90vh' : isFullScreen ? '100vh' : 'auto',
        position: 'relative',
        transition: 'all 0.3s ease-in-out',
        margin: isTheaterMode ? 0 : 'auto',
        borderRadius: isTheaterMode || isFullScreen ? 0 : undefined,
      }}
    >
      <CardOverflow>
        <AspectRatio 
          ratio={isTheaterMode ? "21/9" : "16/9"}
          sx={{
            height: isFullScreen ? '100vh' : isTheaterMode ? '90vh' : 'auto',
          }}
        >
          <iframe
            sandbox={sandbox}
            loading="lazy"
            allowFullScreen
            frameBorder="0"
            src={src}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </AspectRatio>
      </CardOverflow>

      <CardOverflow
        variant="soft"
        sx={{
          bgcolor: 'background.level1',
          px: 1,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          opacity: 0,
          transition: 'opacity 150ms ease-in-out',
          '&:hover': {
            opacity: 1,
          },
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent)',
        }}
      >
        <CardContent
          orientation="horizontal"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 1,
            minHeight: '40px',
          }}
        >
          <Typography
            level="body-sm"
            sx={{
              color: 'white',
              fontWeight: 'md',
            }}
          >
            Google Sheet
          </Typography>
          
          <CardActions sx={{ p: 0, gap: 0.5 }}>
            <IconButton 
              size="sm"
              onClick={toggleTheaterMode}
              sx={{ 
                color: 'white',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              {isTheaterMode ? <Crop75Rounded /> : <CropLandscapeRounded />}
            </IconButton>
            
            <IconButton 
              size="sm"
              onClick={toggleFullScreen}
              sx={{ 
                color: 'white',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
            
            <IconButton 
              size="sm"
              component="a"
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: 'white',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              <OpenInNewIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}

export default Gframe2;