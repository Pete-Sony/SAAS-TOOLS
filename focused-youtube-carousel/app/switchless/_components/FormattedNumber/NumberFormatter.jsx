import React from 'react';
//Variations in number frormatter
const formatNumber = (value, style = 'US', precision = 2, hideInsignificant = false) => {
  const absValue = Math.abs(value);
  let formattedValue = value;

  // Apply precision
  formattedValue = Number(formattedValue.toFixed(precision));

  // Apply comma separation based on style
  if (style === 'US' || style === 'IN') {
    formattedValue = formattedValue.toLocaleString('en-US');
  } else if (style === 'EU') {
    formattedValue = formattedValue.toLocaleString('de-DE');
  }

  // Hide insignificant digits if required
  if (hideInsignificant) {
    if (style === 'IN') {
      if (absValue >= 1e7) return `${(value / 1e7).toFixed(2)} Cr`;
      if (absValue >= 1e5) return `${(value / 1e5).toFixed(2)} L`;
      if (absValue >= 1e3) return `${(value / 1e3).toFixed(2)} K`;
    } else { // US style
      if (absValue >= 1e9) return `${(value / 1e9).toFixed(2)} B`;
      if (absValue >= 1e6) return `${(value / 1e6).toFixed(2)} M`;
      if (absValue >= 1e3) return `${(value / 1e3).toFixed(2)} K`;
    }
  }

  return formattedValue.toString();
};

const NumberFormatter = ({ value, style, precision, hideInsignificant }) => {
  const formattedValue = formatNumber(value, style, precision, hideInsignificant);
  return <span>{formattedValue}</span>;
};

export default NumberFormatter;


const currencyFormatter1 = (value, currency = 'USD', locale = 'en-US') => {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      notation: 'compact',
      maximumSignificantDigits: 4,
      compactDisplay: 'short',
    });
  
    let formatted = formatter.format(value);
  
    // Remove trailing '.00' or '.0' if present
    formatted = formatted.replace(/\.00$/, '').replace(/\.0$/, '');
  
    // Special handling for INR (Indian Rupees)
    if (currency === 'INR' && value >= 100000) {
      const lakhs = value / 100000;
      formatted = formatter.format(lakhs).replace(/million|M/i, 'L');
    }
  
    return formatted;
  };
  
  const currencyFormatter2 = (value, currency = 'USD', locale = 'en-US') => {
    if (currency === 'INR') {
      let symbol = '₹';
      if (value >= 1e7) {
        return `${symbol} ${(value / 1e7).toFixed(2)} Cr`;
      } else if (value >= 1e5) {
        return `${symbol} ${(value / 1e5).toFixed(2)} L`;
      }
    } else if (currency === 'USD') {
      let symbol = '$';
      if (value >= 1e6) {
        return `${symbol} ${(value / 1e6).toFixed(2)} M`;
      } else if (value >= 1e3) {
        return `${symbol} ${(value / 1e3).toFixed(2)} K`;
      }
    }
  
    // Fallback to basic number formatting if no special case applies
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 2,
    }).format(value);
  };
  