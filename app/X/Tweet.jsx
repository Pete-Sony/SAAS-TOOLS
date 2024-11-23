'use client'; // This is required for interactivity

import React from 'react';
// import { postTweet } from './action';

export default function Tweet() {
  const handleSubmit = async () => {
    // const result = await postTweet("hello Sir");
    // console.log(result);
  };

  return (
    <button 
    onClick={handleSubmit}
    >Post Tweet</button>
  );
}

