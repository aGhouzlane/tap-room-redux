import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  let action;
  const kegData = {
    name: 'Beer',
    brand: 'Corona',
    price: '3',
    alcoholeContent: 'Water',
    id: 1
  };

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, alcoholeContent, id } = ticketData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholeContent: alcoholeContent,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholeContent: alcoholeContent,
        id: id
      }
    });
  });

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
});