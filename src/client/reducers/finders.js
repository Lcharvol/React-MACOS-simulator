import {
  propEq,
  findIndex,
  drop,
  length,
  dropLast,
  isNil,
  path as ramdaPath,
  remove
} from "ramda";
import uuidv4 from "uuid/v4";

import { ADD_NEW_FINDER, DELETE_FINDER } from "../actions/finders";
import { initialFinder } from "../constants/finder";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_FINDER: {
      return [...state];
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
