import uuidv4 from 'uuid/v4';

import { initialTerm, initialLine } from '../constants/term';


export const ADD_NEW_TERM = "term:addnew";

export const ADD_NEW_LINE = "term:add:line";

export const CHANGE_LOCATION = "term:location:change";

export const CLEAR_TERM = "term:command:clear";

export const DELETE_TERM = "term:delete";

export const addNewTerm = () => ({ type: ADD_NEW_TERM, newTerm: {...initialTerm, id: uuidv4()} });

export const addNewLine = (termId, location, line, ret) => ({ type: ADD_NEW_LINE, termId, location, line, ret });

export const changeLocation = (dest, termId) => ({ type: CHANGE_LOCATION, dest, termId });

export const clearTerm = (termId) => ({ type: CLEAR_TERM, termId });

export const deleteTerm = termId => ({ type: DELETE_TERM, termId });