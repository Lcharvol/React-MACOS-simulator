import { initialTerm, initialLine } from '../constants/term';

export const ADD_NEW_TERM = "term:addnew";

export const ADD_NEW_LINE = "term:add:line";

export const CHANGE_LOCATION = "term:location:change";

export const addNewTerm = () => ({ type: ADD_NEW_TERM, term: initialTerm });

export const addNewLine = termId => ({ type: ADD_NEW_LINE, termId });

export const changeLocation = (dest, termId) => ({ type: CHANGE_LOCATION, dest, termId });