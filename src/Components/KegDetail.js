import React from "react";

function KegDetail(props) {
  const { keg } = props;
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <p>{keg.name}</p>
      <p>{keg.brand}</p>
      <p>{keg.price}</p>
      <p>{keg.alcoholeContent}</p>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;