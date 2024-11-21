import { useLocation } from "react-router-dom";
import Index from "../../Index";
import PagesIndex from "../../PagesIndex";
import { useState } from "react";

export default function UserSidebar() {
  const location = useLocation();
  const [message, setMessage] = useState("Copy");
  const { userDetails } = PagesIndex.useSelector(
    (state: any) => state.AdminReducer
  );
  
  return (
    <Index.Box className="user-sidebar-main">
      <Index.Box className="user-sidebar-close-main">
        <Index.Button
          className="sidebar-close-btn"
          onClick={() => {
            const profile = document.getElementById("user-layout-main");
            profile?.classList.remove("active");
          }}
        >
          <img
            src={PagesIndex.Svg.crossIcon}
            className="mobile-acount-close"
            alt="close"
          />
        </Index.Button>
      </Index.Box>
      <Index.Box className="profile-img-flex">
        <Index.Box className="file-upload-btn-main">
          <img
            src={PagesIndex.Png.profileImg}
            className="upload-profile-img"
            alt="upload img"
          ></img>
          {/* <Index.Button variant="contained" component="label" className='file-upload-btn'>
                                    <img src={PagesIndex.Svg.editIcon} className="upload-icon-img" alt='upload img'></img>
                                    <input hidden accept="image/*" multiple type="file" />
                              </Index.Button> */}
        </Index.Box>
      </Index.Box>
      <Index.Box className="wallet-copy-main profile-wallet-copy-main">
        <Index.Typography className="wallet-copy-text">
          {PagesIndex.shortenString(userDetails?.wallet_address)}
        </Index.Typography>
        <Index.Box
          className="wallet-copy-btn-main"
          onMouseLeave={() => {
            setTimeout(() => {
              setMessage("Copy");
            }, 1000);
          }}
        >
          <Index.Tooltip
            title={message}
            arrow
            placement="bottom"
            className="admin-tooltip"
          >
            <Index.Button
              className="wallet-copy-btn"
              onClick={() => {
                setMessage("Copied ✓");
                navigator.clipboard.writeText(userDetails?.wallet_address);
              }}
            >
              <img
                src={PagesIndex.Svg.copySqureIcon}
                className="wallet-copy-icon"
                alt="Copy"
              />
            </Index.Button>
          </Index.Tooltip>
        </Index.Box>
      </Index.Box>
      <Index.Box className="user-sidebar-inner-main">
        <Index.Box className="user-sidebar-list-main scrollbar">
          <Index.List className="user-sidebar-list">
            <Index.ListItem className="user-sidebar-listitem">
              <Index.Link
                to="/myaccount"
                className={
                  location?.pathname.includes("myaccount")
                    ? "user-sidebar-link active"
                    : "user-sidebar-link"
                }
                onClick={() => {
                  const profile = document.getElementById("user-layout-main");
                  profile?.classList.remove("active");
                }}
              >
                <img
                  src={PagesIndex.Svg.kycIcon}
                  alt="KYC Status"
                  className="user-sidebar-icons"
                />
                <span className="user-sidebar-link-text">My account</span>
              </Index.Link>
            </Index.ListItem>
            {/* <Index.ListItem className="user-sidebar-listitem">
              <Index.Link
                to="/dashboard"
                className={
                  location?.pathname.includes("/dashboard")
                    ? "user-sidebar-link active"
                    : "user-sidebar-link"
                }
              >
                <img
                  src={PagesIndex.Svg.transactionIcon}
                  alt="Transaction"
                  className="user-sidebar-icons"
                />
                <span className="user-sidebar-link-text">Dashboard</span>
              </Index.Link>
            </Index.ListItem> */}
            <Index.ListItem className="user-sidebar-listitem">
              <Index.Link
                to="/profile"
                className={
                  location?.pathname.includes("profile")
                    ? "user-sidebar-link active"
                    : "user-sidebar-link"
                }
                onClick={() => {
                  const profile = document.getElementById("user-layout-main");
                  profile?.classList.remove("active");
                }}
              >
                <img
                  src={PagesIndex.Svg.profileIcon}
                  alt="Profile"
                  className="user-sidebar-icons"
                />
                <span className="user-sidebar-link-text">My Profile</span>
              </Index.Link>
            </Index.ListItem>
            <Index.ListItem className="user-sidebar-listitem">
              <Index.Link
                to="/referral"
                className={
                  location?.pathname.includes("referral")
                    ? "user-sidebar-link active"
                    : "user-sidebar-link"
                }
                onClick={() => {
                  const profile = document.getElementById("user-layout-main");
                  profile?.classList.remove("active");
                }}
              >
                <img
                  src={PagesIndex.Svg.referralIcon}
                  alt="Referral"
                  className="user-sidebar-icons"
                />
                <span className="user-sidebar-link-text">Referral</span>
              </Index.Link>
            </Index.ListItem>

            <Index.ListItem className="user-sidebar-listitem">
              <Index.Link
                to="/kyc-status"
                className={
                  location?.pathname.includes("kyc-status")
                    ? "user-sidebar-link active"
                    : "user-sidebar-link"
                }
                onClick={() => {
                  const profile = document.getElementById("user-layout-main");
                  profile?.classList.remove("active");
                }}
              >
                <img
                  src={PagesIndex.Svg.kycIcon}
                  alt="KYC Status"
                  className="user-sidebar-icons"
                />
                <span className="user-sidebar-link-text">KYC Status</span>
              </Index.Link>
            </Index.ListItem>
          </Index.List>
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
}
