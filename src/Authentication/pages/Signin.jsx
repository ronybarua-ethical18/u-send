import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import styles from "../styles/authStyles.module.css";
import logo from "../../assets/img/logo.png";
import React from "react";
import WelcomeTitle from "../components/WelcomeTitle";
import InputField from "../components/InputField";

export default function Signin() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className={styles.signin_left}>
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
          <div className={styles.signin_right}>
            <WelcomeTitle title="Lets build success together" />
            <div className={styles.form}>
              <InputField
                label="Login E-mail or Phone"
                placeholder="Type your email or phone "
                type="text"
              />
              <InputField
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <div className="flexbox">
                <FormControlLabel control={<Checkbox />} label="Remember Me" />
                <a href="#">Forgot password?</a>
              </div>
              <div className={styles.button_part}>
                <Button
                  variant="contained"
                  className="w-full"
                  sx={{
                    margin: "2em 0",
                    width: "100%",
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
                  Login
                </Button>
                <h6>Don,t have an account? Sign up for free</h6>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
