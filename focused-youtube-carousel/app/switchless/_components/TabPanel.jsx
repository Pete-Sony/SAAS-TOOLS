import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Box from '@mui/joy/Box';

const TabPanelMap = {
  TabPanel1: () => {
    return (
     <Box sx={{ width: '200px',height:"300px",bgcolor:"red"}}>
        First
     </Box>
    );
  },
  TabPanel2: () => { 
    return (
      <b>Second</b> 
    ); 
  } 
};

export default function TabNavigation() {
  return (
    <Box sx={{
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitScrollbar: { display: 'none' },
        }}>
    <Tabs tabFlex="auto"
     sx={{
          backgroundColor: 'white', 
          whiteSpace: 'nowrap',
          overflowX: 'hidden',
          '& .MuiTab-root': {
            bgcolor: 'transparent' ,
             '&.Mui-selected': {
              bgcolor: 'transparent',
              minWidth: 'auto',
          }},
        
          scrollSnapAlign: 'start'
     }}
         defaultValue={0}
            >
      <TabList>
        <Tab>First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Long tab</Tab>
        <Tab>Even Longer tab</Tab>
      </TabList>
      {Object.keys(TabPanelMap).map((key, index) => (
        <TabPanel key={index} value={index}>
          {TabPanelMap[key]()}
        </TabPanel>
      ))}
    </Tabs>
    </Box>
  );
}
