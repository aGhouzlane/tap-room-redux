import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {
    name: 'Wiskey',
    brand: 'Jack Daniel',
    price: 20,
    alcoholContent: 'Wiskey'
  },
  {
    name: 'Beer',
    brand: 'Corona',
    price: 3,
    alcoholContent: 'Beer'
  }
];

function KegList(){
  return (
    <React.Fragment>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg 
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholeContent={keg.alcoholContent}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default KegList;