'use client'

import React from 'react';
import PageHeaderV2 from './PageHeaderV2';
import { Button } from '@mui/joy';
import Link from 'next/link';

export default function TestPageHeaderV2() {
  const breadcrumbs = [
    { text: 'Home', href: '/' },
    { text: 'Components', href: '/components' },
    { text: 'PageHeaderV2' },
  ];

  const RightButtons = () => (
    <>
      <Button variant="outlined" color="primary" sx={{ mr: 1 }}>
        Cancel
      </Button>
      <Button variant="solid" color="primary">
        Save
      </Button>
    </>
  );

  return (
    <div>
      <h1>Test PageHeaderV2</h1>
      
      <h2>Basic Header</h2>
      <PageHeaderV2 header="Basic Header" />

      <h2>Header with Breadcrumbs</h2>
      <PageHeaderV2 
        header="Header with Breadcrumbs" 
        breadcrumbs={breadcrumbs} 
      />

      <PageHeaderV2 
        header="Header with Right Buttons" 
        RightButtons={RightButtons} 
      />

      <h2>Header with Object</h2>
      <PageHeaderV2 
        header={{ part1: 'Header', part2: 'Object' }} 
      />

      <h2>Full Example</h2>
      <PageHeaderV2 
        header="Full Example" 
        breadcrumbs={breadcrumbs}
        RightButtons={RightButtons}
        headerLevel="h2"
      />
    </div>
  );
}
