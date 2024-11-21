import React, { useState, useEffect } from "react";
import Index from "../../Index";
import Paper from "@mui/material/Paper";
import { useTonAddress } from "@tonconnect/ui-react";
// import { useCounterContract } from "../../../hooks/useCounterContract";
import PagesIndex from "../../PagesIndex";
import { useAsyncInitialize } from "../../../hooks/useAsyncInitialize";
import { useTonClient } from "../../../hooks/useTonClient";
import { Address, OpenedContract } from "@ton/core";
import { SamplePresale } from "../../../utils/wrepper/tact_SamplePresale";
import {
  ClaimAdvisorTokens,
  ClaimMarketingeTokens,
  claimPrivateSaleTokens,
  claimSingleTokens,
  ClaimTeamTokens,
  ClaimTreasuryTokens,
} from "../../../utils/writeContractFunction";
import { useTonConnect } from "../../../hooks/useTonConnect";
import { SampleJetton } from "../../../utils/wrepper/tact_SampleJetton";
// import { useTon } from "../../../hooks/TonContractContext";
// import { useSelector } from "react-redux";

export default function MyAcount() {
  // const { tonBalance, claimTokens } = useTon();
  // console.log("tonBalance", tonBalance)
  const userFriendlyAddress = useTonAddress();
  const client = useTonClient();
  const { sender } = useTonConnect();

  // const dispatch = PagesIndex.useDispatch();
  // const { userTokensData } = useSelector((state: any) => state.AdminReducer);
  // console.log(userTokensData,"userTokensData133");

  // const {
  //   // userSeedTokenData,
  //   claimSingleTokens,
  //   claimPrivateSaleTokens,
  //   ClaimMarketingeTokens,
  //   ClaimTeamTokens,
  //   ClaimAdvisorTokens,
  //   ClaimTreasuryTokens,
  // } = useCounterContract();

  const [totalLockedToken, setTotalLockedToken] = useState(0);
  const [totalUnLockedToken, setTotalUnLockedToken] = useState(0);
  const [totalAvailableToken, setTotalAvailableToken] = useState(0);
  const [userTokensData, setUserTokensData] = useState([]);
  // const [openView, setOpenView] = React.useState(false);
  // const [selectedItemData, setSelectedItemData] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  // const [showLoader, setShowLoader] = React.useState(false);
  // const [page, setPage] = React.useState(1);
  // const [perPage, setPerPage] = React.useState(6);
  const [pageForUser, setPageForUser] = React.useState(1);
  const [perPageForUser, setPerPageForUser] = React.useState(10);
  const [indexNo, setIndexNo] = React.useState(null);
  // const [userIndexNo, setUserIndexNo] = React.useState(null);

  console.log(setIsLoading, setIndexNo, setPerPageForUser);
  // const handleOpenView = (data: any, index: any) => {
  //   setOpenView(true);
  //   setSelectedItemData(data);
  //   setCurrentIndex(index);
  // };

  // const handleCloseView = () => setOpenView(false);
  const getTime = (time: any) => {
    const timestamp = time;
    const date = new Date(timestamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const formattedDate = `${month} ${day}, ${year} at ${hours}:${minutes}`;
    return formattedDate;
  };

  const counterContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = SamplePresale.fromAddress(
      Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL")
    );
    return client.open(contract) as OpenedContract<SamplePresale>;
  }, [client]);

  const jettonContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = SampleJetton.fromAddress(
      Address.parse("kQDJzhivSoepw8GTVJDxDsa05rl6ZszRUSQF3aBgRWd8osNJ")
    );
    return client.open(contract) as OpenedContract<SampleJetton>;
  }, [client]);

  const allReadData = async () => {
    console.log("in allReadData function");
    try {
      if (!counterContract) return;
      const [
        SeedTokenData,
        PrivateTokenData,
        MarketingTokenData,
        TeamTokenData,
        AdvisorTokenData,
        TreasuryTokenData,
        // ReferralData,
        // tokonomicsData,
      ] = await Promise.all([
        counterContract.getGetAllSeedTokenData(
          Address.parse(userFriendlyAddress)
        ),
        counterContract.getGetAllPrivateTokenData(
          Address.parse(userFriendlyAddress)
        ),
        counterContract.getGetAllMarketingTokenData(
          Address.parse(userFriendlyAddress)
        ),
        counterContract.getGetAllTeamTokenData(
          Address.parse(userFriendlyAddress)
        ),
        counterContract.getGetAllAdvisorTokenData(
          Address.parse(userFriendlyAddress)
        ),
        counterContract.getGetAllTreasuryTokenData(
          Address.parse(userFriendlyAddress)
        ),
        // counterContract.getGetAllReferralDetails(
        //   Address.parse(userFriendlyAddress)
        // ),
        // counterContract.getGetTokonomicsData(),
      ]);
      console.log(SeedTokenData, "balance123");

      const formattedData = [
        ...SeedTokenData.values().map((item, index) => ({ ...item, index })),
        ...PrivateTokenData.values().map((item, index) => ({
          ...item,
          index,
        })),
        ...MarketingTokenData.values().map((item, index) => ({
          ...item,
          index,
        })),
        ...TeamTokenData.values().map((item, index) => ({ ...item, index })),
        ...AdvisorTokenData.values().map((item, index) => ({
          ...item,
          index,
        })),
        ...TreasuryTokenData.values().map((item, index) => ({
          ...item,
          index,
        })),
      ];

      const currentTimestamp = Math.floor(Date.now() / 1000);
      let totalBZZN = 0;
      let lockBZZN = 0;
      let availableBZZN = 0;
      const userData: any = [];

      const countTokenDetails = (element: any) => {
        let percentage = 0;
        if (element.phaseName === "Seed Round Financing") {
          percentage = 18;
        } else if (element.phaseName === "Private Sale Round Financing") {
          percentage = 22;
        } else if (element.phaseName === "Marketing") {
          percentage = 18;
        } else if (element.phaseName === "Team tokens") {
          percentage = 36;
        } else if (element.phaseName === "Advisors and consultancy") {
          percentage = 24;
        } else if (element.phaseName === "Treasury Reserves") {
          percentage = 24;
        } else {
          // console.log("error");
        }
        const BZZNToken = Number(element.totalToken) / 10 ** 9;
        const remainingToken = Number(element.remainingToken) / 10 ** 9;
        totalBZZN += Number(BZZNToken);
        lockBZZN += Number(remainingToken);
        let availableToken = 0;

        const vestingDuration = Number(element.vestingDuration);
        const lastClaimTime = Number(element.lastClaimTime);
        const releaseInterval = Number(element.releaseInterval);

        if (currentTimestamp > vestingDuration) {
          const availableTime = Math.floor(
            (vestingDuration - lastClaimTime) / releaseInterval
          );
          availableToken = (availableTime * BZZNToken) / percentage;
          availableBZZN += availableToken;
        } else {
          const availableTime = Math.floor(
            (currentTimestamp - lastClaimTime) / releaseInterval
          );

          if (availableTime > 0) {
            availableToken = (availableTime * BZZNToken) / percentage;
            availableBZZN += availableToken;
          }
        }

        return { BZZNToken, remainingToken, availableToken };
      };

      Array.isArray(formattedData) &&
        formattedData?.forEach((element: any) => {
          const { BZZNToken, remainingToken, availableToken } =
            countTokenDetails(element);
          userData.push({
            USDTToken: Number(element.USDTToken) / 10 ** 9,
            BZZNToken: BZZNToken,
            remainingToken: remainingToken,
            availableToken: availableToken,
            startTime: Number(element.startTime),
            vestingDuration: Number(element.vestingDuration),
            lastClaimTime: Number(element.lastClaimTime),
            releaseInterval: Number(element.releaseInterval),
            phaseName: element.phaseName,
            active: element.active,
            claimTokenTime: getTime(
              Number(element.lastClaimTime) + Number(element.releaseInterval)
            ),
            index: element.index,
          });
        });
      setTotalUnLockedToken(totalBZZN - lockBZZN);
      setTotalLockedToken(lockBZZN);
      console.log(userData, "userData999");
      // dispatch(PagesIndex.setUserTokensData(userData));
      setUserTokensData(userData);
      setTotalAvailableToken(availableBZZN);
    } catch (error) {
      // console.log("Error:", error);
    }
  };

  const claimTokens = async (index: any, phaseName: any) => {
    if (phaseName === "Seed Round Financing") {
      await claimSingleTokens(index, counterContract, jettonContract, sender, userFriendlyAddress);
    } else if (phaseName === "Private Sale Round Financing") {
      await claimPrivateSaleTokens(index, counterContract, jettonContract, sender, userFriendlyAddress);
    } else if (phaseName === "Marketing") {
      await ClaimMarketingeTokens(index, counterContract, jettonContract, sender, userFriendlyAddress);
    } else if (phaseName === "Team tokens") {
      await ClaimTeamTokens(index, counterContract, jettonContract, sender, userFriendlyAddress);
    } else if (phaseName === "Advisors and consultancy") {
      await ClaimAdvisorTokens(index, counterContract, jettonContract, sender, userFriendlyAddress);
    } else if (phaseName === "Treasury Reserves") {
      await ClaimTreasuryTokens(index, counterContract, jettonContract, sender, userFriendlyAddress);
    } else {
      // console.log("error");
    }
  };

  console.log({userFriendlyAddress})
  console.log(userFriendlyAddress, "userFriendlyAddress123");

  useEffect(() => {
    if(userFriendlyAddress && counterContract)
    {
      allReadData();
    }
    document.body.className = "sticky-glass-bgs";
    return () => {
      document.body.className = "";
    };
  }, [userFriendlyAddress, counterContract]);

  const totalPages = Math.ceil(userTokensData?.length / perPageForUser);

  const paginatedData = userTokensData?.slice(
    (pageForUser - 1) * perPageForUser,
    pageForUser * perPageForUser
  );

  const handlePageChange = (newPage: any) => {
    setPageForUser(newPage);
  };

  return (
    <>
      <Index.Box className="my-account-page">
        <Index.Box className="page-sub-title-main">
          <Index.Typography className="page-sub-title">
            Dashboard
          </Index.Typography>
        </Index.Box>

        <Index.Box className="user-dashboad-row">
          <Index.Box className="user-dashboard-box common-card">
            <Index.Box className="user-dashboard-inner-box">
              <Index.Box className="user-dash-left">
                <Index.Box className="user-dash-icon-box">
                  <img
                    src={PagesIndex.Svg.buyIcon}
                    className="user-dash-icons"
                    alt="dashboard icon"
                  />
                </Index.Box>
              </Index.Box>
              <Index.Box className="adusermin-dash-right">
                <Index.Typography className="user-dash-text" component="p">
                  Locked BZZN
                </Index.Typography>
                <Index.Typography
                  className="user-dash-price"
                  variant="h1"
                  component="h1"
                >
                  {Number(totalLockedToken).toFixed(2)}
                </Index.Typography>
              </Index.Box>
            </Index.Box>
          </Index.Box>

          <Index.Box className="user-dashboard-box common-card">
            <Index.Box className="user-dashboard-inner-box">
              <Index.Box className="user-dash-left">
                <Index.Box className="user-dash-icon-box">
                  <img
                    src={PagesIndex.Svg.withdrawIcon}
                    className="user-dash-icons"
                    alt="dashboard icon"
                  />
                </Index.Box>
              </Index.Box>
              <Index.Box className="adusermin-dash-right">
                <Index.Typography className="user-dash-text" component="p">
                  UnLocked BZZN
                </Index.Typography>
                <Index.Typography
                  className="user-dash-price"
                  variant="h1"
                  component="h1"
                >
                  {totalUnLockedToken.toFixed(6)}
                </Index.Typography>
              </Index.Box>
            </Index.Box>
          </Index.Box>

          <Index.Box className="user-dashboard-box common-card">
            <Index.Box className="user-dashboard-inner-box">
              <Index.Box className="user-dash-left">
                <Index.Box className="user-dash-icon-box">
                  <img
                    src={PagesIndex.Svg.referralFillIcon}
                    className="user-dash-icons"
                    alt="dashboard icon"
                  />
                </Index.Box>
              </Index.Box>
              <Index.Box className="adusermin-dash-right">
                <Index.Typography className="user-dash-text" component="p">
                  Available BZZN for Claim
                </Index.Typography>
                <Index.Typography
                  className="user-dash-price"
                  variant="h1"
                  component="h1"
                >
                  {totalAvailableToken.toFixed(6)}
                </Index.Typography>
              </Index.Box>
            </Index.Box>
          </Index.Box>

          {/* <Index.Box className="user-dashboard-box common-card">
            <Index.Box className="user-dashboard-inner-box">
              <Index.Box className="user-dash-left">
                <Index.Box className="user-dash-icon-box">
                  <img
                    src={PagesIndex.Svg.balanceIcon}
                    className="user-dash-icons"
                    alt="dashboard icon"
                  />
                </Index.Box>
              </Index.Box>
              <Index.Box className="adusermin-dash-right">
                <Index.Typography className="user-dash-text" component="p">
                  Remaining Bal..
                </Index.Typography>
                <Index.Typography
                  className="user-dash-price"
                  variant="h1"
                  component="h1"
                >
                  45656
                </Index.Typography>
              </Index.Box>
            </Index.Box>
          </Index.Box> */}
        </Index.Box>

        <Index.Box className="stat-box">
          {/* <Index.Box className="stat ">
            <Index.Box className="reward-btn-wrapper">
              <Index.Box className="p-currency">
                
              </Index.Box>
              <Index.Box className="text-wrape">
                <Index.Typography component="h6">
                  {totalReferrals > 0 ? Number(totalReferrals).toFixed(2) : 0}  
                </Index.Typography>
                <Index.Typography component="p">
                  Referrals BZZN
                </Index.Typography>
              </Index.Box>
            </Index.Box>
            {Math.floor(Date.now() / 1000) > phaseTime[2] &&
            totalReferrals > 0 &&
            referralTokenStatus ? (
              <Index.Box className="card-claim-btn-main">
                <Button onClick={claimReferrerToken} className="reward-btn">
                  Claim Reward
                </Button>
              </Index.Box>
            ) : (
              <></>
            )}
          </Index.Box> */}
        </Index.Box>
        <Index.Box className="page-sub-title-main">
          <Index.Typography className="page-sub-title">
            Transaction
          </Index.Typography>
        </Index.Box>

        <Index.Box sx={{ width: 1 }} className="grid-main">
          <Index.Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gap={{ xs: 2, sm: 2, md: 2, lg: 2 }}
          >
            <Index.Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 12",
                lg: "span 12",
              }}
              className="grid-column"
            >
              <Index.Box className="inner-page-table-main my-account-table-main">
                <Index.TableContainer
                  component={Paper}
                  className="inner-table-container scrollbar"
                >
                  <Index.Table
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                    className="inner-table"
                  >
                    <Index.TableHead>
                      <Index.TableRow>
                        {/* <Index.TableCell className="inner-table-th">
                      {" "}
                    </Index.TableCell> */}
                        <Index.TableCell className="inner-table-th">
                          Phase Name
                        </Index.TableCell>
                        <Index.TableCell className="inner-table-th">
                          USDT
                        </Index.TableCell>
                        <Index.TableCell className="inner-table-th">
                          BZZN
                        </Index.TableCell>
                        <Index.TableCell className="inner-table-th">
                          Remaining BZZN
                        </Index.TableCell>
                        <Index.TableCell className="inner-table-th">
                          Available BZZN
                        </Index.TableCell>
                        <Index.TableCell className="inner-table-th">
                          Start Duration
                        </Index.TableCell>
                        <Index.TableCell className="inner-table-th">
                          Vesting Ends
                        </Index.TableCell>
                        <Index.TableCell className="inner-table-th">
                          Next Claim Date
                        </Index.TableCell>
                        <Index.TableCell className="inner-table-th">
                          Action
                        </Index.TableCell>
                        {/* <Index.TableCell align="right" component="td">
                          <Index.Box className="view-content">
                            {isLoading && globalIndex === indexNo ? (
                              <Index.Box>
                                <span className="loader1"></span>
                              </Index.Box>
                            ) : Math.floor(Date.now() / 1000) >
                                Number(user?.lastClaimTime) +
                                  Number(user?.releaseInterval) &&
                              user?.lastClaimTime < user?.vestingDuration ? (
                              <Index.Button
                                className="view-content-btn"
                                variant="outlined"
                                onClick={() => {
                                  // user?.phaseName === "Founders/Team" ||
                                  // user?.phaseName === "Advisors"
                                  //   ? claimFounderOrAdvisorToken(
                                  //       user?.phaseName,
                                  //       globalIndex,
                                  //       user.index
                                  //     )
                                  //   : claimToken(globalIndex, user.index);
                                  claimSingleTokens(index + 1);
                                }}
                              >
                                CLAIM
                              </Index.Button>
                            ) : user.lastClaimTime ===
                              user.vestingDuration ? (
                              <span
                                style={{ color: "green", marginLeft: "20px" }}
                              >
                                Claimed
                              </span>
                            ) : (
                              <></>
                            )}
                          </Index.Box>
                        </Index.TableCell> */}
                        {/* <Index.TableCell
                          align="right"
                          className="actions"
                          onClick={() =>
                            handleOpenView(user, globalIndex, user.index)
                          }
                        >
                          <Index.Box className="table-btn">
                            <PageIndex.Svg.ViewIcon />
                            details
                          </Index.Box>
                          
                        </Index.TableCell> */}
                        <Index.TableCell className="inner-table-th">
                          Details
                        </Index.TableCell>
                      </Index.TableRow>
                    </Index.TableHead>
                    <Index.TableBody className="table-body">
                      {paginatedData?.length > 0 ? (
                        paginatedData?.map((user: any, index: any) => {
                          const globalIndex =
                            (pageForUser - 1) * perPageForUser + index + 1;
                          return (
                            <Index.TableRow
                              className="table-row"
                              key={globalIndex}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              {/* <Index.TableCell
                            component="td"
                            scope="row"
                            className="inner-table-td"
                          >
                            <Index.Box className="table-icon">
                              <PageIndex.Svg.logoSymbolBlack />
                            </Index.Box>
                          </Index.TableCell> */}
                              <Index.TableCell
                                component="td"
                                scope="row"
                                className="inner-table-td"
                              >
                                {user.phaseName}
                              </Index.TableCell>
                              <Index.TableCell
                                component="td"
                                scope="row"
                                className="inner-table-td"
                              >
                                {user.USDTToken}
                              </Index.TableCell>
                              <Index.TableCell
                                component="td"
                                className="inner-table-td"
                              >
                                {Number(user.BZZNToken).toFixed(6)}
                              </Index.TableCell>
                              <Index.TableCell
                                component="td"
                                className="inner-table-td"
                              >
                                {Number(user.remainingToken).toFixed(6)}
                              </Index.TableCell>
                              <Index.TableCell
                                component="td"
                                className="inner-table-td"
                              >
                                {Number(user?.availableToken).toFixed(6)}
                              </Index.TableCell>
                              <Index.TableCell
                                component="td"
                                className="inner-table-td"
                              >
                                {getTime(user.startTime)}
                              </Index.TableCell>
                              <Index.TableCell
                                component="td"
                                className="inner-table-td"
                              >
                                {getTime(user.vestingDuration)}
                              </Index.TableCell>
                              <Index.TableCell
                                component="td"
                                className="inner-table-td"
                              >
                                {user.lastClaimTime === user.vestingDuration
                                  ? "Completed"
                                  : user.claimTokenTime}
                              </Index.TableCell>
                              <Index.TableCell
                                component="td"
                                className="inner-table-td"
                              >
                                <Index.Box className="view-content">
                                  {isLoading && globalIndex === indexNo ? (
                                    <Index.Box>
                                      <span className="loader1"></span>
                                    </Index.Box>
                                  ) : Math.floor(Date.now() / 1000) >
                                      Number(user?.lastClaimTime) +
                                        Number(user?.releaseInterval) &&
                                    user?.lastClaimTime <
                                      user?.vestingDuration ? (
                                    <Index.Button
                                      className="view-content-btn"
                                      variant="outlined"
                                      onClick={() => {
                                        // user?.phaseName === "Founders/Team" ||
                                        // user?.phaseName === "Advisors"
                                        //   ? claimFounderOrAdvisorToken(
                                        //       user?.phaseName,
                                        //       globalIndex,
                                        //       user.index
                                        //     )
                                        //   : claimToken(globalIndex, user.index);
                                        claimTokens(
                                          user.index + 1,
                                          user.phaseName
                                        );
                                      }}
                                    >
                                      CLAIM
                                    </Index.Button>
                                  ) : user.lastClaimTime ===
                                    user.vestingDuration ? (
                                    <span style={{ color: "green" }}>
                                      Claimed
                                    </span>
                                  ) : (
                                    <></>
                                  )}
                                </Index.Box>
                              </Index.TableCell>
                              <Index.TableCell
                                className="inner-table-td"
                                // onClick={() =>
                                //   handleOpenView(user, globalIndex)
                                // }
                              >
                                <Index.Box className="table-btn">
                                  {/* <PageIndex.Svg.ViewIcon /> */}
                                  details
                                </Index.Box>
                              </Index.TableCell>
                            </Index.TableRow>
                          );
                        })
                      ) : (
                        <PagesIndex.DataNotFound />
                      )}
                    </Index.TableBody>
                  </Index.Table>
                  {totalPages > 1 ? (
                    <Index.Box className="claim-flex">
                      <Index.Box sx={{ flexGrow: "1" }}></Index.Box>
                      <Index.Box className="claim-right-main">
                        <Index.Button
                          className="view-content-btn"
                          onClick={() => {
                            if (pageForUser > 1) {
                              setPageForUser(pageForUser - 1);
                            }
                          }}
                        >
                          Prev
                        </Index.Button>

                        <Index.Typography>Page {pageForUser}</Index.Typography>
                        <Index.Button
                          className="view-content-btn"
                          onClick={() => {
                            if (pageForUser < totalPages) {
                              handlePageChange(pageForUser + 1);
                            }
                          }}
                        >
                          Next
                        </Index.Button>
                      </Index.Box>
                    </Index.Box>
                  ) : (
                    <></>
                  )}
                </Index.TableContainer>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
