import { BrowserRouter, Route, Routes as Routess } from "react-router-dom";
import Layout from "../container/pages/layout/Layout";
import Home from "../container/pages/Home/Home";
import Ico from "../container/pages/Ico/Ico";
import MyAcount from "../container/pages/myaccount/MyAcount";
import UserLayout from "../container/pages/userLayout/UserLayout";
import PrivateRoutes from "./PrivateRoutes";
import Transaction from "../container/pages/dashboard/Dashboard";
import Profile from "../container/pages/profile/Profile";
import Referral from "../container/pages/referral/Referral";
import KycStatus from "../container/pages/kycStatus/KycStatus";
import { useSelector } from "react-redux";
import { DataService } from "../config/DataService";
// import { useTonAddress } from "@tonconnect/ui-react";

export default function Routes() {
  const {  token } = useSelector(
    (state: any) => state.AdminReducer
  );

  // const userFriendlyAddress = useTonAddress();
// console.log({userFriendlyAddress});

  DataService.defaults.headers.common.auth = token;
  return (
    <BrowserRouter>
      <Routess>
        <Route path="" element={<Layout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Ico />}></Route>
          <Route path="/:id" element={<Ico />}></Route>
          <Route element={<UserLayout />}>
            <Route
              path="/myaccount"
              element={
                <PrivateRoutes>
                  <MyAcount />
                </PrivateRoutes>
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <PrivateRoutes>
                  <Transaction />
                </PrivateRoutes>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoutes>
                  <Profile />
                </PrivateRoutes>
              }
            />
            <Route
              path="/referral"
              element={
                <PrivateRoutes>
                  <Referral />
                </PrivateRoutes>
              }
            />
            <Route
              path="/kyc-status"
              element={
                <PrivateRoutes>
                  <KycStatus />
                </PrivateRoutes>
              }
            />
          </Route>
        </Route>
      </Routess>
    </BrowserRouter>
  );
}
