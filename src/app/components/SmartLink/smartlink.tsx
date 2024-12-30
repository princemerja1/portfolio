'use client';
import { useState, useEffect } from 'react';

// Detect if the user is in an in-app browser
const isInAppBrowser = () => {
  const userAgent = navigator.userAgent || navigator.vendor;
  return /Instagram|FBAV|Twitter/.test(userAgent);  // Checking for Instagram, Facebook, and Twitter in-app browsers
};

const SmartLink = ({ url }: { url: string }) => {
  const [isInApp, setIsInApp] = useState(false);

  useEffect(() => {
    // Set the state based on whether the user is in an in-app browser
    setIsInApp(isInAppBrowser());
  }, []);

  const openInBrowser = () => {
    // Attempt to open the link in a new tab or browser
    const newWindow = window.open(url, '_system');
    
    // Check if the pop-up was blocked or failed, then fallback to opening the link in the same tab
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Attempt to open the URL in the same tab
      window.location.href = url;
    }
  };

  return (
    <div>
      {isInApp ? (
        <div style={{ padding: '10px', background: 'rgba(0, 0, 0, 0.8)', color: 'white', textAlign: 'center' }}>
          <p>You are viewing this in an in-app browser. For the best experience, click the button below to open this link in your browser:</p>
          <button onClick={openInBrowser} style={{ color: 'yellow', textDecoration: 'underline' }}>
            Open in Browser
          </button>
        </div>
      ) : (
        <a href={url} target="_system" rel="noopener noreferrer">
          Open Link
        </a>
      )}
    </div>
  );
};

export default SmartLink;
