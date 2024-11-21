import type from "./type";

const AdminLogInAction = (payload: any) => {
  return {
    type: type.adminLogInSuccess,
    payload,
  };
};
const GetAdminTokenAction = (payload: string) => ({
  type: type.getAdminToken,
  payload,
});

const AdminLogOutAction = () => ({
  type: type.adminLogOutSuccess,
});

const IsOpenModalAction = (payload: boolean) => ({
  type: type.selectFromHeroSection,
  payload,
});

const setUserSeedTokenData = (payload: any) => {
  console.log("action page", payload);
  return {
    type: type.useTransitionList,
    payload,
  };
};

const setUserTokensData = (payload: any) => {
  console.log("data", payload,"in action");
  return {
    type: type.userTokensData,
    payload,
  };
};
const setReferralData = (payload: any) => {
  console.log("data", payload);
  return {
    type: type.referralData,
    payload,
  };
};

export {
  AdminLogInAction,
  AdminLogOutAction,
  GetAdminTokenAction,
  IsOpenModalAction,
  setUserSeedTokenData,
  setUserTokensData,
  setReferralData,
};
