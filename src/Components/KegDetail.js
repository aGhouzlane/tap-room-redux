import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const {keg, subtractPint } = props;
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <p>{keg.name}</p>
      <p>{keg.brand}</p>
      <p>{keg.price}</p>
      <p>{keg.alcoholeContent}</p>
      <p>{keg.pint}</p>
      <hr />
      <button onClick={() => subtractPint(keg.id)}>substruct pint</button> 
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  subtractPint: PropTypes.func
};

export default KegDetail;