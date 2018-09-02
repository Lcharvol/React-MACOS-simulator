import { CHANGE_TOP_TERM } from '../actions/app';

const initialState = {
  topTermPosition: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOP_TERM: {
      console.log('change top term pos');
      return {...state, topTermPosition: action.position};
    }
    default:
      return state;
  }
};
  
  export default reducer;