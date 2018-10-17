import uuidv4 from "uuid/v4";

import { initialFinder } from "../constants/finder";

export const ADD_NEW_FINDER = "term:addnew";

export const DELETE_FINDER = "finder:delete";

export const addNewFinder = () => ({
  type: ADD_NEW_FINDER,
  newFinder: { ...initialFinder, id: uuidv4() }
});

export const deleteFinder = finderId => ({ type: DELETE_FINDER, finderId });
