'use client'
import React from 'react';
import TabNavigation from './TabNavigation';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import TabNavigation2 from './TabNavigation2';
// Sample tab panel components
// const HomePanel = () => <Typography level="h2">Home Content</Typography>;
// const ProfilePanel = () => <Typography level="h2">Profile Content</Typography>;
// const SettingsPanel = () => <Typography level="h2">Settings Content</Typography>;
// const NotificationsPanel = () => <Typography level="h2">Notifications Content</Typography>;

export default function TestPage() {
  const tabData = [
    { label: 'apple', count: 0 },
    { label: 'banana', count: 3 },
    { label: 'cherry', count: 0 },
    { label: 'date', count: 10 },
  ];
  const tabHeaders = [
            { header: 'Home Depot', count: 0 },
            { header: 'User Profile', count: 3 },
            { header: 'Settings', count: 0 },
            { header: 'Notifications', count: 10 },
  ];
 

  return (
    <Box sx={{ maxWidth: 200, margin: 'auto', padding: 2 }}>
      <Typography level="h1" sx={{ mb: 2 }}>Tab Navigation Test Page</Typography>
      <TabNavigation tabData={tabData}  />
      <TabNavigation2 tabHeaders={tabHeaders}  vertical />
    </Box>
  );
}
