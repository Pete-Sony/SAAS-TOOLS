'use client'

import React from 'react';
import Pagination from './Pagination';
import { useSearchParams } from 'next/navigation';

export default function TestPagination() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pagination Test Page</h1>
      <p>Current Page: {currentPage}</p>
      <Pagination pageCount={10} />
      <div style={{ marginTop: '20px' }}>
        <h2>How it works:</h2>
        <ol>
          <li>The Pagination component is initialized with 10 pages.</li>
          <li>When you click on a page number, the URL updates with the new page parameter.</li>
          <li>The current page is displayed above the pagination component.</li>
          <li>Refresh the page to see that the selected page persists.</li>
        </ol>
      </div>
    </div>
  );
}

