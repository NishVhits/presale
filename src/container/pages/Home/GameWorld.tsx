import { useState } from "react";
import Index from "../../Index";
import PagesIndex from "../../PagesIndex";

export default function GameWorld() {
  const [sliderGameWolds, _] = useState({
    slider: {
      0: {
        items: 1,
        margin: 5
      },
      768: {
        items: 4,
        margin: 10
      },
      1024: {
        items: 5,
        margin: 16
      },
      1200: {
        items: 6,
        margin: 16
      },
      1920: {
        items: 7
      }
    }
  });

  return (
    <>
      <Index.Box className="game-world-section">
        <Index.Box className="page-title-main">
          <Index.Typography className="games-world-title page-title">
            Game World
          </Index.Typography>
        </Index.Box>
        <Index.Box className="game-world-slider-main"></Index.Box>

        {/* <div className="marquee">
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg1}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg2}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>{" "}
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg3}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>{" "}
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg4}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>{" "}
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg5}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>{" "}
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg6}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>{" "}
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg1}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>{" "}
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg2}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>{" "}
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg3}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>{" "}
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg4}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>{" "}
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg5}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>{" "}
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg6}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
        </div> */}

        <Index.OwlCarousel
          className="owl-theme"
          margin={0}
          responsive={sliderGameWolds.slider}
          loop={true}
          nav={false}
          dots={false}
          autoplay={true}
          autoplayTimeout={2500}
          autoplaySpeed={1500}
          smartSpeed={1000}
          stagePadding={70}
          autoplayHoverPause={false}
        >
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg1}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg2}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg3}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg4}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg5}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg6}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg1}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg2}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg3}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg4}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg5}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg6}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg1}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg2}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
          <div className="item">
            <Index.Box className="game-world-card">
              <img
                src={PagesIndex.Png.gamWorldImg3}
                alt="Game"
                className="game-world-img"
              />
            </Index.Box>
          </div>
        </Index.OwlCarousel>
      </Index.Box>
    </>
  );
}
