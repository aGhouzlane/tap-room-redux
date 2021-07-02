import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <p>{props.name}</p>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.alcoholeContent}</p>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  price: PropTypes.string
};

export default Keg;