import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import car from "../../../assets/car.png";
import wallet from "../../../assets/wallet.png";
import warning from "../../../assets/warning.png";
import LaunchIcon from "@mui/icons-material/Launch";

function getType(params) {
  if (params.value === "Car") {
    return (
      <div>
        <img src={car} alt="" />
      </div>
    );
  }
  if (params.value === "Wallet") {
    return (
      <div>
        <img src={wallet} alt="" />
      </div>
    );
  } else {
    return (
      <div>
        <img src={warning} alt="" />
      </div>
    );
  }
}

function getActions(params) {
  if (params.value === "Adjust") {
    return (
      <div className="flexbox" style={{ width: "100%" }}>
        <div
          style={{
            padding: "5px",
            textAlign: "center",
            width: "55%",
            borderRadius: "5px",
            color: "#8D40FF",
            border: "1px solid #8D40FF",
          }}
        >
          {params.value}
        </div>
        <LaunchIcon style={{ color: "#D9D9D9", cursor:"pointer" }} />
      </div>
    );
  } else {
    return (
      <div className="flexbox" style={{ width: "100%" }}>
        <div
          style={{
            padding: "5px",
            textAlign: "center",
            width: "55%",
            borderRadius: "5px",
            color: "#8D40FF",
            border: "1px solid #8D40FF",
          }}
        >
          {params.value}
        </div>
        <LaunchIcon style={{ color: "#D9D9D9", cursor:"pointer" }} />
      </div>
    );
  }
}
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "time", headerName: "Time", width: 130 },
  {
    field: "type",
    headerName: "Type",
    width: 130,
    renderCell: (params) => {
      return <>{getType(params)}</>;
    },
  },
  { field: "description", headerName: "Description", width: 300 },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return <>{getActions(params)}</>;
    },
  },
];

const rows = [
  {
    id: 1,
    date: "2020-01-01",
    time: "15.39PM",
    type: "Car",
    description: "Missing housenumber in order #3421",
    action: "Adjust",
  },
  {
    id: 2,
    date: "2020-01-01",
    time: "15.39PM",
    type: "Wallet",
    description: "Missing housenumber in order #3421",
    action: "Add Balance",
  },
  {
    id: 3,
    date: "2020-01-01",
    time: "15.39PM",
    type: "Warning",
    description: "Missing housenumber in order #3421",
    action: "Adjust",
  },
  {
    id: 4,
    date: "2020-01-01",
    time: "15.39PM",
    type: "Car",
    description: "Missing housenumber in order #3421",
    action: "Add Balance",
  },
  {
    id: 5,
    date: "2020-01-01",
    time: "15.39PM",
    type: "Wallet",
    description: "Missing housenumber in order #3421",
    action: "Adjust",
  },
  {
    id: 6,
    date: "2020-01-01",
    time: "15.39PM",
    type: "Warning",
    description: "Missing housenumber in order #3421",
    action: "Add Balance",
  },
  {
    id: 7,
    date: "2020-01-01",
    time: "15.39PM",
    type: "Car",
    description: "Missing housenumber in order #3421",
    action: "Adjust",
  },
  {
    id: 8,
    date: "2020-01-01",
    time: "15.39PM",
    type: "Warning",
    description: "Missing housenumber in order #3421",
    action: "Add Balance",
  },
  {
    id: 9,
    date: "2020-01-01",
    time: "15.39PM",
    type: "Wallet",
    description: "Missing housenumber in order #3421",
    action: "Adjust",
  },
];

export default function NotificationDataTable() {
  return (
    <div style={{ height: 400, width: "100%" }} className="hide_scrollbar">
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
