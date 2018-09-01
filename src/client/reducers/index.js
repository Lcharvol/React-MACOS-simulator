import { combineReducers } from 'redux';

import app from './app';
import terms from './terms';

const reducer = combineReducers({
  app,
  terms,
});

export default reducer;