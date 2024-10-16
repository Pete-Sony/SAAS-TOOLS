import MetricCard from './MetricCard';
import { Box } from '@mui/material';

// In your component's render method:


import React from 'react'

function TestMetricCard() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
  <MetricCard
    title="Cash Balance"
    value="-$1.99M"
    previousValue="-$1.88M"
    change={-6}
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
