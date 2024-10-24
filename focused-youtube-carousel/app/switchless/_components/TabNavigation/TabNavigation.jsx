'use client'
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function TabNavigation({ tabData, tabPanels, vertical = false }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(0);

  const getTabValue = useCallback((label) => 
    label.toLowerCase().replace(/\s+/g, '-'), []);

  const updateUrl = useCallback((newTab) => {
    const newTabValue = getTabValue(tabData[newTab].label);
    const pathParts = pathname.split('/');
    const tabValues = tabData.map(tab => getTabValue(tab.label));
    // Find the index of any existing tab value in the path
    const existingTabIndex = pathParts.findIndex(part => tabValues.includes(part));
    
    if (existingTabIndex !== -1) {
      // Replace the existing tab value
      pathParts[existingTabIndex] = newTabValue;
    } else {
      // If no existing tab value, add the new one to the end
      pathParts.push(newTabValue);
    }
    const newPath = pathParts.join('/').replace(/\/+/g, '/');
    window.history.pushState(null, '', newPath);
  }, [pathname, tabData, getTabValue]);

  useEffect(() => {
    const tabIndex = tabData.findIndex(tab => 
      pathname.includes(getTabValue(tab.label))
    );
    
    if (tabIndex !== -1) {
      setActiveTab(tabIndex);
    } else {
      updateUrl(0);
      setActiveTab(0);
    }
  }, [pathname, tabData, getTabValue, updateUrl]);

  const onTabChange = useCallback((event, newValue) => {
    setActiveTab(newValue);
    updateUrl(newValue);
  }, [updateUrl]);

  const tabStyles = {
    backgroundColor: 'white',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    scrollSnapAlign: 'start',
    '& .MuiTab-root': {
      backgroundColor: 'transparent',
      '&.Mui-selected': {
        backgroundColor: 'transparent',
        minWidth: 'auto',
      }
    },
    ...(vertical ? {
      flexDirection: 'column',
      height: '100%',
    } : {
      overflowX: 'hidden',
    })
  };

  const boxStyles = {
    ...(vertical ? {
      display: 'flex',
      height: '100%',
    } : {
      overflowX: 'auto',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      '&::-webkit-scrollbar': { display: 'none' },
    })
  };

  return (
    <Box sx={boxStyles}>
      <Tabs
        orientation={vertical ? 'vertical' : 'horizontal'}
        defaultValue={0}
        value={activeTab}
        onChange={onTabChange}
        sx={tabStyles}
      >
        <TabList sx={vertical ? { flexGrow: 1 } : {}}>
          {tabData.map((tab, index) => (
            <Tab key={index}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 0.5, color: 'black'}}>
                {tab.label}
                {tab.count !== undefined && tab.count > 0 && (
                  <Chip size="sm" variant="outlined" color="neutral">
                    {tab.count}
                  </Chip>
                )}
              </Box>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
}
