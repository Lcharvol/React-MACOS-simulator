import {
    propEq,
    findIndex,
    map,
    equals,
    isNil
} from 'ramda';
import uuidv4 from 'uuid/v4';

import {
    ADD_NEW_TERM,
    ADD_NEW_LINE,
    CHANGE_LOCATION,
} from '../actions/terms';
import { initialTerm, initialLine } from '../constants/term';

const initialState = [initialTerm];
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOCATION: {
            const termIndex = findIndex(propEq('id', action.termId))(state);
            state[termIndex] = {
                ...state[termIndex],
                path: [...state[termIndex].path, action.dest]
            };
            return [...state];
        }
        case ADD_NEW_TERM:
            return [...state, action.newTerm];
        case ADD_NEW_LINE: {
            const termIndex = findIndex(propEq('id', action.termId))(state);
            state[termIndex] = {
                ...state[termIndex],
                lines: [
                    ...state[termIndex].lines,
                    {
                        ...initialLine,
                        id: uuidv4(),
                        location: action.location,
                        values: !isNil(action.ret) ? [action.line, action.ret] : [action.line],
                    }
                ]
            }
            return [...state];
        }
        default:
        return state;
    }
};

export default reducer;