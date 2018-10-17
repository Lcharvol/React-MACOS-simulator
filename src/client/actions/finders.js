import uuidv4 from 'uuid/v4';

import { initialFinder} from '../constants/finder';

export const ADD_NEW_FINDER = "term:addnew";

export const addNewFinder = () => ({ type: ADD_NEW_FINDER, newFinder: {...initialFinder, id: uuidv4()} });