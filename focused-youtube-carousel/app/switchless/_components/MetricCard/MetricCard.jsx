import React from 'react';
import { Box, Typography, Card } from '@mui/joy';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const MetricCard = ({ title, value, previousValue, change }) => {
  const isPositive = change >= 0;
  const changeColor = isPositive ? 'success.500' : 'danger.500';
  const ArrowIcon = isPositive ? ArrowUpwardIcon : ArrowDownwardIcon;

  return (
    <Card variant="outlined" sx={{ width: '200px', p: 2 }}>
      <Typography level="body-sm" mb={1}>
        {title}
      </Typography>
      <Typography level="h4" fontWeight="bold">
        {value}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        <Typography level="body-xs" color="neutral.500">
          from {previousValue}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
          <ArrowIcon sx={{ fontSize: 16, color: changeColor }} />
          <Typography level="body-xs" color={changeColor} ml={0.5}>
            {Math.abs(change)}%
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default MetricCard;