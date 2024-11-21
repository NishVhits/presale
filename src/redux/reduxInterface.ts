export interface AdminState {
  isAdminLogin: boolean;
  isOpenModal: boolean;
  userDetails: [] | object;
  token: string;
  userSeedTokenData:any;
  userTokensData:any;
  referralData:any;
}

export interface RootState {
  AdminReducer: AdminState;
}

export interface AdminPayload {
  // Define the properties of AdminPayload here
  username: string;
  token: string;
  // Add other properties as needed
}
