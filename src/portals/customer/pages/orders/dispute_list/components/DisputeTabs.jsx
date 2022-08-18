import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Home } from "@mui/icons-material";
import { Chip } from "@mui/material";
import DisputeDataTable from "./DisputeDataTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DisputeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          inkBarStyle={{backgroundColor: '#000'}}
        >
          <Tab
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                <Chip
                  label="26"
                  size="small"
                  variant="outlined"
                  color="primary"
                  sx={{ marginRight: "10px" }}
                />{" "}
                All
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                <Chip
                  label="3"
                  size="small"
                  sx={{ marginRight: "10px" }}
                />{" "}
                Pending
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                <Chip
                  label="9"
                  size="small"
                  variant="outlined"
                  color="primary"
                  sx={{ marginRight: "10px" }}
                />{" "}
                Completed
              </div>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <DisputeDataTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
