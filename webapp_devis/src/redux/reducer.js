import { combineReducers } from "redux";
import { DEV_RCV, ERR_MSG } from "./action_type";

const initState = {
  info: ""
};

function devis(state = initState, action) {
  switch (action.type) {
    case DEV_RCV:
      return { ...action.data };
    case ERR_MSG:
      return { ...state, msg: action.data };
    default:
      return state;
  }
}

export default combineReducers({ devis });
