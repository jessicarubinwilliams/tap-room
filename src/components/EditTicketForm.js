import React from "react";
import PropTypes from "prop-types";

function EditTicketForm(props) {
  const { ticket } = props;

function handleEditTicketFormSubmission(event) {
  event.preventDefault();
  props.onEditTicket({
    names: event.target.names.value,
    location: event.target.location.value,
    issue: event.target.issue.value,
    id: ticket.id
  });
}

  return (
    <React.Fragment>
      <form onSubmit={handleEditTicketFormSubmission}>
        <input
          type="text"
          name="names"
          placeholder="Pair Names" 
          defaultValue={ticket.names} />
        <input
          type="text"
          name="location"
          placeholder="Location" 
          defaultValue={ticket.location} />
        <textarea
          name="issue"
          placeholder="Describe your issue" 
          defaultValue={ticket.issue} />
        <button type="submit">Update Ticket</button>
      </form>
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onEditTicket: PropTypes.func
}

export default EditTicketForm;