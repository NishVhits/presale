import Index from "../../Index";
import PagesIndex from "../../PagesIndex";

export default function Tokenomics() {
  return (
    <>
      <Index.Box className="tokenomics-section" id="tokenomics">
        <Index.Box sx={{ width: 1 }} className="grid-main">
          <Index.Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gap={{ xs: 2, sm: 2, md: 2, lg: 2 }}
          >
            <Index.Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 12",
                lg: "span 7"
              }}
              className="grid-column"
            >
              <Index.Box className="tokenomics-content-box">
                <Index.Typography className="tokenomics-title">
                  Tokenomic
                </Index.Typography>
                <Index.Typography className="tokenomics-para">
                  The native token for BizzonGames is named «BZZN». This token
                  serves as the primary medium of exchange within the platform
                  for utility purposes, enabling transactions, rewards, and
                  other activities
                </Index.Typography>
                <Index.Box className="tokenomics-main-box">
                  <Index.Box className="tokenomics-box">
                    <Index.Typography className="tokenomics-box-sub-heading">
                      Token Name
                    </Index.Typography>
                    <Index.Typography className="tokenomics-box-heading">
                      Bzzn
                    </Index.Typography>
                  </Index.Box>
                  <Index.Box className="tokenomics-box">
                    <Index.Typography className="tokenomics-box-sub-heading">
                      Total Supply
                    </Index.Typography>
                    <Index.Typography className="tokenomics-box-heading">
                      88,950,000 BZZN
                    </Index.Typography>
                  </Index.Box>
                </Index.Box>
                <Index.Box className="token-main">
                  <Index.Typography className="token-heading">
                    Token Distribution
                  </Index.Typography>
                  <ul className="token-list">
                    <li className="token-list-item">
                      Seed Round Financing – 3%
                    </li>
                    <li className="token-list-item">
                      Private Sale Round Financing – 11%
                    </li>
                    <li className="token-list-item">Public Sale – 3%</li>
                    <li className="token-list-item">
                      Ecosystem and Community – 15%
                    </li>
                    <li className="token-list-item">Team tokens – 21%</li>
                    <li className="token-list-item">
                      Advisors and consultancy – 3%
                    </li>
                    <li className="token-list-item">Staking Rewards – 6%</li>
                    <li className="token-list-item">
                      Cross-Economy System – 10%
                    </li>
                    <li className="token-list-item">Liquidity – 10%</li>
                    <li className="token-list-item">Marketing – 5%</li>
                    <li className="token-list-item">Treasury Reserves – 13%</li>
                  </ul>
                </Index.Box>
              </Index.Box>
            </Index.Box>
            <Index.Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 12",
                lg: "span 5"
              }}
              className="grid-column"
            >
              <Index.Box className="token-img-box">
                <img
                  src={PagesIndex.Png.tokenImg}
                  alt="tokenomics"
                  className="token-img"
                />
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
