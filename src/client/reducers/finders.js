import { propEq, findIndex, path as ramdaPath, remove } from "ramda";
import uuidv4 from "uuid/v4";

import { ADD_NEW_FINDER, DELETE_FINDER } from "../actions/finders";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_FINDER: {
      return [...state, action.newFinder];
    }
    case DELETE_FINDER: {
      const finderIndex = findIndex(propEq("id", action.finderId))(state);
      return remove(finderIndex, 1, state);
    }
    default:
      return state;
  }
};

export default reducer;
