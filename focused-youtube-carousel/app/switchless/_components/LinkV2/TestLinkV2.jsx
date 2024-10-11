import React from 'react';
import LinkV2 from './LinkV2';
import { Button } from '@mui/joy';

export default function TestLinkV2() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Link clicked!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>LinkV2 Component Test Page</h1>

      <h2>1. Basic Link</h2>
      <LinkV2 href="/home">Go to Home</LinkV2>

      <h2>2. Link with Custom Styles</h2>
      <LinkV2 href="/about" sx={{ color: 'blue', fontWeight: 'bold' }}>
        About Us
      </LinkV2>

      <h2>3. External Link (opens in new tab)</h2>
      <LinkV2 href="https://example.com" target="_blank">
        Visit Example.com
      </LinkV2>

      <h2>4. Link with onClick Handler</h2>
      <LinkV2 href="/contact" onClick={handleClick}>
        Contact Us (with click handler)
      </LinkV2>

      <h2>5. Link with Custom Component (Button)</h2>
      <LinkV2 href="/dashboard" Component={Button}>
        Go to Dashboard
      </LinkV2>
    </div>
  );
}
