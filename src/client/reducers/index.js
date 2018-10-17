import { combineReducers } from 'redux';

import app from './app';
import terms from './terms';
import fileSys from './fileSys';
import finders from './finders';

const reducer = combineReducers({
  app,
  terms,
  fileSys,
  finders
});

export default reducer;