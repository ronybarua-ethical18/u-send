/* eslint-disable react/destructuring-assignment */
import { Grid } from "@mui/material";
import Topbar from "../components/Topbar";
import Sidebar from "./sidebar";
// import AdminSidebar from "./sidebar/AdminSidebar";

function AppLayout(props) {
  return (
    <Grid container style={{ height: "100vh", overflowY: "hidden" }}>
      <Grid item xs={12}>
        <Topbar />
      </Grid>
      <Grid item xs={2.5}>
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={9.5}
        style={{ height: "100vh", paddingBottom: "120px", overflowY: "scroll" }}
        className="hide_scrollbar"
      >
        <main>{props.children}</main>
      </Grid>
    </Grid>
  );
}

export default AppLayout;
