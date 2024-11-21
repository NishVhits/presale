import { combineReducers } from "redux";
import AdminReducer from "./reducer";
import { AdminState } from "./reduxInterface";

export interface RootState {
  AdminReducer: AdminState;
}

const rootReducer = combineReducers({
  AdminReducer: AdminReducer,
});

export default rootReducer;
