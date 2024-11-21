import { useEffect, useRef, useState } from "react";
import Index from "../../../container/Index";
import PagesIndex from "../../../container/PagesIndex";
import {
  TonConnectButton,
  useTonAddress,
  useTonWallet
} from "@tonconnect/ui-react";
import { useParams } from "react-router-dom";

interface IpInfo {
  city: string;
  country: string;
  hostname: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
  timezone: string;
}

export default function Header() {
  const params = useParams();
  const dispatch = PagesIndex.useDispatch();
  const userFriendlyAddress = useTonAddress();
  const wallet = useTonWallet();
  const navigate = PagesIndex.useNavigate();
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
    document.body.classList[isActive ? "remove" : "add"]("body-overflow");
  };
  const [ipDetails, setIpDetails] = useState<IpInfo>({
    city: "",
    country: "",
    hostname: "",
    ip: "",
    loc: "",
    org: "",
    postal: "",
    region: "",
    timezone: "",
  });
  useEffect(() => {
    const handleScroll = () => {
      const headerMain = document.getElementById("header-main");
      if (window.scrollY === 0) {
        headerMain?.classList.remove("sticky-header");
      } else {
        headerMain?.classList.add("sticky-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchIpInfo = async () => {
    const key = import.meta.env.VITE_IP_ADDRESS_KEY;
    try {
      const response = await fetch(`https://ipinfo.io/json?token=${key}`);
      const data = await response.json();
      setIpDetails(data);
    } catch (err) {
      console.error("Problem fetching IP info", err);
    }
  };

  useEffect(() => {
    fetchIpInfo();
  }, []);

  // console.log("ipDetails", ipDetails);

  const initialRender = useRef(false);
  const updateuser = async (walletAddress: string) => {
    try {
      const data = {
        wallet_address: walletAddress || "",
        city: ipDetails?.city,
        country: ipDetails?.country,
        ip: ipDetails?.ip,
        region: ipDetails?.region,
        ...(params?.id ? { refer_code: params?.id } : null)
      };
      await PagesIndex.apiPostHandler(PagesIndex.Api.Auth.LOGIN, data).then(
        (response) => {
          if (response.status === 200 || response.status === 201) {
            navigate("/myaccount");
            dispatch(PagesIndex.GetAdminTokenAction(response?.data?.token));
            dispatch(PagesIndex.AdminLogInAction(response?.data));
          }
          return response;
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (userFriendlyAddress && initialRender.current) {
      updateuser(userFriendlyAddress);
    }
  }, [userFriendlyAddress]);

  const handleClickMenuItem = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      handleClick();
    }
  };

  const [walletConnected, setWalletConnected] = useState(false);
  useEffect(() => {
    if (wallet && !walletConnected) {
      setWalletConnected(true);
    } else if (!wallet && walletConnected) {
      dispatch(PagesIndex.AdminLogOutAction());
      setWalletConnected(false);
    }
  }, [wallet, walletConnected, dispatch]);



  return (
    <>
      <Index.Box className="header-main" id="header-main">
        <Index.Box className="container">
          <Index.Box className="header-row">
            <Index.Box className="header-cust-col">
              <Index.Box className="header-logo-box">
                <Index.Link className="header-logo-link" to="/home">
                  <img
                    src={PagesIndex.Svg.logo}
                    className="header-logo"
                    alt="logo"
                  />
                </Index.Link>
                <Index.Box className="text-logo-box">
                  <img
                    src={PagesIndex.Png.textLogo}
                    className="text-logo"
                    alt="logo"
                  />
                </Index.Box>
              </Index.Box>
            </Index.Box>
            <Index.Box className="header-cust-col">
              <Index.Box
                className={`header-nav-main ${
                  isActive ? "mobilemenu-active" : ""
                }`}
              >
                <Index.Box className="mobile-navbar-show">
                  <Index.Box className="mobile-navbar-head">
                    <Index.Box className="mobile-navbar-logo-flex">
                      <img
                        src={PagesIndex.Svg.logo}
                        className="header-nav-logo"
                        alt="logo"
                      />
                      <Index.Box className="text-logo-box">
                        <img
                          src={PagesIndex.Png.textLogo}
                          className="text-logo"
                          alt="logo"
                        />
                      </Index.Box>
                    </Index.Box>

                    <Index.Button
                      className="mobile-navbar-close-btn"
                      onClick={handleClick}
                    >
                      <img
                        src={PagesIndex.Svg.crossIcon}
                        className="mobile-navbar-close"
                        alt="close"
                      />
                    </Index.Button>
                  </Index.Box>
                  <Index.Box className="white-btn-main nav-login-btn-main">
                    <Index.Button className="white-btn nav-login-btn">
                      Log in
                    </Index.Button>
                  </Index.Box>
                </Index.Box>
                <Index.Box className="header-nav-scroll">
                  <Index.Box className="nav-profile-main">
                    <img
                      src={PagesIndex.Png.profileImg}
                      alt="Profile"
                      className="nav-profile-img"
                    />
                    <Index.Box className="wallet-icon-flex">
                      <Index.Button className="wallet-icon-btn">
                        <img
                          src={PagesIndex.Svg.metamaskIcon}
                          alt="Wallet"
                          className="wallet-icon"
                        />
                      </Index.Button>
                      <Index.Button className="wallet-icon-btn">
                        <img
                          src={PagesIndex.Svg.googleIcon}
                          alt="Wallet"
                          className="wallet-icon"
                        />
                      </Index.Button>
                    </Index.Box>
                    <Index.Box className="profile-user-name-flex">
                      <Index.Typography className="profile-user-name">
                        Angry Birds
                      </Index.Typography>
                      <img
                        src={PagesIndex.Svg.editRoundIcon}
                        alt="profile-edit-icon"
                        className="profile-edit-icon"
                      />
                    </Index.Box>
                    <Index.Box className="profile-wallet-id-flex">
                      <Index.Typography className="profile-wallet-id">
                        0xed9...debc
                      </Index.Typography>{" "}
                      <img
                        src={PagesIndex.Svg.copySqureIcon}
                        alt="copy"
                        className="wallet-copy-icon"
                      />
                    </Index.Box>
                    <Index.Typography className="profile-user-email-text">
                      Maxholding007@gmail.com
                    </Index.Typography>
                  </Index.Box>
                  <Index.List className="header-nav-ul">
                    <Index.ListItem className="header-nav-li">
                      <Index.Link
                        target="_blank"
                        className="header-nav-link"
                        to="https://www.bizzon.io/ranking/"
                        onClick={() => {
                          handleClickMenuItem("");
                        }}
                      >
                        Ranking
                      </Index.Link>
                    </Index.ListItem>
                    <Index.ListItem className="header-nav-li">
                      <Index.Link
                        target="_blank"
                        className="header-nav-link"
                        to="https://www.bizzon.io/staking/"
                        onClick={() => {
                          handleClickMenuItem("");
                        }}
                      >
                        Staking
                      </Index.Link>
                    </Index.ListItem>
                    <Index.ListItem className="header-nav-li">
                      <Index.Link
                        target="_blank"
                        className="header-nav-link"
                        to="https://www.bizzon.io/gamehub/"
                        onClick={() => {
                          handleClickMenuItem("");
                        }}
                      >
                        GameHub
                      </Index.Link>
                    </Index.ListItem>
                    <Index.ListItem className="header-nav-li">
                      <Index.Link
                        target="_blank"
                        className="header-nav-link"
                        to="https://www.bizzon.io/ido/"
                        onClick={() => {
                          handleClickMenuItem("");
                        }}
                      >
                        IDO
                      </Index.Link>
                    </Index.ListItem>
                    <Index.ListItem className="header-nav-li active">
                      <Index.Link
                        className="header-nav-link"
                        to="/"
                        onClick={() => {
                          handleClick();
                          handleClickMenuItem("");
                        }}
                      >
                        ICO
                      </Index.Link>
                    </Index.ListItem>
                    <Index.ListItem className="header-nav-li">
                      <Index.Link
                        target="_blank"
                        className="header-nav-link"
                        to="https://www.bizzon.io/blog/"
                        onClick={() => {
                          handleClickMenuItem("");
                        }}
                      >
                        Blog
                      </Index.Link>
                    </Index.ListItem>
                    <Index.ListItem className="header-nav-li">
                      <Index.Link
                        target="_blank"
                        className="header-nav-link"
                        to="https://www.bizzon.io/about/"
                        onClick={() => {
                          handleClickMenuItem("");
                        }}
                      >
                        About
                      </Index.Link>
                    </Index.ListItem>
                    <Index.ListItem className="header-nav-li">
                      <Index.Link
                        target="_blank"
                        to="https://www.bizzon.io/whitepaper/"
                        className="header-nav-link"
                        onClick={() => {
                          handleClickMenuItem("");
                        }}
                      >
                        Whitepaper
                      </Index.Link>
                    </Index.ListItem>
                  </Index.List>
                </Index.Box>
                <Index.Box className="white-btn-main whitepaper-btn-main">
                  <Index.Button className="white-btn whitepaper-btn">
                    Whitepaper
                  </Index.Button>
                </Index.Box>
              </Index.Box>
            </Index.Box>
            <Index.Box className="header-cust-col">
              <Index.Box className="header-right-main white-btn-main border-btn-main">
                <Index.Box className="header-social-main">
                  <Index.List className="header-social-ul">
                    <Index.ListItem className="header-social-li">
                      <Index.Link
                        className="header-social-link"
                        to="https://t.me/BIZZONGames"
                        target="_blank"
                      >
                        <img
                          src={PagesIndex.Svg.telegram}
                          className="header-social-icon"
                          alt="twitter"
                        />
                      </Index.Link>
                    </Index.ListItem>
                    <Index.ListItem className="header-social-li">
                      <Index.Link
                        className="header-social-link"
                        to="https://x.com/bizzongames"
                        target="_blank"
                      >
                        <img
                          src={PagesIndex.Svg.twitter}
                          className="header-social-icon"
                          alt="discord"
                        />
                      </Index.Link>
                    </Index.ListItem>
                  </Index.List>
                </Index.Box>
                <Index.Box className="header-btn-main">
                  <Index.Box className="header-btn-flex">
                    <Index.Button className="border-btn send-request-btn">
                      Send request
                    </Index.Button>
                    <Index.Box
                      className="ton-connect-main"
                      onClick={() => (initialRender.current = true)}
                    >
                      <TonConnectButton />
                    </Index.Box>
                    {wallet && (
                      <Index.Button
                        className="user-drop-header-btn"
                        onClick={() => navigate("/myaccount")}
                      >
                        <img
                          src={PagesIndex.Png.profileImg}
                          className="user-header-profile-icon"
                          alt="dashboard bell icon"
                        ></img>
                      </Index.Button>
                    )}
                  </Index.Box>
                </Index.Box>
                {/* <Index.Button className="white-btn" onClick={open}>`
                  Log in
                </Index.Button> */}
                {/* <Index.Button className="white-btn">Log in</Index.Button> */}
                {/* {wallet && (
                  <Index.Button
                    className="user-drop-header-btn"
                    onClick={() => {
                      const profile =
                        document.getElementById("user-layout-main");
                      profile?.classList.add("active");
                    }}
                  >
                    <img
                      src={PagesIndex.Svg.avtarImg}
                      className="user-header-profile-icon"
                      alt="dashboard bell icon"
                    ></img>
                  </Index.Button>
                )} */}
                <Index.Button className="mobile-menu-btn" onClick={handleClick}>
                  <img
                    src={PagesIndex.Svg.mobilemenuIcon}
                    className="mobile-menu-icon"
                  />
                </Index.Button>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
