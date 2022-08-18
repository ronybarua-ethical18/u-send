import React from "react";
import styles from "../../styles/customerStyles.module.css";
import {
  Button,
  Chip,
  Grid,
  InputAdornment,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { product_cards } from "../../../../dummyData";
import AppLayout from "../../../../layout/DashboardLayout";

export default function BulkPurchase() {
  const [age, setAge] = React.useState("Price High - Low");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <AppLayout>
      <div className={styles.bulk_purchase}>
        <div className={styles.bulk_topbar}>
          <div>
            <h4>Bulk Puchase</h4>
            <h6>Find products to purchase in bulk amount</h6>
          </div>
          <div>
            <Button variant="contained">New Sourcing Request</Button>
          </div>
        </div>
        <div className={styles.search_field}>
          <TextField
            size="small"
            sx={{ width: "100%" }}
            placeholder="Search products"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <div className={styles.muiSelectOption}>
            {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Sort By
            </InputLabel> */}
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              sx={{
                width: "100%",
              }}
              size="small"
              placeholder="Price High - Low"
              value={age}
              defaultValue="Price High - Low"
              label="Sort By"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
        <div className={styles.product_card}>
          <Grid container spacing={2}>
            {product_cards.map((product) => (
              <Grid item xs={3} className={styles.product_card}>
                <div key={product.id}>
                  <img src={product.img} alt="product" />
                  <div className={styles.content}>
                    <div>
                      <h5>{product.title}</h5>
                      <small>{product.sub_title}</small>
                    </div>
                    <Chip
                      label={product.status}
                      color="primary"
                      variant="outlined"
                    />
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={styles.bulk_product_pagination}>
          <Pagination count={10} variant="outlined" color="secondary" />
        </div>
      </div>
    </AppLayout>
  );
}
