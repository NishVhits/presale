import Index from "../../Index";
export default function features() {
  return (
    <>
      <Index.Box className="features-section">
        <Index.Box className="container">
          <Index.Box className="page-title-main">
            <Index.Typography className="games-title page-title">
              Our features
            </Index.Typography>
          </Index.Box>
          <Index.Box className="feature-row">
            <Index.Box className="feature-card">
              <Index.Box className="feature-contnt-box">
                <Index.Typography className="feature-title">
                  Detailed analytics of each project
                </Index.Typography>
                <Index.Typography className="feature-para">
                  We offer comprehensive analyses of each project featured on
                  our platform, enabling our users to enjoy the gaming
                  experience while maximizing their rewards and potential
                  profits
                </Index.Typography>
              </Index.Box>
            </Index.Box>

            <Index.Box className="feature-card">
              <Index.Box className="feature-contnt-box">
                <Index.Typography className="feature-title">
                  In-house skilled development team
                </Index.Typography>
                <Index.Typography className="feature-para">
                  We have our own games creating team – passionate professionals
                  with more than 15 years of games dev experience
                </Index.Typography>
              </Index.Box>
            </Index.Box>

            <Index.Box className="feature-card">
              <Index.Box className="feature-contnt-box">
                <Index.Typography className="feature-title">
                  Fair in-game economy
                </Index.Typography>
                <Index.Typography className="feature-para">
                  We prioritize the fairness of in-game reward distribution,
                  ensuring that Bizzon users receive equitable rewards for the
                  time they invest in playing exciting games
                </Index.Typography>
              </Index.Box>
            </Index.Box>

            <Index.Box className="feature-card">
              <Index.Box className="feature-contnt-box">
                <Index.Typography className="feature-title">
                  Producing centre
                </Index.Typography>
                <Index.Typography className="feature-para">
                  We are actively seeking partnerships with emerging and
                  promising game projects to offer them the most effective
                  promotion tools available
                </Index.Typography>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
