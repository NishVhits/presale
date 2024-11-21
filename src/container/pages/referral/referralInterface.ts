interface User {
  _id: string;
  wallet_address: string;
}

export interface UserDetails {
  createdAt: string; 
  is_active: boolean;
  is_deleted: boolean;
  main_user_id: User; 
  email: string;
  wallet_address: string;
  _id: string;
  referral_user_id: User; 
  token: number;
  updatedAt: string;
  __v: number;
}
