import React from "react";
import PropTypes from "prop-types";

function EditKegForm(props) {
  const { keg } = props;

function handleEditKegFormSubmission(event) {
  event.preventDefault();
  props.onEditKeg({
    name: event.target.name.value,
    brand: event.target.brand.value,
    pintPrice: event.target.pintPrice.value,
    pintsRemaining: event.target.pintsRemaining.value,
    id: keg.id
  });
}

  return (
    <React.Fragment>
      <form onSubmit={handleEditKegFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="Beverage Name" 
          defaultValue={keg.name} />
        <input
          type="text"
          name="brand"
          placeholder="Beverage Brand" 
          defaultValue={keg.brand} />
        <input
          type="number"
          name="pintPrice"
          placeholder="Price per pint" 
          defaultValue={keg.pintPrice} />
        <input
          type="number"
          name="pintsRemaining"
          placeholder="Number of pints remaining in this keg"
          defaultValue={keg.pintsRemaining} />
        <button type="submit">Update Keg</button>
      </form>
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm;