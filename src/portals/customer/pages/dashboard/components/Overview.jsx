import { Grid } from "@mui/material";
import React from "react";
import { overview_cards } from "../../../../../dummyData";
import styles from "../../../styles/customerStyles.module.css";

export default function Overview() {
  return (
    <div>
      <div className={styles.overview_heading_box}>
        <h4 className={styles.overview_title}>Overview</h4>
        <small>Today</small>
      </div>
      <Grid container spacing={3}>
        {overview_cards.map((overview) => (
          <Grid item xs={2.4} className={styles.overview_cards}>
            <div key={overview.id}>
              <>{overview.icon}</>
              <h4 className={styles.overview_title}>{overview.title}</h4>
              <h4>{overview.price || overview.count}</h4>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
