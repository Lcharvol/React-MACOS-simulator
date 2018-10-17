import {
    propEq,
    findIndex,
    drop,
    length,
    dropLast,
    isNil,
    path as ramdaPath,
    remove
} from 'ramda';
import uuidv4 from 'uuid/v4';

import {
    ADD_NEW_FINDER,
} from '../actions/finders';
import { initialFinder } from '../constants/finder';

const initialState = [initialFinder];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_FINDER: {
            return [...state];
        }
        default:
        return state;
    }
};

export default reducer;