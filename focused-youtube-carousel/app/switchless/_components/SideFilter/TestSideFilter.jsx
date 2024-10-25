import React from 'react';
import SideFilter from "./SideFilter";
import { Grid, FormControl, Input, FormLabel, Select, Option } from "@mui/joy";

// Dummy data
const searchParams = {
  vendor_name: 'Acme Corp',
  code: '12345',
  value: '10000',
  approver_1: '1'
};

const members = [
  { user: { id: '1', name: 'John Doe' } },
  { user: { id: '2', name: 'Jane Smith' } }
];


export default function TestSideFilter() {
  return (
    <SideFilter>
      <Grid xs={12}>
        <FormControl>
          <FormLabel>Budget Name</FormLabel>
          <Input name="budget_name" placeholder="Budget Name" defaultValue={searchParams.vendor_name || ''} size='sm' sx={{ backgroundColor: "white"}} />
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <FormControl>
          <FormLabel>Code</FormLabel>
          <Input name="code" placeholder="Budget Code" defaultValue={searchParams.code || ''} size='sm' sx={{ backgroundColor: "white"}} />
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <FormControl>
          <FormLabel>Budget Amount</FormLabel>
          <Input name="value" type="number" placeholder="Budget Amount - e.g., 10000" defaultValue={searchParams.value || ''} size='sm' />
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <FormControl>
          <FormLabel>Approver Level 1</FormLabel>
          <Select name="approver_1" defaultValue={parseInt(searchParams.approver_1) || ''} size='sm' placeholder='Select Approver 1' sx={{ backgroundColor: "white"}}>
            {members.map((member) => (
              <Option key={member.user.id} value={member.user.id}>{member.user.name}</Option>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <FormControl>
          <FormLabel>Approver Level 2</FormLabel>
          {/* Add additional form controls as needed */}
        </FormControl>
      </Grid>
    </SideFilter>
  );
}
