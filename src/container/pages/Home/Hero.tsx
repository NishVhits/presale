import Index from "../../Index";
import PagesIndex from "../../PagesIndex";

export default function Hero() {
  return (
    <>
      <Index.Box className="hero-section">
        <video muted autoPlay loop id="1111" className="hero-video">
          <source src={PagesIndex.Video.herobg} type="video/mp4" />
        </video>
        <video
          muted
          autoPlay
          loop
          id="1111"
          className="hero-video mobile-hero-video"
        >
          <source src={PagesIndex.Video.mobileherobg} type="video/mp4" />
        </video>
        <Index.Box className="container">
          <Index.Box className="hero-contnet-main">
            <Index.Typography className="hero-title">
              Station of your <br />
              rewards
            </Index.Typography>
            <Index.Typography className="hero-para">
              A joint platform for cryptogaming: Play, Earn, Invest, Develop
            </Index.Typography>
            <Index.Box className="hero-btn-flex white-btn-main border-btn-main">
              <Index.Button className="hero-btn hero-fill-btn white-btn">
                Get Started
              </Index.Button>
              <Index.Button className="hero-btn hero-border-btn border-btn">
                Ambassador Program
              </Index.Button>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
