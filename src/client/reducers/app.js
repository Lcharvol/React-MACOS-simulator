import {
  CHANGE_TOP_TERM,
  DESKTOP_GO_RIGHT,
  DESKTOP_GO_LEFT
} from '../actions/app';
import { findIndex, propEq, length } from 'ramda';

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
    case DESKTOP_GO_RIGHT: {
      const activeId = findIndex(propEq('active', true))(state.desktops);
      if((activeId + 1) < length(state.desktops)) {
        state.desktops[activeId].active = false;
        state.desktops[activeId + 1].active = true;
      }
      return {...state }
    }
    case DESKTOP_GO_LEFT: {
      const activeId = findIndex(propEq('active', true))(state.desktops);
      if((activeId - 1) >= 0) {
        state.desktops[activeId].active = false;
        state.desktops[activeId - 1].active = true;
      }
      return {...state }
    }
    default:
      return state;
  }
};
  
  export default reducer;