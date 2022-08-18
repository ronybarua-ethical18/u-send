import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import React from "react";
import AppLayout from "../../../../layout/DashboardLayout";
import Overview from "./components/Overview";
import Statistics from "./components/Statistics";
// import AppLayout from "../../../../layout/DashboardLayout";
import Welcome from "./components/Welcome";

export default function Dashboard() {
  return (
    <AppLayout>
      <Box sx={{ padding: "20px" }}>
        <Box>
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontWeight: "700", color: "#212B36" }}
          >
            Homepage
          </Typography>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ color: "#212B36", fontSize: "14px" }}
          >
            <Link underline="none" color="text.primary" aria-current="page">
              Dashboard
            </Link>
          </Breadcrumbs>
        </Box>
        <Welcome />
        <Overview />
        <Statistics />
      </Box>
    </AppLayout>
  );
}
