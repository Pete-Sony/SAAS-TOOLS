'use client'
import React from 'react';
import TabNavigation from './TabNavigation';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

// Sample tab panel components
const HomePanel = () => <Typography level="h2">Home Content</Typography>;
const ProfilePanel = () => <Typography level="h2">Profile Content</Typography>;
const SettingsPanel = () => <Typography level="h2">Settings Content</Typography>;
const NotificationsPanel = () => <Typography level="h2">Notifications Content</Typography>;

export default function TestPage() {
  const tabData = [
    { label: 'Home', count: 0 },
    { label: 'Profile', count: 3 },
    { label: 'Settings', count: 0 },
    { label: 'Notifications', count: 10 },
  ];

  const tabPanels = {
    home: HomePanel,
    profile: ProfilePanel,
    settings: SettingsPanel,
    notifications: NotificationsPanel,
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      <Typography level="h1" sx={{ mb: 2 }}>Tab Navigation Test Page</Typography>
      <TabNavigation tabData={tabData} tabPanels={tabPanels} />
    </Box>
  );
}
