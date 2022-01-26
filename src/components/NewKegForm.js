import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, pintPrice: event.target.pintPrice.value, id: v4(), pintsRemaining: 124});
  }

  return (
    <React.Fragment>
        <ReusableForm
          formSubmissionHandler={handleNewKegFormSubmission}
          buttonText="Help!" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;