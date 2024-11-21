import PagesIndex from "../../PagesIndex";
import Index from "../../Index";

export default function Ico() {
  return (
    <>
      <Index.Box className="page-main">
        <Index.Box className="container">
          <PagesIndex.RollingCounter />
          <Index.Box className="grid-main">
            <Index.Box
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              gap={{ xs: 2, sm: 2, md: 3, lg: 3 }}
            >
              <Index.Box
                gridColumn={{
                  xs: "span 12",
                  sm: "span 12",
                  md: "span 12",
                  lg: "span 1"
                }}
                className="grid-column"
              >
                <Index.Box className="page-left-main">
                  <PagesIndex.Sidebar />
                </Index.Box>
              </Index.Box>
              <Index.Box
                gridColumn={{
                  xs: "span 12",
                  sm: "span 12",
                  md: "span 12",
                  lg: "span 11"
                }}
                className="grid-column"
              >
                <Index.Box className="page-right-main">
                  <PagesIndex.IcoHero />
                  <PagesIndex.Participate />
                  <PagesIndex.Tokenomics />
                  <PagesIndex.IcoRoadmap />
                  <PagesIndex.Whitepaper />
                  <PagesIndex.Team />
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
          <Index.Box className="page-flex"></Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
