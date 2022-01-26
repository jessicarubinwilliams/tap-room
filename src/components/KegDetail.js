import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingEdit, onClickingSellAPint } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.brand} - {keg.name}</h3>
      <p><em>{keg.pintPrice}</em></p>
      <h3>Pints remaining: {keg.pintsRemaining}  </h3>
      <button onClick={ () => onClickingSellAPint(keg) }>Sell A Pint</button>
      <button onClick={ onClickingEdit }>Update Keg</button>
      <button onClick={ () => onClickingDelete(keg.id) }>Close Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;