import Index from "../../Index";
import PagesIndex from "../../PagesIndex";

export default function Mission() {
  return (
    <>
      <Index.Box className="mission-section">
        <Index.Box className="container">
          <Index.Box className="page-title-main">
            <Index.Typography className="games-title page-title">
              Our misson
            </Index.Typography>
          </Index.Box>
          <Index.Box className="grid-main">
            <Index.Box
              display="grid"
              className="mission-row"
              gridTemplateColumns="repeat(12, 1fr)"
              gap={{ xs: 2, sm: 2, md: 2, lg: 2 }}
            >
              <Index.Box
                gridColumn={{
                  xs: "span 12",
                  sm: "span 6",
                  md: "span 6",
                  lg: "span 6"
                }}
                className="grid-column"
              >
                <Index.Box className="mission-contnt-box">
                  <Index.Typography className="mission-title">
                    Our mision is to advance blockchain technology and empower
                    users by offering a curated selection of games that align
                    with their individual preferences
                  </Index.Typography>
                  <Index.Typography className="mission-para">
                    Our platform features some of the most engaging games,
                    designed with innovative and fair reward systems. We aim to
                    make BizzonGames not only a leading platform within the
                    crypto community but also an accessible gateway for a
                    broader audience, including those new to cryptocurrency.
                  </Index.Typography>
                  <Index.Typography className="mission-para">
                    By introducing them to the fastest-growing industry of our
                    time, we seek to educate users on blockchain solutions
                    through the most popular and user-friendly application —{" "}
                    <span className="mission-by-name">gamification</span>
                  </Index.Typography>
                </Index.Box>
              </Index.Box>
              <Index.Box
                gridColumn={{
                  xs: "span 12",
                  sm: "span 6",
                  md: "span 6",
                  lg: "span 6"
                }}
                className="grid-column"
              >
                <Index.Box className="mission-img-box">
                  <img
                    src={PagesIndex.Png.missionImg}
                    alt="mission-img"
                    className="mission-img"
                  />
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
