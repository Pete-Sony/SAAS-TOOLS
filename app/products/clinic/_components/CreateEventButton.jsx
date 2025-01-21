import React from 'react';
import Button from '@mui/joy/Button';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Add from '@mui/icons-material/Add';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { CssVarsProvider } from '@mui/joy/styles';

const CreateEventButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CssVarsProvider>
      <Button
        variant="solid"
        color="primary"
        startDecorator={<Add />}
        endDecorator={<KeyboardArrowDown />}
        onClick={handleClick}
        sx={{
          bgcolor: 'rgb(26, 115, 232)',
          borderRadius: '100px',
          px: 2,
          py: 1,
          '&:hover': {
            bgcolor: 'rgb(66, 133, 244)',
          },
          gap: 0.5
        }}
      >
        Create
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          minWidth: 200,
        }}
      >
        <MenuItem onClick={handleClose}>Event</MenuItem>
        <MenuItem onClick={handleClose}>Task</MenuItem>
        <MenuItem onClick={handleClose}>Reminder</MenuItem>
      </Menu>
    </CssVarsProvider>
  );
};

export default CreateEventButton;