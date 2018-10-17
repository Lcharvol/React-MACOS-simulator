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
    ADD_NEW_TERM,
    ADD_NEW_LINE,
    CHANGE_LOCATION,
    CLEAR_TERM,
    DELETE_TERM,
    ADD_TO_COMMAND_HISTORY,
} from '../actions/terms';
import { initialTerm, initialLine } from '../constants/term';

const initialState = [initialTerm];

const isDestAvailable = (path, tree) => {
    return true;
};

const getNewPath = (oldPath, dest, tree) => {
    if(!isDestAvailable(oldPath, tree))
        return oldPath;
    if(dest == '..')
        return length(oldPath) > 1 ? dropLast(1, oldPath) : oldPath;
    return [...oldPath, dest]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOCATION: {
            const termIndex = findIndex(propEq('id', action.termId))(state);
            let path = getNewPath(state[termIndex].path, action.dest, state[termIndex].tree);

            if(action.dest === '~')
                path = ['~'];
            state[termIndex] = {
                ...state[termIndex],
                path,
            };
            return [...state];
        }
        case CLEAR_TERM: {
            const termIndex = findIndex(propEq('id', action.termId))(state);
            state[termIndex] = {
                ...state[termIndex],
                lines: [],
            }
            return [...state];
        };
        case ADD_TO_COMMAND_HISTORY: {
            const termIndex = findIndex(propEq('id', action.termId))(state);
            state[termIndex].history.commands = [...state[termIndex].history.commands, action.command];
            if(length(state[termIndex].history.commands) > 5)
                state[termIndex].history.commands = drop(1, state[termIndex].history.commands);
            return [...state];
        }
        case DELETE_TERM: {
            const termIndex = findIndex(propEq('id', action.termId))(state);
            return remove(termIndex, 1, state)
        };
        case ADD_NEW_TERM: {
            return [...state, action.newTerm];
        };
        case ADD_NEW_LINE: {
            const termIndex = findIndex(propEq('id', action.termId))(state);

            if(action.ret === null)
                return [...state];
            state[termIndex] = {
                ...state[termIndex],
                lines: [
                    ...state[termIndex].lines,
                    {
                        ...initialLine,
                        id: uuidv4(),
                        location: action.location,
                        values: !isNil(action.ret) ? [action.line, ...action.ret] : [action.line],
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