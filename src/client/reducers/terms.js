import { ADD_NEW_TERM } from '../actions/terms';
import { initialTerm } from '../constants/term';

const initialState = [initialTerm];
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TERM: {
        return [...state, action.newTerm];
        }
        default:
        return state;
    }
};

export default reducer;