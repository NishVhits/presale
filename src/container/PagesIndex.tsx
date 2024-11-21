import Svg from "../assets/Svg";
import Png from "../assets/Png";
import Video from "../assets/Video";
import Header from "../component/user/defaulLayout/Header";
import Footer from "../component/user/defaulLayout/Footer";
import {
  BpCheckbox,
  CustomTabPanel,
  IOSSwitch,
  StyledMenu,
  style,
} from "../component/common/commonCssFunction/cssFunction";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../component/common/pagination/Pagination";
import Hero from "./pages/Home/Hero";
import features from "./pages/Home/features";
import Games from "./pages/Home/Games";
import Mission from "./pages/Home/Mission";
import Counter from "./pages/Home/Counter";
import GameWorld from "./pages/Home/GameWorld";
import RollingCounter from "./pages/Ico/RollingCounter";
import Roadmap from "./pages/Home/Roadmap";
import {
  apiGetHandler,
  apiGetHandlerAdmin,
  apiPostHandler,
} from "../config/ApiHandler";
import { Api } from "../config/Api";
import Participate from "./pages/Ico/Participate";
import Tokenomics from "./pages/Ico/Tokenomics";
import Team from "./pages/Ico/Team";
import Sidebar from "../component/user/defaulLayout/Sidebar";
import IcoHero from "./pages/Ico/IcoHero";
import BuyPresale from "./pages/Ico/BuyPresale";
import Whitepaper from "./pages/Ico/Whitepaper";
import IcoRoadmap from "./pages/Ico/IcoRoadmap";
import IcoFooter from "../component/user/defaulLayout/IcoFooter";
import { toasterError, toasterSuccess } from "../utils/toaster/Toaster";
import { Formik, Form } from "formik";
import {
  contactUsFormSchema,
  profileValidationSchema,
  AddUserDocValidationSchema,
  editUserDocValidationSchema,
} from "../utils/validation/FormikValidation";
import UserSidebar from "./pages/userLayout/UserSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useTonWallet } from "@tonconnect/ui-react";
import DataNotFound from "../component/common/dataNotFound/DataNotFound";
import { DataService } from "../config/DataService";
import { shortenString } from "../component/common/shortenString";
import moment from "moment";
import {
  AdminLogInAction,
  AdminLogOutAction,
  GetAdminTokenAction,
  IsOpenModalAction,
  setUserSeedTokenData,
  setUserTokensData,
  setReferralData,
} from "../redux/action";
import Jpg from "../assets/jpg";

export default {
  Svg,
  Png,
  Header,
  Footer,
  BpCheckbox,
  Jpg,
  CustomTabPanel,
  IOSSwitch,
  StyledMenu,
  AdminLogInAction,
  AdminLogOutAction,
  shortenString,
  setUserSeedTokenData,
  setUserTokensData,
  moment,
  GetAdminTokenAction,
  IsOpenModalAction,
  setReferralData,
  style,
  DataService,
  useSelector,
  useLocation,
  Pagination,
  Hero,
  features,
  Games,
  Mission,
  Counter,
  GameWorld,
  RollingCounter,
  Roadmap,
  apiPostHandler,
  Api,
  Participate,
  Tokenomics,
  Team,
  Sidebar,
  IcoHero,
  BuyPresale,
  Whitepaper,
  IcoRoadmap,
  IcoFooter,
  apiGetHandler,
  toasterError,
  toasterSuccess,
  apiGetHandlerAdmin,
  Video,
  Formik,
  Form,
  contactUsFormSchema,
  profileValidationSchema,
  AddUserDocValidationSchema,
  editUserDocValidationSchema,
  UserSidebar,
  useDispatch,
  useTonWallet,
  DataNotFound,
  useNavigate,
};
