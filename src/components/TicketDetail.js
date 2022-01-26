import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket, onClickingDelete, onClickingEdit, onClickingSellAPint } = props;

  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <h3>Pints remaining: {ticket.pintsRemaining}  </h3>
      <button onClick={ () => onClickingSellAPint(ticket) }>Sell A Pint</button>
      <button onClick={ onClickingEdit }>Update Ticket</button>
      <button onClick={ () => onClickingDelete(ticket.id) }>Close Ticket</button>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;