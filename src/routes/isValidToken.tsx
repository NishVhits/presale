// authUtils.ts
import { jwtDecode } from "jwt-decode";
// import PagesIndex from "../container/PagesIndex";

interface DecodedToken {
  exp: number;
}

const useIsValidToken = (accessToken: string | null): boolean => {
  // const dispatch: ReturnType<typeof PagesIndex.useDispatch> =
  // PagesIndex.useDispatch();
  // const { disconnect } = PagesIndex.useTonWallet();
  if (!accessToken) return false;

  const decodedToken: DecodedToken = jwtDecode<DecodedToken>(accessToken);
  const currentTime = Date.now() / 1000;

  if (decodedToken.exp > currentTime) {
    return true;
  } else {
    // dispatch(PagesIndex.AdminLogOutAction());
    // disconnect();
    return false;
  }
};

export default useIsValidToken;
