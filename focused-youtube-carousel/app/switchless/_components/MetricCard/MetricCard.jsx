import React from 'react';
import { Typography, Card, CardContent, Chip } from '@mui/joy';

import SouthEastIcon from '@mui/icons-material/SouthEast';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const MetricCard = ({ title, value, previousValue, width}) => {
  const change = previousValue !== 0
    ? ((value - previousValue) / Math.abs(previousValue)) * 100
    : 0;
  
  const isPositive = change >= 0;
  const chipColor = isPositive ? 'success' : 'danger';
  const TextColor = isPositive ? '#6ae900' : '#f44336';
  const ArrowIcon = isPositive ? NorthEastIcon : SouthEastIcon;

  return (
    <Card variant="outlined" sx={{ width: width, p: 1.5 }}>
      <CardContent sx={{alignItems: 'center'}}>
      <Typography level="body-sm" > {title} </Typography>
      <Typography level="h2" fontWeight="bold">{value} </Typography>
      <Typography level="body-xs" >from {previousValue}</Typography>
        <Chip variant="soft" color={chipColor}
         endDecorator={<ArrowIcon sx={{fontSize: 14, color: TextColor}} />} >
          <Typography level="body-xs" sx={{color: TextColor}} ml={0.5}>
            {change >= 0 ? '+' : '-'}{Math.abs(change)}%
          </Typography>
        </Chip>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
