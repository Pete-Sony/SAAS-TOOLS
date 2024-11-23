import crypto from 'crypto';
import OAuth from 'oauth-1.0a';
import qs from 'querystring';


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  


  const data = {
    "text": "Hello Tweet!"
  };

  const endpointURL = `https://api.twitter.com/2/tweets`;