"use client"

import { useState, useCallback, useEffect } from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import { useSearchParams, useRouter } from 'next/navigation';

export default function StateFullTabs2({ tabData, tabPanels, tabGroupId }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const getTabValue = useCallback((tab) => 
    tab.label.toLowerCase().replace(/\s+/g, '-'), []);

  useEffect(() => {
    const tabParam = searchParams.get(tabGroupId);
    const tabIndex = tabData.findIndex(tab => 
      getTabValue(tab) === tabParam
    );
    setActiveTab(tabIndex !== -1 ? tabIndex : 0);
  }, [searchParams, tabData, getTabValue, tabGroupId]);

  const handleChange = useCallback((event, newValue) => {
    setActiveTab(newValue);
    const newParams = new URLSearchParams(searchParams);
    newParams.set(tabGroupId, getTabValue(tabData[newValue]));
    router.push(`?${newParams.toString()}`, { scroll: false });
  }, [router, searchParams, tabData, getTabValue, tabGroupId]);

  return (
    <Tabs value={activeTab} onChange={handleChange}>
      <TabList>
        {tabData.map((tab, index) => (
          <Tab key={index}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              color: 'black',
            }}>
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
      {Object.values(tabPanels).map((Panel, index) => (
        <TabPanel key={index} value={index}>
          <Panel />
        </TabPanel>
      ))}
    </Tabs>
  );
}
