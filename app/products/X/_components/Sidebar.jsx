"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, List, Select, Option, Typography, ListDivider, Sheet , ListItemContent, ListItemButton, ListItem } from "@mui/joy";
import { listItemButtonClasses } from "@mui/joy/ListItemButton";
// import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
// import PersonIcon from '@mui/icons-material/Person';
// import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
// import CreateOrgModal from "@/components/CreateOrgModal";


export default function Sidebar({ params, orgs }) {
  const url = usePathname();
//   const { o_id } = params
  const checkCurrentTab = (tabName) => url.split('/').includes(tabName);


  const today = new Date();
  
//   // Get first day of previous month
//   const firstDayPrevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  
//   // Get last day of next year
//   const lastDayNextYear = new Date(today.getFullYear() + 1, 11, 31);
  
//   // Format dates as YYYY-MM-DD
//   const dateFrom = firstDayPrevMonth.toISOString().split('T')[0];
//   const dateTo = lastDayNextYear.toISOString().split('T')[0];

  return (
    <Sheet className="Sidebar"
      sx={{ position: "sticky", height: "100dvh", width: "15dvw", top: 0, flexShrink: 0, display: "flex", flexDirection: "column", borderRight: "1px solid", borderColor: "divider"}}>
      <Typography sx={{ marginX: 1, marginY: 0.5 }} level="h4">X-API</Typography>
      {/* <Select size="sm" placeholder="Loading..." sx={{ marginX: 1, marginY: 0.5 }} defaultValue={o_id}>
        {orgs.map((org) => ( <Option component={Link} href={`/orgs/${org.id}`} key={org.id} value={org.id}> {org.name}</Option>))}
        <CreateOrgModal />
      </Select> */}

      <Box sx={{ minHeight: 0, overflow: "hidden auto",flexGrow: 1, display: "flex", flexDirection: "column", [`& .${listItemButtonClasses.root}`]: { gap: 2 } }}>
        <List size="sm" sx={{ gap: 0.5, paddingX: 1, "--ListItem-radius": "5px"}}>
          <ListDivider />
          <ListItem><ListItemButton component={Link} href={`/products/X/tweet`} selected={checkCurrentTab('tweet')}><PaidTwoToneIcon /><ListItemContent><Typography level="title-sm">Tweet</Typography></ListItemContent></ListItemButton></ListItem>
          <ListItem><ListItemButton component={Link} href={`/products/X/schedule`} selected={checkCurrentTab('schedule')}><PaidTwoToneIcon /><ListItemContent><Typography level="title-sm">Schedule</Typography></ListItemContent></ListItemButton></ListItem>
          {/* <ListItem><ListItemButton component={Link} href={`/orgs/${o_id}/loans`} selected={checkCurrentTab('loans')}><AccountBalanceTwoToneIcon /><ListItemContent><Typography level="title-sm">Loans</Typography></ListItemContent></ListItemButton></ListItem>
          <ListItem><ListItemButton component={Link} href={`/orgs/${o_id}/lenders`} selected={checkCurrentTab('lenders')}><PersonIcon /><ListItemContent><Typography level="title-sm">Lenders</Typography></ListItemContent></ListItemButton></ListItem> */}
          {/* <ListItem><ListItemButton component={Link} href={`/orgs/${o_id}/reports?date_from=${dateFrom}&date_to=${dateTo}`} selected={checkCurrentTab('reports')}><AssessmentTwoToneIcon /><ListItemContent><Typography level="title-sm">Reports</Typography></ListItemContent></ListItemButton></ListItem> */}
        </List>
      </Box>
    </Sheet>
  );
}