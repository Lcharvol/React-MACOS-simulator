import { initialFileSys } from "../constants/fileSys";
import {
  drop,
  dissocPath,
  assocPath,
  without,
  path as ramdaPath,
} from 'ramda';

import {
  ADD_REPOSITORY,
  ADD_FILE,
  REMOVE_FILE,
  REMOVE_FOLDER
} from '../actions/fileSys';

const reducer = (state = initialFileSys, action) => {
  switch (action.type) {
    case ADD_REPOSITORY: {
      const { path, name } = action;

      state = assocPath(
          [...drop(1, path), name],
          { files: [] },
          state
      );
      return {...state};
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
      return {...state};
  };
  case REMOVE_FILE: {
      const { path, name } = action;

      state = assocPath(
          [...drop(1, path), 'files'],
          without(name, ramdaPath(drop(1, path), state).files),
          state
      );
      return {...state};
  };
  case REMOVE_FOLDER: {
        const { path, name } = action;
        state = dissocPath(
            [...drop(1, path), name],
            state
        );
        return {...state};
    }
    default:
      return state;
  }
};
  
  export default reducer;