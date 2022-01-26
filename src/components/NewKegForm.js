import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, pintPrice: event.target.pintPrice.value, id: v4(), pintsRemaining: 124});
  }

  return (
    <React.Fragment>
       <form onSubmit={handleNewKegFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="Beverage Name" />
        <input
          type="text"
          name="brand"
          placeholder="Beverage Brand" />
        <input
          type="number"
          step="0.01"
          name="pintPrice"
          placeholder="Price per pint" />
        <button type="submit">Add this keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;