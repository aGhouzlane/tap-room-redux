import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg, index) =>
        <Keg 
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholeContent={keg.alcoholeContent}
          key={index}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;