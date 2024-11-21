import Index from "../../Index";
import PagesIndex from "../../PagesIndex";

export default function Dashboard() {
  return (
    <>
      <Index.Box className="page-content-main">
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
                  Total Buy
                </Index.Typography>
                <Index.Typography
                  className="user-dash-price"
                  variant="h1"
                  component="h1"
                >
                  2154
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
                  Total Withdraw
                </Index.Typography>
                <Index.Typography
                  className="user-dash-price"
                  variant="h1"
                  component="h1"
                >
                  45454
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
                  Total Referral
                </Index.Typography>
                <Index.Typography
                  className="user-dash-price"
                  variant="h1"
                  component="h1"
                >
                  55456
                </Index.Typography>
              </Index.Box>
            </Index.Box>
          </Index.Box>

          <Index.Box className="user-dashboard-box common-card">
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
                  {/* Total Balance */}
                  {/* Remaining Balance */}
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
          </Index.Box>
        </Index.Box>
        <Index.Box className="page-sub-title-main">
          <Index.Typography className="page-sub-title">
            Transaction
          </Index.Typography>
        </Index.Box>
        <Index.Box className="inner-page-table-main transaction-table">
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
                    width="5%"
                  >
                    S.No
                  </Index.TableCell>

                  <Index.TableCell
                    component="th"
                    variant="head"
                    className="inner-table-th"
                    width="10%"
                  >
                    Round
                  </Index.TableCell>

                  <Index.TableCell
                    component="th"
                    variant="head"
                    className="inner-table-th"
                    width="5%"
                  >
                    Amount
                  </Index.TableCell>

                  <Index.TableCell
                    component="th"
                    variant="head"
                    className="inner-table-th"
                    width="15%"
                  >
                    Purchase Date
                  </Index.TableCell>

                  <Index.TableCell
                    component="th"
                    variant="head"
                    className="inner-table-th"
                    width="15%"
                  >
                    Withdrawable Date
                  </Index.TableCell>

                  <Index.TableCell
                    component="th"
                    variant="head"
                    className="inner-table-th"
                    width="5%"
                  >
                    Claimed
                  </Index.TableCell>

                  <Index.TableCell
                    component="th"
                    variant="head"
                    className="inner-table-th"
                    width="10%"
                    align="right"
                  >
                    Action
                  </Index.TableCell>
                </Index.TableRow>
              </Index.TableHead>
              <Index.TableBody className="table-body">
                <Index.TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 }
                  }}
                >
                  <Index.TableCell
                    component="td"
                    variant="body"
                    className="inner-table-td"
                  >
                    4
                  </Index.TableCell>
                  <Index.TableCell
                    component="td"
                    variant="body"
                    className="inner-table-td"
                  >
                    Round 1
                  </Index.TableCell>
                  <Index.TableCell
                    component="td"
                    variant="body"
                    className="inner-table-td"
                  >
                    14545
                  </Index.TableCell>

                  <Index.TableCell
                    component="td"
                    variant="body"
                    className="inner-table-td"
                  >
                    12/12/2022
                  </Index.TableCell>

                  <Index.TableCell
                    component="td"
                    variant="body"
                    className="inner-table-td"
                  >
                    12/12/2022
                  </Index.TableCell>

                  <Index.TableCell
                    component="td"
                    variant="body"
                    className="inner-table-td"
                  >
                    yes
                  </Index.TableCell>

                  <Index.TableCell
                    component="td"
                    variant="body"
                    className="inner-table-td"
                    align="right"
                  >
                    <Index.Box className="primary-btn-main">
                      <Index.Button className="primary-btn">
                        Claimed
                      </Index.Button>
                    </Index.Box>
                  </Index.TableCell>
                </Index.TableRow>
              </Index.TableBody>
            </Index.Table>
          </Index.TableContainer>
        </Index.Box>
      </Index.Box>
    </>
  );
}
