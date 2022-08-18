import { Button, Grid } from "@mui/material";
import styles from "../styles/authStyles.module.css";
import logo from "../../assets/img/logo.png";
import React from "react";
import WelcomeTitle from "../components/WelcomeTitle";
import InputField from "../components/InputField";

export default function Signup() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className={styles.signup_left}>
            <div>
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
              </div>
              <h1>The Ultimate</h1>
              <h1>Dropshipping Solution</h1>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles.signup_right}>
            <WelcomeTitle />

            <h6 className={styles.sm_title}>
              Please fill up the following details
            </h6>
            <div className={styles.form}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputField
                    label="First Name"
                    placeholder="type your first name"
                    type="text"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    label="Last Name"
                    placeholder="type your last name"
                    type="text"
                    size="small"
                  />
                </Grid>
              </Grid>
              <InputField
                label="Login E-mail or Phone"
                placeholder="Type your email or phone "
                type="text"
                size="small"
              />
              <InputField
                label="Create Password"
                placeholder="Create a password"
                type="password"
              />
              <InputField
                label="Confirm Password"
                placeholder="Confirm password"
                type="password"
              />
              <InputField
                label="Refferal Code (Optional)"
                placeholder="enter yor refferal code"
                type="text"
              />
              <h5>
                By clicking Register I agree to U-Send Terms of Service and Privacy Policy.
              </h5>
              <div className={styles.button_part}>
                <Button
                  variant="contained"
                  className="w-full"
                  sx={{
                    margin: "0",
                    width: "100%",
                    height: "40px",
                    padding: "8px 1.5em",
                    fontWeight: "600",
                    fontSize: "15px",
                    boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
                    "&:hover": {
                      boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
                    },
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
