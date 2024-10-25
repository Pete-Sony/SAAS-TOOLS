import React, { useEffect, useState } from 'react';

const PageReloadCounter = () => {
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    // Retrieve the reload count from localStorage
    const count = parseInt(localStorage.getItem('reloadCount')) || 0;
    // Increment the count
    const newCount = count + 1;
    // Store the new count in localStorage
    localStorage.setItem('reloadCount', newCount);
    // Update the state
    setReloadCount(newCount);
  }, []);

  return (
    <div>
      <p>Page has been reloaded {reloadCount} times.</p>
    </div>
  );
};

export default PageReloadCounter;