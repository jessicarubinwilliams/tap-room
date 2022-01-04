import React from "react";
import dachshundImage from "./../img/dachshundImage.jpeg";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={dachshundImage} alt="An image of a longhaired dachshund running on a sandy beach at the waters edge" />
    </React.Fragment>
  );
}

export default Header;