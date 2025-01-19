'use client'
import React from 'react';

import { useState } from 'react';
import { calculateAge } from './actions.js';

export default function ComponentName() {
    const [dob, setDob] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await calculateAge(dob); // Call the server action
        setResult(data.message);
      };
  return (
    <>
 <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Age Calculator</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
          style={{
            padding: '0.5rem',
            margin: '0.5rem',
            fontSize: '1rem',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Calculate
        </button>
      </form>
      {result && <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>{result}</p>}
    </div>  
      </>
  );
}