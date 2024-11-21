
let admin = "admin";
let user = "user";

export const Api = {
  Auth: {
    LOGIN: "user/login-register",
  },
  GET_FAQ: `${admin}/get-presale-faq`,
  GET_TEAM: `${admin}/get-presale-team`,
  GET_SETTING: `${admin}/get-presale-site-setting`,
  GET_ROUND: `${admin}/get-presale-round`,
  GET_ROADMAP: `${admin}/get-active-roadmap`,
  GET_CMS: `${admin}/get-user-cms`,

  GET_PROFILE: `${user}/get-user`,
  UPDATE_PROFILE: `${user}/update-user`,
  GET_REFERRAL_HISTORY: `${user}/referral-history`,
  ADD_EDIT_KYC: `${user}/add-kyc`,
  GET_KYC: `${user}/get-kyc`,
  REFERRAL_BONUS: `${user}/referral-bonus`,

  ADD_CONTACT_US: `${admin}/add-presale-contact-us`,
  ADD_TRANSACTION: `${user}/add-transaction`,
};
