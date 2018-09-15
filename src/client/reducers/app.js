import { CHANGE_TOP_TERM } from '../actions/app';

const initialState = {
  topTermPosition: 0,
  menu: {
    shortcuts: ['termux', 'document'],
  },
  desktops: [
    {
      id: 0,
      active: true,
      topTermPosition: 0
    },
    {
      id: 1,
      active: false,
      topTermPosition: 0
    }
  ],
  file_sys: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOP_TERM: {
      return {...state, topTermPosition: action.position};
    }
    default:
      return state;
  }
};
  
  export default reducer;