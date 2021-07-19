import formVisibleReducer from './form-visible-reducer';
import KegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTicketList: KegListReducer
});

export default rootReducer;