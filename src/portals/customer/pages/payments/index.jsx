import { Button, Grid } from "@mui/material";
import React from "react";
import AppLayout from "../../../../layout/DashboardLayout";
import chart from "../../assets/chart.png";
import styles from "../../styles/customerStyles.module.css";
import PaymentDataTable from "./components/PaymentDataTable";

export default function Payments() {
  return (
    <AppLayout>
      <div className={styles.payments}>
        <div className={styles.payments_topbar}>
          <h4>Payments</h4>
          <h6>Manage your payment methods & transactions</h6>
        </div>
        {/* Payment transaction part  */}
        <Grid container spacing={4}>
          <Grid item xs={5}>
            <div className={styles.transaction}>
              <div className={styles.transaction_left}>
                <h5 className={styles.transaction_title}>Total Transaction</h5>
                <h2 className={styles.transaction_amount}>
                  $8,926.<span className={styles.fraction}>56</span>
                </h2>
                <strong className={styles.comparison}>
                  +11% than last week
                </strong>
              </div>
              <div className={styles.transaction_right}>
                <div>
                  <div className="flex">
                    <div className={styles.blue_background}></div>
                    <div>
                      <h6 className={styles.blue}>Pending</h6>
                      <h5 className={styles.total_amount}>$1254.36</h5>
                    </div>
                  </div>
                  <div className="flex">
                    <div className={styles.violett_background}></div>
                    <div>
                      <h6 className={styles.violett}>In Drafts</h6>
                      <h5 className={styles.total_amount}>$0.00</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flexbox">
              <Button
                variant="contained"
                sx={{
                  margin: "2em 0",
                  height: "40px",
                  padding: "1em 1.5em",
                  fontWeight: "600",
                  fontSize: "15px",
                  boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
                  "&:hover": {
                    boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
                  },
                }}
              >
                Add Balance
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "2em 0",
                  background: "#8D40FF",
                  height: "40px",
                  padding: "1em 1.5em",
                  fontWeight: "600",
                  fontSize: "15px",
                  boxShadow: "0px 8px 16px rgba(141, 64, 255, 0.24)",
                  "&:hover": {
                    background: "0px 8px 16px rgba(141, 64, 255, 0.24)",
                  },
                }}
              >
                Add New Card
              </Button>
            </div>
          </Grid>

          <Grid item xs={7}>
            <img src={chart} alt="chart" />
          </Grid>
        </Grid>

        {/* Payment history line  */}
        <div className="flexbox">
          <h4 className={styles.payment_title}>Payment History</h4>
          <Button
            variant="outlined"
            sx={{
              background: "#FFFFFF",
              border: "1px solid #C2C2C2",
              borderRadius: "5px",
              color:"#828282"
            }}
          >
            Export
          </Button>
        </div>

        {/* Payment data table  */}
        <PaymentDataTable />
      </div>
    </AppLayout>
  );
}
