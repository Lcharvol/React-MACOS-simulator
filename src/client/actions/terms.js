import { initialTerm }from '../constants/term';

export const ADD_NEW_TERM = "term:addnew";
export const addNewTerm = () => ({ term: initialTerm });