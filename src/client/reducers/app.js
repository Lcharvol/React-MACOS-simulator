import {
  CHANGE_TOP_TERM,
  DESKTOP_GO_RIGHT,
  DESKTOP_GO_LEFT
} from "../actions/app";
import { findIndex, propEq, length } from "ramda";
import { TERM, FINDER } from "../constants/shortcuts";

const initialState = {
  topWindowPosition: 0,
  menu: {
    shortcuts: [TERM, FINDER]
  },
  desktops: [
    {
      id: 0,
      active: true,
      topWindowPosition: 0
    },
    {
      id: 1,
      active: false,
      topWindowPosition: 0
    }
  ],
  file_sys: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOP_TERM: {
      return { ...state, topWindowPosition: action.position };
    }
    case DESKTOP_GO_RIGHT: {
      const activeId = findIndex(propEq("active", true))(state.desktops);
      if (activeId + 1 < length(state.desktops)) {
        state.desktops[activeId].active = false;
        state.desktops[activeId + 1].active = true;
      }
      return { ...state };
    }
    case DESKTOP_GO_LEFT: {
      const activeId = findIndex(propEq("active", true))(state.desktops);
      if (activeId - 1 >= 0) {
        state.desktops[activeId].active = false;
        state.desktops[activeId - 1].active = true;
      }
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
