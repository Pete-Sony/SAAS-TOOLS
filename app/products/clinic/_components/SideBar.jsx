"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, List, Select, Option, Typography, ListDivider, Sheet , ListItemContent, ListItemButton, ListItem } from "@mui/joy";
import { listItemButtonClasses } from "@mui/joy/ListItemButton";
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CreateAppointModal from "./CreateAppointModal";

export default function Sidebar({ params, orgs }) {
  const url = usePathname();
  const checkCurrentTab = (tabName) => url.split('/').includes(tabName);  

  return (
    <Sheet 
      sx={{ position: "sticky", height: "100dvh", width: "15dvw", top: 0, flexShrink: 0, display: "flex", flexDirection: "column", borderRight: "1px solid", borderColor: "divider"}}>
      <Typography sx={{ marginX: 1, marginY: 0.5 }} level="h4">Clinic</Typography>
      <Box sx={{ minHeight: 0, overflow: "hidden auto",flexGrow: 1, display: "flex", flexDirection: "column", [`& .${listItemButtonClasses.root}`]: { gap: 2 } }}>
        <List size="sm" sx={{ gap: 0.5, paddingX: 1, "--ListItem-radius": "5px"}}>
          <ListDivider />
          <CreateAppointModal/>
          {/* <ListItem><ListItemButton component={Link} href={`/products/X/tweet`} selected={checkCurrentTab('tweet')}><PaidTwoToneIcon /><ListItemContent><Typography level="title-sm">Tweet</Typography></ListItemContent></ListItemButton></ListItem> */}
          <ListItem><ListItemButton component={Link} href={`/products/clinic`} selected={checkCurrentTab('schedule')}><HistoryToggleOffIcon /><ListItemContent><Typography level="title-sm">Appointments</Typography></ListItemContent></ListItemButton></ListItem>
        </List>
      </Box>
    </Sheet>
  );
}