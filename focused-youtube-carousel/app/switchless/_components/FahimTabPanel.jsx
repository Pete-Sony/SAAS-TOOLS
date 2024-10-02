"use client";

import React from "react";
import { Tabs, TabList, Tab, Box } from "@mui/joy";
import Link from "@mui/joy/Link";
import { usePathname } from "next/navigation";



const tabs = [
  { label: "Overview", value: "overview" },
  { label: "PO Requests", value: "po_requests" },
  { label: "Budgets", value: "budgets" },
  { label: "Vendors", value: "vendors" },
  { label: "Approvals", value: "approvals" },
  { label: "Payment Schedules", value: "payment_schedules" },
  { label: "Admin", value: "admin" },
];

export default function TabNavigation({ o_id }) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");

  const getCurrentTab = () => {
    if (pathSegments.includes("budget")) return "budgets";
    if (pathSegments.includes("po_request")) return "po_requests";
    if (pathSegments.includes("vendor")) return "vendors";
    if (pathSegments.includes("approvals")) return "approvals";
    if (pathSegments[pathSegments.length - 1] === "por") return "overview";
    return pathSegments[pathSegments.length - 1];
  };

  const currentTab = getCurrentTab();

  return (
    <Box sx={{ overflowX: "auto" }}>
      <Tabs
        value={currentTab}
        sx={{
          backgroundColor: "white",
          "& .MuiTab-root": {
            bgcolor: "transparent",
            "&.Mui-selected": {
              bgcolor: "transparent",
            },
          },
        }}
      >
        <TabList
          sx={{
            flexWrap: "nowrap",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "&": {
              scrollbarWidth: "none",
              "-ms-overflow-style": "none",
            },
          }}
        >
          {tabs.map((tab) => (
            <Tab
              indicatorPlacement="bottom"
              key={tab.value}
              value={tab.value}
              component={Link}
              href={
                tab.value === "overview"
                  ? `/org/${o_id}/por`
                  : tab.value === "approvals"
                    ? `/org/${o_id}/por/approvals/pending`
                    : `/org/${o_id}/por/${tab.value}`
              }
              sx={{
                color: "black",
                "&:hover": {
                  textDecoration: "none",
                },
                flex: "none",
              }}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
}
