import { initialFileSys } from "../constants/fileSys";
import {
  propEq,
  findIndex,
  map,
  drop,
  length,
  dropLast,
  takeLast,
  isNil,
  isEmpty,
  assocPath,
  without,
  path as ramdaPath,
  remove
} from 'ramda';

import {
  ADD_REPOSITORY,
  ADD_FILE,
  REMOVE_FILE
} from '../actions/terms';

const reducer = (state = initialFileSys, action) => {
  switch (action.type) {
    case ADD_REPOSITORY: {
      const { termId, name } = action;
      const term = state[findIndex(propEq('id', action.termId))(state)];
      const { path, tree } = term;

      term.tree = assocPath(
          [...drop(1, path), name],
          { files: [] },
          term.tree
      );
      return [...state];
  };
  case ADD_FILE: {
      const { path, name } = action;

      state = assocPath(
          [...drop(1, path), 'files'],
          [
              ...ramdaPath(drop(1, path), state).files,
              name
          ],
          state
      );
      return [...state];
  };
  case REMOVE_FILE: {
      const { termId, name } = action;
      const term = state[findIndex(propEq('id', action.termId))(state)];
      const { path, tree } = term;

      term.tree = assocPath(
          [...drop(1, path), 'files'],
          without(name, ramdaPath(drop(1, path), term.tree).files),
          term.tree
      );
      return [...state];
  };
    default:
      return state;
  }
};
  
  export default reducer;