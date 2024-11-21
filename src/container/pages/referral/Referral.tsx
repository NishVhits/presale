import { useState } from "react";
import Index from "../../Index";
import PagesIndex from "../../PagesIndex";
// import { UserDetails } from "./referralInterface";
import { useCounterContract } from "../../../hooks/useCounterContract";
import { useTonAddress } from "@tonconnect/ui-react";
import { useSelector } from "react-redux";
export default function Referral() {
  const userFriendlyAddress = useTonAddress();
  const { ClaimReferralTokens } = useCounterContract();
  const [message, setMessage] = useState("Copy");
  const { referralData } = useSelector((state: any) => state.AdminReducer);

  // const { userDetails } = PagesIndex.useSelector(
  //   (state: any) => state.AdminReducer
  // );
  // const [data, setData] = useState([]);
  // const handleGetData = () => {
  //   PagesIndex.apiGetHandler(PagesIndex.Api.GET_REFERRAL_HISTORY).then(
  //     (res) => {
  //       if (res.status === 200) {
  //         setData(res.data);
  //       } else {
  //         PagesIndex.toasterError(res?.message);
  //       }
  //     }
  //   );
  // };
  // useEffect(() => {
  //   handleGetData();
  // }, []);

  return (
    <>
      <Index.Box className="page-content-main">
        <Index.Box className="inner-page-title-main page-title-flex">
          <Index.Typography className="inner-page-title">
            Referral
          </Index.Typography>
          <Index.Box className="wallet-copy-main">
            <Index.Typography className="wallet-copy-text">
              {import.meta.env.VITE_REFERRAL_URL +
                "/" +
                PagesIndex.shortenString(userFriendlyAddress)}
            </Index.Typography>
            <Index.Box
              className="wallet-copy-btn-main"
              onMouseLeave={() => {
                setTimeout(() => {
                  setMessage("Copy");
                }, 200);
              }}
              onClick={() => {
                setMessage("Copied ✓");
                navigator.clipboard.writeText(
                  import.meta.env.VITE_REFERRAL_URL + "/" + userFriendlyAddress
                );
              }}
            >
              <Index.Tooltip
                title={message}
                arrow
                placement="bottom"
                className="admin-tooltip"
              >
                <Index.Button className="wallet-copy-btn">
                  <img
                    src={PagesIndex.Svg.copySqureIcon}
                    className="wallet-copy-icon"
                    alt="Copy"
                  />
                </Index.Button>
              </Index.Tooltip>
            </Index.Box>
          </Index.Box>
        </Index.Box>

        <Index.Box className="inner-page-table-main refferral-table">
          <Index.TableContainer
            component={Index.Paper}
            className="inner-table-container"
          >
            <Index.Table aria-label="simple table" className="inner-table">
              <Index.TableHead className="inner-table-head">
                <Index.TableRow className="inner-table-row">
                  <Index.TableCell
                    component="th"
                    variant="head"
                    className="inner-table-th"
                    width="10%"
                  >
                    Wallet Address
                  </Index.TableCell>
                  <Index.TableCell
                    component="th"
                    variant="head"
                    className="inner-table-th"
                    width="10%"
                  >
                    Token
                  </Index.TableCell>
                  <Index.TableCell
                    component="th"
                    variant="head"
                    className="inner-table-th"
                    width="10%"
                  >
                    Date & Time
                  </Index.TableCell>
                  <Index.TableCell
                    component="th"
                    variant="head"
                    className="inner-table-th"
                    width="10%"
                  >
                    Action
                  </Index.TableCell>
                </Index.TableRow>
              </Index.TableHead>
              <Index.TableBody className="table-body">
                {Array.isArray(referralData) && referralData?.length > 0 ? (
                  referralData?.map((ele: any) => {
                    return (
                      <Index.TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <Index.TableCell
                          component="td"
                          variant="body"
                          className="inner-table-td"
                          onMouseLeave={() => {
                            setTimeout(() => {
                              setMessage("Copy");
                            }, 200);
                          }}
                        >
                          <Index.Box className="table-copy-flex">
                            {PagesIndex.shortenString(
                              ele?.refferalAddress.toString()
                            )}
                            <Index.Tooltip
                              title={message}
                              arrow
                              placement="bottom"
                              className="admin-tooltip"
                            >
                              <Index.Button
                                className="table-copy-btn"
                                onClick={() => {
                                  setMessage("Copied ✓");
                                  navigator.clipboard.writeText(
                                    ele?.refferalAddress.toString()
                                  );
                                }}
                              >
                                <img
                                  src={PagesIndex.Svg.copySqureIcon}
                                  className="hero-copy-icon"
                                  alt="Copy"
                                />
                              </Index.Button>
                            </Index.Tooltip>
                          </Index.Box>
                        </Index.TableCell>

                        <Index.TableCell
                          component="td"
                          variant="body"
                          className="inner-table-td"
                        >
                          {ele?.amount.toString()}
                        </Index.TableCell>
                        <Index.TableCell
                          component="td"
                          variant="body"
                          className="inner-table-td"
                        >
                          {/* {PagesIndex.moment(ele?.createdAt).format(
                            "DD-MM-YYYY HH:mm:ss"
                          )} */}
                          0
                        </Index.TableCell>
                        <Index.TableCell
                          component="td"
                          variant="body"
                          className="inner-table-td"
                        >
                          {ele?.claim === false ? (
                            <Index.Button
                              className="view-content-btn"
                              variant="outlined"
                              onClick={() => {
                                ClaimReferralTokens();
                              }}
                            >
                              CLAIM
                            </Index.Button>
                          ) : ele?.claim === true ? (
                            <span style={{ color: "green" }}>Claimed</span>
                          ) : (
                            <></>
                          )}
                        </Index.TableCell>
                      </Index.TableRow>
                    );
                  })
                ) : (
                  <PagesIndex.DataNotFound />
                )}
              </Index.TableBody>
            </Index.Table>
          </Index.TableContainer>
        </Index.Box>
      </Index.Box>
    </>
  );
}
