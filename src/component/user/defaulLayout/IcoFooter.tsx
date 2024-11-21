import Index from "../../../container/Index";
import PagesIndex from "../../../container/PagesIndex";

export default function IcoFooter() {
  return (
    <>
      <Index.Box className="ico-footer-main">
        <Index.Box className="footer-container">
          <Index.Box className="ico-footer-row">
            <Index.Typography className="ico-footer-title">
              Follow us on social networks
            </Index.Typography>
            <Index.Box className="ico-footer-social-main">
              <Index.Typography className="ico-footer-social-title">
                Our socials
              </Index.Typography>
              <Index.Box className="ico-footer-social-icon">
                <img
                  src={PagesIndex.Svg.blackRightArrow}
                  alt="Arrow"
                  className="ico-footer-social-arrow"
                />
                <Index.List className="ico-footer-social-ul">
                  <Index.ListItem className="ico-footer-social-li">
                    <Index.Link
                      className="ico-footer-social-link"
                      to="https://x.com/bizzongames"
                      target="_blank"
                    >
                      <img
                        src={PagesIndex.Svg.blackTwitter}
                        className="ico-footer-social-icon"
                        alt="discord"
                      />
                    </Index.Link>
                  </Index.ListItem>
                  <Index.ListItem className="ico-footer-social-li">
                    <Index.Link
                      className="ico-footer-social-link"
                      to="https://t.me/BIZZONGames"
                      target="_blank"
                    >
                      <img
                        src={PagesIndex.Svg.blackTelegram}
                        className="ico-footer-social-icon"
                        alt="discord"
                      />
                    </Index.Link>
                  </Index.ListItem>
                </Index.List>
              </Index.Box>
            </Index.Box>
          </Index.Box>
          <Index.Box className="ico-footer-bottom">
            <Index.Box className="ico-footer-bottom-left-main">
              <Index.List className="ico-footer-nav-list">
                <Index.ListItem className="ico-footer-nav-list-item">
                  <Index.Link
                    className="ico-footer-nav-link"
                    target="_blank"
                    to="https://www.bizzon.io/ranking/"
                  >
                    Ranking
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="ico-footer-nav-list-item">
                  <Index.Link
                    className="ico-footer-nav-link"
                    target="_blank"
                    to="https://www.bizzon.io/staking/"
                  >
                    Staking
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="ico-footer-nav-list-item">
                  <Index.Link
                    className="ico-footer-nav-link"
                    target="_blank"
                    to="https://www.bizzon.io/gamehub/"
                  >
                    GameHub
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="ico-footer-nav-list-item">
                  <Index.Link
                    className="ico-footer-nav-link"
                    target="_blank"
                    to="https://www.bizzon.io/ido/"
                  >
                    IDO
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="ico-footer-nav-list-item active">
                  <Index.Link className="ico-footer-nav-link" to="/">
                    ICO
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="ico-footer-nav-list-item">
                  <Index.Link
                    className="ico-footer-nav-link"
                    target="_blank"
                    to="https://www.bizzon.io/blog/"
                  >
                    Blog
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="ico-footer-nav-list-item">
                  <Index.Link
                    className="ico-footer-nav-link"
                    target="_blank"
                    to="https://www.bizzon.io/about/"
                  >
                    About
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="ico-footer-nav-list-item">
                  <Index.Link className="ico-footer-nav-link" to="/">
                    Whitepaper
                  </Index.Link>
                </Index.ListItem>
              </Index.List>
            </Index.Box>
            <Index.Box className="ico-footer-bottom-right-main">
              <Index.List className="ico-footer-terms-list">
                <Index.ListItem className="ico-footer-terms-list-item">
                  <Index.Link
                    className="ico-footer-terms-link"
                    target="_blank"
                    to="https://www.bizzon.io/terms/"
                  >
                    Terms of use
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="ico-footer-terms-list-item">
                  <Index.Link className="ico-footer-terms-link" to="/">
                    User Agreement
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="ico-footer-terms-list-item">
                  <Index.Link
                    className="ico-footer-terms-link"
                    target="_blank"
                    to="https://www.bizzon.io/privacy/"
                  >
                    Privacy policy
                  </Index.Link>
                </Index.ListItem>
              </Index.List>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
