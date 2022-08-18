import React from "react";
import handLogo from "../../assets/img/hand.png";

export default function WelcomeTitle({ title }) {
  return (
    <div>
      <img src={handLogo} alt="logo" />
      <h2>Welcome Back</h2>
      <h3>{title}</h3>
    </div>
  );
}
