import React from "react";
import kombuchaTaps from "./../img/kombuchaTaps.webp";

function Header() {
  return (
    <React.Fragment>
      <h1>Kombucha Bar Inventory System</h1>
      <img src={kombuchaTaps} alt="Four stainless steep kombucha taps" />
    </React.Fragment>
  );
}

export default Header;