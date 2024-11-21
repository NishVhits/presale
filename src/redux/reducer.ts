import { AnyAction } from "redux";
import type from "./type";
import { AdminState } from "./reduxInterface";

const initialState: AdminState = {
  isAdminLogin: false,
  userDetails: {},
  userSeedTokenData: [],
  userTokensData: [],
  referralData: [],
  token: "",
  isOpenModal: false,
};

const AdminReducer = (
  state: AdminState = initialState,
  action: AnyAction
): AdminState => {
  switch (action.type) {
    case type.adminLogInSuccess:
      return {
        ...state,
        userDetails: action.payload,
        isAdminLogin: true,
      };
    case type.getAdminToken:
      return {
        ...state,
        token: action.payload,
      };
    case type.adminLogOutSuccess:
      return initialState;
    case type.selectFromHeroSection:
      return {
        ...state,
        isOpenModal: action.payload,
      };
    case type.useTransitionList:
      return {
        ...state,
        userSeedTokenData: action.payload,
      };
    case type.userTokensData:
      return {
        ...state,
        userTokensData: action.payload,
      };
    case type.referralData:
      return {
        ...state,
        referralData: action.payload,
      };
    default:
      return state;
  }
};

export default AdminReducer;
