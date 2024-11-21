import Index from "../../Index";
import PagesIndex from "../../PagesIndex";

export default function Games() {
  return (
    <>
      <Index.Box className="games-section">
        <Index.Box className="container">
          <Index.Box className="page-title-main">
            <Index.Typography className="games-title page-title">
              Our games
            </Index.Typography>
          </Index.Box>
          <Index.Box className="games-card-row">
            <Index.Box className="games-card">
              <Index.Box className="games-card-img">
                <img
                  src={PagesIndex.Png.game1}
                  className="games-card-img"
                  alt="games"
                />
              </Index.Box>
            </Index.Box>
            <Index.Box className="games-card">
              <Index.Box className="games-card-img-box">
                <img
                  src={PagesIndex.Png.game2}
                  className="games-card-img"
                  alt="games"
                />
              </Index.Box>
            </Index.Box>
            <Index.Box className="games-card">
              <Index.Box className="games-card-img-box">
                <img
                  src={PagesIndex.Png.game3}
                  className="games-card-img"
                  alt="games"
                />
              </Index.Box>
            </Index.Box>

            {/* <Index.Box className="games-card">
              <Index.Box className="games-card-img-box games-blur-box">
                <img
                  src={PagesIndex.Png.game2}
                  className="games-card-img"
                  alt="games"
                />
              </Index.Box>
              <Index.Box className="game-bg-blure-box">
                <Index.Typography className="games-card-title">
                  Coming soon
                </Index.Typography>
              </Index.Box>
            </Index.Box> */}
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
