import Index from "../../Index";
import PagesIndex from "../../PagesIndex";

export default function Whitepaper() {
  return (
    <>
      <Index.Box className="whitepaper-section" id="whitepaper">
        <Index.Box className="page-title-main">
          <Index.Typography className="whitepaper-title page-title">
            Whitepaper
          </Index.Typography>
        </Index.Box>
        <Index.Box className="whitepaper-content-box page-sub-title-box">
          <Index.Typography className="page-sub-title">
            Introduction
          </Index.Typography>
          <Index.Typography className="whitepaper-para">
            Today’s gaming sector based on tokenized games is reaching greater
            heights of popularity. In the face of such hype, players have to
            spend their time playing primitive “tap”-games in pursuit of in-game
            rewards. Our project solves the problem of monotony of game offers
            by creating an opportunity to choose which games our users want to
            earn in. The rewards are not limited but mostly presented as in-game
            tokens. The team of our developers offers to our users an
            opportunity to dive into more intelligent and non-monotonous games
            with the fairest rewards for participation and achievements.
          </Index.Typography>
          <Index.Typography className="whitepaper-para">
            In addition, our platform aims to provide as much gaming content as
            possible to suit all the different tastes, which translates into
            attracting more games from third-party developers.
          </Index.Typography>
        </Index.Box>

        <Index.Box className="whitepaper-content-box page-sub-title-box">
          <Index.Typography className="page-sub-title">
            Project Features
          </Index.Typography>
          <Index.Box className="whitepaper-features-box">
            <Index.Typography className="whitepaper-features-title">
              <span>1.</span> Platform’s Own Game Development
            </Index.Typography>
            <Index.Typography className="whitepaper-features-para">
              Our experienced team creates fascinating play-to-reward games.
              Experts in product economy and mechanics ensure our games have the
              most appropriate and profitable gaming processes.
            </Index.Typography>
          </Index.Box>
          <Index.Box className="whitepaper-features-box">
            <Index.Typography className="whitepaper-features-title">
              <span>2.</span> Listing of a Third-Party Game Products
            </Index.Typography>
            <Index.Typography className="whitepaper-features-para">
              Our Platform aims to attract outside developers to list their
              games with us, ensuring a diversity of games and the best rewards
              for our users.
            </Index.Typography>
          </Index.Box>
          <Index.Box className="whitepaper-features-box">
            <Index.Typography className="whitepaper-features-title">
              <span>3.</span> Aggregator Facilities
            </Index.Typography>
            <Index.Typography className="whitepaper-features-para">
              BizzonGames acts as an aggregating platform, gathering and
              reflecting all the appropriate statistics on the game products
              listed with us.
            </Index.Typography>
          </Index.Box>

          <Index.Box className="whitepaper-features-box">
            <Index.Typography className="whitepaper-features-title">
              <span>4.</span> Marketing Activities
            </Index.Typography>
            <Index.Typography className="whitepaper-features-para">
              One of the core functions of our Platform is to help newborn
              projects connect with their target audience by promoting them.
              Various referral and partnership programs are available for our
              potential partners. IDO/ICO/Funding rounds assistance is available
              in specified Platform sections.
            </Index.Typography>
          </Index.Box>
        </Index.Box>

        <Index.Box className="white-paper-btn-flex white-btn-main">
          <Index.Link
            className="whitepaper-btn white-btn"
            to="https://www.bizzon.io/whitepaper/"
            target="_blank"
          >
            View full version{" "}
            <img
              src={PagesIndex.Svg.blackRightArrow}
              alt="Arrow"
              className="whitepaper-btn-arrow"
            />
          </Index.Link>
        </Index.Box>
      </Index.Box>
    </>
  );
}
