"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, List, Typography, ListDivider, Sheet , ListItemContent, ListItemButton, ListItem, listItemButtonClasses } from "@mui/joy";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import CreateAppointModal from "./CreateAppointModal";

export default function Sidebar() {
  const url = usePathname();
  const checkCurrentTab = (tabName) => url.split('/').includes(tabName);  

  return (
    <Sheet 
      sx={{ position: "sticky", height: "100dvh", width: "15dvw", top: 0, flexShrink: 0, display: "flex", flexDirection: "column", borderRight: "1px solid", borderColor: "divider" }}>
      <Typography sx={{ marginX: 1, marginY: 0.5, textAlign:'center' }} level="h4">Schedule</Typography>
      <Box sx={{ minHeight: 0, overflow: "hidden auto",flexGrow: 1, display: "flex", flexDirection: "column", [`& .${listItemButtonClasses.root}`]: { gap: 2 } }}>
        <List size="sm" sx={{ gap: 0.5, paddingX: 1, "--ListItem-radius": "5px"}}>
          <CreateAppointModal/>
          <ListDivider />
          <ListItem><ListItemButton component={Link} href={`/products/clinic`} selected={checkCurrentTab('appointments')}><EditCalendarIcon /><ListItemContent><Typography level="title-sm">Appointments</Typography></ListItemContent></ListItemButton></ListItem>
        </List>
      </Box>
    </Sheet>
  );
}