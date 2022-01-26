import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        <p>$ {props.pintPrice} /pint</p>
        <p>{props.brix} %Brix</p>
        <h3>Pints remaining: {props.pintsRemaining}  </h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  pintPrice: PropTypes.number.isRequired,
  brix: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  pintsRemaining: PropTypes.number
};

export default Keg;