'use client'

import React from 'react';

const formatIndianStyle = (number) => {
  if (number >= 10000000) {
    return (number / 10000000).toFixed(2).replace(/\.?0+$/, '') + ' crore' + (number >= 20000000 ? 's' : '');
  } else if (number >= 100000) {
    return (number / 100000).toFixed(2).replace(/\.?0+$/, '') + ' lakh' + (number >= 200000 ? 's' : '');
  } else if (number >= 1000) {
    return (number / 1000).toFixed(2).replace(/\.?0+$/, '') + ' k';
  }
  return number.toString();
};

const formatUSStyle = (number) => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(2).replace(/\.?0+$/, '') + ' billion';
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(2).replace(/\.?0+$/, '') + ' million';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(2).replace(/\.?0+$/, '') + ' k';
  }
  return number.toString();
};

export default function FormattedNumber({ number, style = 'indian' }) {
  const formattedNumber = style === 'indian' ? formatIndianStyle(number) : formatUSStyle(number);
  
  return <span>{formattedNumber}</span>;
}