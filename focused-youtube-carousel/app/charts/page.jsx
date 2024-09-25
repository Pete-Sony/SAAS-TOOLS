'use client'
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Checkbox, Slider, Typography, Box, Grid } from '@mui/joy';

// Ensure you have installed @mui/joy and recharts

const data = [
  { month: 'Jan 2020', MRR: 582, NewMRR: 20, ExpandedMRR: 0, ChurnedMRR: 0, ContractedMRR: 0 },
  { month: 'Feb 2020', MRR: 582, NewMRR: 50, ExpandedMRR: 50, ChurnedMRR: 0, ContractedMRR: 0 },
  { month: 'Mar 2020', MRR: 582, NewMRR: 300, ExpandedMRR: 0, ChurnedMRR: 0, ContractedMRR: 0 },
  { month: 'Apr 2020', MRR: 1000, NewMRR: 500, ExpandedMRR: 0, ChurnedMRR: -82, ContractedMRR: 0 },
  { month: 'May 2020', MRR: 2000, NewMRR: 1000, ExpandedMRR: 500, ChurnedMRR: -400, ContractedMRR: -100 },
  { month: 'Jun 2020', MRR: 3000, NewMRR: 1500, ExpandedMRR: 750, ChurnedMRR: -600, ContractedMRR: -150 },
  { month: 'Jul 2020', MRR: 4000, NewMRR: 2000, ExpandedMRR: 1000, ChurnedMRR: -800, ContractedMRR: -200 },
  { month: 'Aug 2020', MRR: 5000, NewMRR: 2500, ExpandedMRR: 1250, ChurnedMRR: -1000, ContractedMRR: -250 },
  { month: 'Sep 2020', MRR: 5000, NewMRR: 2500, ExpandedMRR: 1250, ChurnedMRR: -1000, ContractedMRR: -250 },
  { month: 'Oct 2020', MRR: 5000, NewMRR: 2500, ExpandedMRR: 1250, ChurnedMRR: -1000, ContractedMRR: -250 },
  { month: 'Nov 2020', MRR: 6000, NewMRR: 3000, ExpandedMRR: 1500, ChurnedMRR: -1200, ContractedMRR: -300 },
  { month: 'Dec 2020', MRR: 6500, NewMRR: 3500, ExpandedMRR: 1750, ChurnedMRR: -1300, ContractedMRR: -350 },
  { month: 'Jan 2021', MRR: 7000, NewMRR: 4000, ExpandedMRR: 2000, ChurnedMRR: -1400, ContractedMRR: -400 },
  { month: 'Feb 2021', MRR: 7500, NewMRR: 4500, ExpandedMRR: 2250, ChurnedMRR: -1500, ContractedMRR: -450 },
  { month: 'Mar 2021', MRR: 8000, NewMRR: 5000, ExpandedMRR: 2500, ChurnedMRR: -1600, ContractedMRR: -500 },
  // Add more data points as needed
];

const dataKeys = ['MRR', 'NewMRR', 'ExpandedMRR', 'ChurnedMRR', 'ContractedMRR'];
const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#ff6b6b'];

const InteractiveMRRChart = () => {
  const [selectedKeys, setSelectedKeys] = useState(dataKeys);
  const [dateRange, setDateRange] = useState([0, data.length - 1]);

  const handleToggle = (key) => {
    setSelectedKeys(prev => 
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const filteredData = useMemo(() => 
    data.slice(dateRange[0], dateRange[1] + 1),
    [dateRange]
  );

  return (
    <Box sx={{ width: '100%', maxWidth: 1200, margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={3}>
          {dataKeys.map((key, index) => (
            <Card key={key} sx={{ mb: 1 }}>
              <CardContent>
                <Checkbox
                  checked={selectedKeys.includes(key)}
                  onChange={() => handleToggle(key)}
                  label={key}
                  sx={{ '& .MuiSvgIcon-root': { color: colors[index] } }}
                />
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid xs={12} md={9}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" domain={['dataMin', 'dataMax']} tick={{ textAnchor: 'middle' }} />
              <YAxis />
              <Tooltip />
              <Legend />
              {selectedKeys.map((key, index) => (
                <Bar key={key} dataKey={key} stackId="a" fill={colors[index]} /> // Ensure stackId is set
              ))}
            </BarChart>
          </ResponsiveContainer>
          <Box sx={{ width: '100%', mt: 2 }}>
            <Typography level="body2" gutterBottom>
              Date Range
            </Typography>
            <Slider
              getAriaLabel={() => 'Date range'}
              value={dateRange}
              onChange={(_, newValue) => setDateRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={data.length - 1}
              valueLabelFormat={(value) => data[value].month}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InteractiveMRRChart;
// Shubrhu Data
// [
//     {
//         "date": "2024-09-07",
//         "value1": 3.85,
//         "value2": 0.43,
//         "value3": 1.09,
//         "value4": 5.37,
//         "value5": 115.50,
//         "value6": 12.93,
//         "value7": 32.55,
//         "value8": 160.98,
//         "value9": 13361.34
//     },
//     {
//         "date": "2024-09-08",
//         "value1": 3.82,
//         "value2": 0.43,
//         "value3": 1.09,
//         "value4": 5.34,
//         "value5": 114.60,
//         "value6": 12.93,
//         "value7": 32.70,
//         "value8": 160.23,
//         "value9": 13299.09
//     },
//     {
//         "date": "2024-09-09",
//         "value1": 3.77,
//         "value2": 0.43,
//         "value3": 1.09,
//         "value4": 5.29,
//         "value5": 113.10,
//         "value6": 12.93,
//         "value7": 32.70,
//         "value8": 158.73,
//         "value9": 13174.59
//     },
//     {
//         "date": "2024-09-10",
//         "value1": 3.79,
//         "value2": 0.54,
//         "value3": 1.09,
//         "value4": 5.42,
//         "value5": 113.70,
//         "value6": 16.16,
//         "value7": 32.70,
//         "value8": 162.56,
//         "value9": 13492.31
//     },
//     {
//         "date": "2024-09-11",
//         "value1": 6.07,
//         "value2": 0.54,
//         "value3": 1.09,
//         "value4": 7.70,
//         "value5": 182.10,
//         "value6": 16.16,
//         "value7": 32.70,
//         "value8": 230.96,
//         "value9": 19169.51
//     },
//     {
//         "date": "2024-09-12",
//         "value1": 4.38,
//         "value2": 0.45,
//         "value3": 1.16,
//         "value4": 5.99,
//         "value5": 131.40,
//         "value6": 13.50,
//         "value7": 34.80,
//         "value8": 179.70,
//         "value9": 14915.10
//     },
//     {
//         "date": "2024-09-13",
//         "value1": 4.38,
//         "value2": 0.45,
//         "value3": 1.16,
//         "value4": 5.99,
//         "value5": 131.40,
//         "value6": 13.50,
//         "value7": 34.80,
//         "value8": 179.70,
//         "value9": 14915.10
//     },
//     {
//         "date": "2024-09-14",
//         "value1": 4.38,
//         "value2": 0.45,
//         "value3": 1.16,
//         "value4": 5.99,
//         "value5": 131.40,
//         "value6": 13.50,
//         "value7": 34.80,
//         "value8": 179.70,
//         "value9": 14915.10
//     },
//     {
//         "date": "2024-09-15",
//         "value1": 4.38,
//         "value2": 0.33,
//         "value3": 1.16,
//         "value4": 5.87,
//         "value5": 131.40,
//         "value6": 9.98,
//         "value7": 34.83,
//         "value8": 176.21,
//         "value9": 14625.26
//     },
//     {
//         "date": "2024-09-16",
//         "value1": 4.39,
//         "value2": 0.46,
//         "value3": 1.16,
//         "value4": 6.01,
//         "value5": 131.70,
//         "value6": 13.80,
//         "value7": 34.83,
//         "value8": 180.33,
//         "value9": 14967.64
//     }
// ]