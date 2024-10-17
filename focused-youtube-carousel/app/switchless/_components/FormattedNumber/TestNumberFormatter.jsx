'use client';

import React, { useState } from 'react';
import NumberFormatter from './NumberFormatter';
import { Box, Typography, Select, Option, Input, Checkbox, FormControl, FormLabel } from '@mui/joy';

const TestNumberFormatter = () => {
  const [value, setValue] = useState(1234567.89);
  const [style, setStyle] = useState('US');
  const [precision, setPrecision] = useState(2);
  const [hideInsignificant, setHideInsignificant] = useState(false);

  const handleValueChange = (e) => setValue(parseFloat(e.target.value));
  const handleStyleChange = (e, newValue) => setStyle(newValue);
  const handlePrecisionChange = (e) => setPrecision(parseInt(e.target.value));
  const handleHideInsignificantChange = (e) => setHideInsignificant(e.target.checked);

  const testCases = [
    { value: 1000, style: 'US', precision: 2, hideInsignificant: false },
    { value: 1000000, style: 'US', precision: 2, hideInsignificant: true },
    { value: 1234567.89, style: 'EU', precision: 2, hideInsignificant: false },
    { value: 9876543210, style: 'IN', precision: 2, hideInsignificant: true },
    { value: 1234.56, style: 'US', precision: 3, hideInsignificant: false },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography level="h4" component="h1" gutterBottom>
        Number Formatter Test
      </Typography>

      <Box sx={{ mb: 4 }}>
        <FormControl>
          <FormLabel>Value</FormLabel>
          <Input type="number" value={value} onChange={handleValueChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Style</FormLabel>
          <Select value={style} onChange={handleStyleChange}>
            <Option value="US">US</Option>
            <Option value="EU">EU</Option>
            <Option value="IN">IN</Option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Precision</FormLabel>
          <Input type="number" value={precision} onChange={handlePrecisionChange} min={0} max={20} />
        </FormControl>
        <FormControl>
          <Checkbox
            label="Hide Insignificant"
            checked={hideInsignificant}
            onChange={handleHideInsignificantChange}
          />
        </FormControl>
      </Box>

      <Typography level="h6" gutterBottom>
        Result: <NumberFormatter value={value} style={style} precision={precision} hideInsignificant={hideInsignificant} />
      </Typography>

      <Typography level="h5" sx={{ mt: 4, mb: 2 }}>
        Test Cases
      </Typography>
      <table>
        <thead>
          <tr>
            <th>Value</th>
            <th>Style</th>
            <th>Precision</th>
            <th>Hide Insignificant</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {testCases.map((testCase, index) => (
            <tr key={index}>
              <td>{testCase.value}</td>
              <td>{testCase.style}</td>
              <td>{testCase.precision}</td>
              <td>{testCase.hideInsignificant.toString()}</td>
              <td>
                <NumberFormatter
                  value={testCase.value}
                  style={testCase.style}
                  precision={testCase.precision}
                  hideInsignificant={testCase.hideInsignificant}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default TestNumberFormatter;
