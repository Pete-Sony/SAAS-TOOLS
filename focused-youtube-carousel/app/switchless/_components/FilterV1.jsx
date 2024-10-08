import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  FormControl, 
  FormLabel, 
  Input, 
  Select, 
  Option,
  Checkbox
} from '@mui/joy';

const BasicFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    inStock: false
  });

  const handleChange = (event, newValue) => {
    // For standard inputs and checkboxes
    if (event.target) {
      const { name, value, checked, type } = event.target;
      setFilters(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    } 
    // For MUI Joy Select
    else if (event !== null) {
      setFilters(prev => ({
        ...prev,
        [event]: newValue
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters({
      search: '',
      category: '',
      inStock: false
    });
    onFilter({});
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <FormControl>
            <FormLabel>Search</FormLabel>
            <Input
              name="search"
              value={filters.search}
              onChange={handleChange}
              placeholder="Search..."
              sx={{ bgcolor: 'background.body' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select
              name="category"
              value={filters.category}
              onChange={(_, value) => handleChange("category", value)}
              placeholder="Select a category"
              sx={{ bgcolor: 'background.body' }}
            >
              <Option value="electronics">Electronics</Option>
              <Option value="clothing">Clothing</Option>
              <Option value="books">Books</Option>
            </Select>
          </FormControl>

          <FormControl>
            <Checkbox
              name="inStock"
              checked={filters.inStock}
              onChange={handleChange}
              label="In Stock Only"
            />
          </FormControl>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
            <Button variant="outlined" color="neutral" onClick={handleReset}>
              Reset
            </Button>
            <Button type="submit" variant="solid">
              Apply
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BasicFilter;