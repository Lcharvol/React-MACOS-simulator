import { combineReducers } from 'redux';

import app from './app';
import terms from './terms';
import fileSys from './fileSys';

const reducer = combineReducers({
  app,
  terms,
  fileSys,
});

export default reducer;