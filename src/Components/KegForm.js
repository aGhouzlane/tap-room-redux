import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function KegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      alcoholeContent: event.target.alcoholeContent.value,
      id: v4()});
  }

  return (
    <React.Fragment>
      <h3>Add a Keg</h3>
      <form onSubmit={handleNewKegFormSubmission}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Brand:
          <input type="text" name="brand" />
        </label>
        <label>
          Price:
          <input type="text" name="price" />
        </label>
        <label>
          AlcoholeContent:
          <input type="text" name="alcoholeContent" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  );
}

KegForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default KegForm;