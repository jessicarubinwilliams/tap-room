import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <hr/>
        {props.kegList.map((keg) =>
          <Keg 
            whenKegClicked = {props.onKegSelection}
            name={keg.name}
            brand={keg.brand}
            pintPrice={keg.pintPrice}
            brix={keg.brix}
            pintsRemaining = {keg.pintsRemaining}
            id={keg.id}
            key={keg.id}/>,
          <button onClick={ () => props.onClickingSellAPint(keg)}>Sell A Pint</button>
        )}
  </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;