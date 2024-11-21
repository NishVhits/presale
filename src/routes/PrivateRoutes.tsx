import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useIsValidToken from "./isValidToken";
import { DataService } from "../config/DataService";
import {  useSelector } from "react-redux";
// import { useTonAddress } from "@tonconnect/ui-react";

// import { useTonWallet } from "@tonconnect/ui-react";

interface PrivateRoutesProps {
  children: React.ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ children }) => {
  // const userFriendlyAddress = useTonAddress();
// console.log({userFriendlyAddress});

  const { isAdminLogin, token } = useSelector(
    (state: any) => state.AdminReducer
  );
// console.log({token});

  DataService.defaults.headers.common.auth = token;
  // const navigate = useNavigate();
  const isValid = useIsValidToken(token);
  // const wallet = useTonWallet();
  // useEffect(() => {
  //   if (!isValid) {
  //     navigate("/");
  //   }
  // }, [isValid]);
  
  return isAdminLogin && isValid ? (
    <>{children}</>
  ) : (
    <Navigate to="/" replace={true} />
  );
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
