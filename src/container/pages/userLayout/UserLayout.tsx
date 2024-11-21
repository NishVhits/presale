import { Outlet } from "react-router-dom";
import Index from "../../Index";
import PagesIndex from "../../PagesIndex";

export default function UserLayout() {
  return (
    <>
      <Index.Box className="user-layout page-wrapper page-main">
        <Index.Box className="container">
          {/* <Index.Box className="kyc-headline-box">
            <Index.Typography className="kyc-headline-text">
              Please upload document for KYC verification{" "}
              <span>
                <Index.Link to={"/"} className="kyc-headline-link">
                  Here
                </Index.Link>
              </span>
            </Index.Typography>
          </Index.Box> */}

          {/* {wallet && ( */}
          <Index.Box
            className="user-mobile-btn-sidebar-box"
            onClick={() => {
              const profile = document.getElementById("user-layout-main");
              profile?.classList.add("active");
            }}
          >
            <Index.Box className="user-mobile-name-flex">
              <Index.Typography className="mobile-wallet-copy-text">
                0QCJ1YhKLP2IdenCDYgJGfeO41xNcfayyPLCJ1lSazhSQ772
              </Index.Typography>
              <Index.Box className="user-mobile-down-arrow-flex">
                <Index.Button className="user-mobile-sidebar-btn">
                  <img
                    src={PagesIndex.Svg.avtarImg}
                    className="user-header-profile-icon"
                    alt="dashboard bell icon"
                  ></img>
                </Index.Button>
                <Index.Box className="user-mobile-down-arrow-box">
                  <img
                    src={PagesIndex.Svg.fillDownArrowIcon}
                    alt="down arrow"
                    className="user-mobile-down-arrow"
                  />
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
          {/* )} */}
          <Index.Box className="user-layout-main" id="user-layout-main">
            <Index.Box className="user-layout-left">
              <PagesIndex.UserSidebar />
            </Index.Box>
            <Index.Box className="user-layout-right">
              <Index.Box className="user-layout-inner-main">
                <Outlet />
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
