import * as actions from './../../actions';

describe('help queue actions', () => {
  test('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Beer', brand: 'Budlight',
     price: 2.50, alcoholeContent: 'alcohole', id: 1})).toEqual({
      type: 'ADD_KEG',
      name: 'Beer',
      brand: 'Budlight',
      price: 2.50,
      alcoholeContent: 'alcohole',
      id: 1
    });
  });
});