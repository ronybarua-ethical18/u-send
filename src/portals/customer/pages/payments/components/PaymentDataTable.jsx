import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LaunchIcon from "@mui/icons-material/Launch";
import styles from "../../../styles/customerStyles.module.css";

function getPaymentChipProps(params) {
  if (params.value === "Paid") {
    return (
      <div
        style={{
          background: "#D4FFD3",
          color: "#05AE01",
        }}
        className={styles.payment_status}
      >
        {params.value}
      </div>
    );
  }
  if (params.value === "Failed") {
    return (
      <div
        style={{
          background: "#FFF0F0",
          color: "#FF7E7E",
        }}
        className={styles.payment_status}
      >
        {params.value}
      </div>
    );
  }
  if (params.value === "Stock Out") {
    return (
      <div
        style={{
          background: "#FFF0F0",
          color: "#FF7E7E",
        }}
        className={styles.payment_status}
      >
        {params.value}
      </div>
    );
  } else {
    return (
      <div
        style={{
          background: "#FEFFCF",
          color: "#E0A816",
        }}
        className={styles.payment_status}
      >
        {params.value}
      </div>
    );
  }
}

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "date", headerName: "Date", width: 200 },
  { field: "payment_method", headerName: "Payment Method", width: 200 },
  {
    field: "amount",
    headerName: "Amount",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      return <>{getPaymentChipProps(params)}</>;
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 130,
    renderCell: (params) => {
      return (
        <>
          <LaunchIcon style={{ color: "#D9D9D9", cursor: "pointer" }} />
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    date: "16-07-2022",
    payment_method: "Credit Card",
    amount: "200 unit",
    status: "Paid",
    action: "Adjust",
  },
  {
    id: 2,
    date: "16-07-2022",
    payment_method: "Credit Card",
    amount: "200 unit",
    status: "Stock out",
    action: "Adjust",
  },
  {
    id: 3,
    date: "16-07-2022",
    payment_method: "Credit Card",
    amount: "200 unit",
    status: "Pending",
    action: "Adjust",
  },
  {
    id: 4,
    date: "16-07-2022",
    payment_method: "Credit Card",
    amount: "200 unit",
    status: "Stock out",
    action: "Adjust",
  },
  {
    id: 5,
    date: "16-07-2022",
    payment_method: "Credit Card",
    amount: "200 unit",
    status: "Paid",
    action: "Adjust",
  },
  {
    id: 6,
    date: "16-07-2022",
    payment_method: "Credit Card",
    amount: "200 unit",
    status: "Failed",
    action: "Adjust",
  },
  {
    id: 7,
    date: "16-07-2022",
    payment_method: "Credit Card",
    amount: "200 unit",
    status: "Pending",
    action: "Adjust",
  },
  {
    id: 8,
    date: "16-07-2022",
    payment_method: "Credit Card",
    amount: "200 unit",
    status: "Failed",
    action: "Adjust",
  },
  {
    id: 9,
    date: "16-07-2022",
    payment_method: "Credit Card",
    amount: "200 unit",
    status: "Stock out",
    action: "Adjust",
  },
];

export default function PaymentDataTable() {
  return (
    <div style={{ height: 400, width: "100%", marginTop:"30px" }} className="hide_scrollbar">
      <DataGrid
        rows={rows}
        columns={columns}
        pcostSize={5}
        rowsPerPcostOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
