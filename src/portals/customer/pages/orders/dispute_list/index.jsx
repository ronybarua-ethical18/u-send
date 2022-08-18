import { Button } from "@mui/material";
import React from "react";
import AppLayout from "../../../../../layout/DashboardLayout";
import styles from "../../../styles/customerStyles.module.css";
import DisputeTabs from "./components/DisputeTabs";

export default function DisputeList() {
  return (
    <AppLayout>
      <div className={styles.dispute_list}>
        <div className={styles.dispute_topbar}>
          <div>
            <h4>Dispute List</h4>
            <h6>View & manage your Dispute Orders here</h6>
          </div>
          <div>
            <Button variant="contained">New Sourcing Request</Button>
          </div>
        </div>

        {/* tab section */}
        <DisputeTabs />
      </div>
    </AppLayout>
  );
}
