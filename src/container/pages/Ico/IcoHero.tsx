import Index from "../../Index";
import PagesIndex from "../../PagesIndex";

export default function IcoHero() {
  return (
    <>
      <Index.Box className="ico-hero-section">
        <Index.Box className="ico-hero-card">
          <Index.Box className="ico-hero-left-card">
            <Index.Typography className="ico-hero-title">
              Become part of a new era in the gaming economy!
            </Index.Typography>
            <Index.Typography className="ico-hero-para">
              BizzonGames is a first-of-its-kind multifunctional Web3 platform
              with AI elements, designed to maximize rewards for gamers,
              developers, and investors
            </Index.Typography>
            <Index.Box className="ico-list-main">
              <Index.Box className="ico-list-line-flex">
                <Index.Box className="ico-list-line-box"></Index.Box>
                <Index.Box className="ico-list-box">
                  <Index.Typography className="ico-list-text">
                    High-quality game scoring
                  </Index.Typography>
                </Index.Box>
              </Index.Box>
              <Index.Box className="ico-list-line-flex">
                <Index.Box className="ico-list-line-box"></Index.Box>
                <Index.Box className="ico-list-box">
                  <Index.Typography className="ico-list-text">
                    Exclusive growth opportunities
                  </Index.Typography>
                </Index.Box>
              </Index.Box>
              <Index.Box className="ico-list-line-flex">
                <Index.Box className="ico-list-line-box"></Index.Box>
                <Index.Box className="ico-list-box">
                  <Index.Typography className="ico-list-text">
                    Invest in the future of gaming
                  </Index.Typography>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
          <Index.Box className="ico-hero-right-card">
            <PagesIndex.BuyPresale />
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
