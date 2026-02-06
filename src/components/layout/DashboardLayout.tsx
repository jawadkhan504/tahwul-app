"use client";

import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar />
      <Box flex={1} bgcolor="#f5f7fa">
        <Header />
        <Box p={{ xs: 2, md: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
}
