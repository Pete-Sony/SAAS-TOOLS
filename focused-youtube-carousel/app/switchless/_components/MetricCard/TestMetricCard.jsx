import MetricCard from './MetricCard';
import { Box } from '@mui/material';

// In your component's render method:


import React from 'react'

function TestMetricCard() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
  <MetricCard
    title="Cash Balance"
    value={-1000}
    previousValue={-2000}
    width="150px"
  />
  <MetricCard
    title="Op Cash Flow"
    value="-$108.5K"
    previousValue="-$135.47K"
    change={9}
  />
</Box>
  )
}

export default TestMetricCard
