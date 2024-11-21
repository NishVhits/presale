import { useEffect, useState } from "react";
import Index from "../../Index";
import PagesIndex from "../../PagesIndex";

interface Roadmap {
  title: string;
  year: string;
  content: string;
}

export default function Roadmap() {
  const [sliderRoadmap, _] = useState({
    slider: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1024: {
        items: 1
      },
      1200: {
        items: 1.5
      },
      1920: {
        items: 1.5
      }
    }
  });
  const [data, setData] = useState<Roadmap[]>([]);
  const handleGetData = () => {
    PagesIndex.apiGetHandlerAdmin(PagesIndex.Api.GET_ROADMAP).then((res) => {
      if (res.status === 200) {
        setData(res.data);
      } else {
        PagesIndex.toasterError(res?.message);
      }
    });
  };

  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <>
      <Index.Box className="roadmap-section" id="roadmap">
        <Index.Box className="container">
          <Index.Box className="page-title-main">
            <Index.Typography className="roadmap-title page-title">
              RoadMap
            </Index.Typography>
          </Index.Box>
        </Index.Box>
        <Index.Box className="roadmap-card-row">
          {/* <Index.Box className="roadmap-line"></Index.Box> */}
          <Index.Box className="roadmap-slider-main">
            <Index.OwlCarousel
              className="owl-theme owl-carousal-roadmap"
              margin={0}
              responsive={sliderRoadmap.slider}
              loop={false}
              nav={true}
              center={true}
              dots={false}
              autoplay={true}
              autoplayTimeout={3000}
              smartSpeed={2000}
              stagePadding={200}
              navText={[
                "<img src=" + PagesIndex.Svg.whitePrevArrow + " >",
                "<img src=" + PagesIndex.Svg.whiteNextArrow + " >"
              ]}
            >
              {data?.length &&
                data?.map((value) => {
                  return (
                    <div className="item">
                      <Index.Box className="roadmap-card">
                        <Index.Box>
                          <Index.Typography className="roadmap-card-title">
                            {value?.title}
                          </Index.Typography>
                          <Index.Typography className="roadmap-card-year">
                            {value?.year}
                          </Index.Typography>
                        </Index.Box>
                        <Index.Box
                          className="roadmap-card-list-box"
                          dangerouslySetInnerHTML={{ __html: value?.content }}
                        ></Index.Box>
                      </Index.Box>
                    </div>
                  );
                })}
            </Index.OwlCarousel>
          </Index.Box>
          <Index.Box className="roadmap-btn-main white-btn-main">
            <Index.Button className="roadmap-btn white-btn">
              View whitepaper
            </Index.Button>
          </Index.Box>
        </Index.Box>
        <Index.Box className="mobile-roadmap-main">
          <Index.Box className="container">
            <ul className="mobile-roadmap-ul">
              {data?.length &&
                data?.map((value) => {
                  return (
                    <li className="mobile-roadmap-li">
                      <Index.Box className="mobile-roadmap-title-flex">
                        <Index.Typography className="mobile-roadmap-title">
                          {value?.title}
                        </Index.Typography>
                        <Index.Typography className="mobile-roadmap-year">
                          {value?.year}
                        </Index.Typography>
                      </Index.Box>
                      <Index.Box className="mobile-roadmap-card">
                        <ul
                          className="mobile-roadmap-content-ul"
                          dangerouslySetInnerHTML={{ __html: value?.content }}
                        ></ul>
                      </Index.Box>
                    </li>
                  );
                })}
            </ul>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
