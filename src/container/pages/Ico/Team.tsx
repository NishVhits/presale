import { useEffect, useState } from "react";
import Index from "../../Index";
import PagesIndex from "../../PagesIndex";
import { TeamInterface } from "./IcoInterface";

export default function Team() {
  const [data, setData] = useState<TeamInterface[]>([]);
  const handleGetData = () => {
    PagesIndex.apiGetHandlerAdmin(PagesIndex.Api.GET_TEAM).then((res) => {
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
      <Index.Box className="team-section" id="team">
        <Index.Box className="page-title-main">
          <Index.Typography className="team-title page-title">
            Team
          </Index.Typography>
        </Index.Box>
        <Index.Box className="team-flex">
          {data?.map((data) => {
            return (
              <Index.Box className="team-card">
                <Index.Box className="team-card-img-box">
                  <img
                    src={import.meta.env.VITE_BASE_URL_IMAGE + data?.image}
                    alt="team"
                    className="team-card-img"
                  />
                </Index.Box>
                <Index.Box className="team-card-name">
                  <Index.Typography className="team-card-title">
                    {data?.name}
                  </Index.Typography>
                  <Index.Typography className="team-card-para">
                    {data?.position}
                  </Index.Typography>
                </Index.Box>
              </Index.Box>
            );
          })}
        </Index.Box>
      </Index.Box>
    </>
  );
}
