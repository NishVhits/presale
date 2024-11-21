import Index from "../../Index";
import PagesIndex from "../../PagesIndex";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useTonConnectUI, useTonAddress } from "@tonconnect/ui-react";
import React, { useState } from "react";
// import { useCounterContract } from "../../../hooks/useCounterContract";
import { useJettonDefaultContract } from "../../../hooks/useDefaultJettonWallet";
import { useParams } from "react-router-dom";

// for custom progressbar design

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#F95C0E" : "#308fe8"
  }
}));

export default function BuyPresale() {
  // for open handleChangedropdown

  const [age, setAge] = React.useState("");

  const handleChangedropdown = (event: any) => {
    setAge(event.target.value);
  };

  const [tonTokenValue, setTonTokenValue] = useState(0);
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();
  const referrelAddress = useParams();
  const { buyTokens, usdtValue } = useJettonDefaultContract();
  // const { tonBalance } = useCounterContract();

  const GenerateReferralLink = async () => {
    try {
      if (userFriendlyAddress) {
        const link = `http://localhost:5173/${userFriendlyAddress}`;
        navigator.clipboard.writeText(link);
      } else {
        alert("Please Connect Wallet First");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCallApi = async () => {
    const urlencoded = new URLSearchParams();
    urlencoded.append("user_address", userFriendlyAddress);
    urlencoded.append("start_time", (Date.now() / 1000).toFixed());
    urlencoded.append("vesting_duration", "0");
    urlencoded.append("phase_name", "Seed Round Financing");
    urlencoded.append("usdt_token", tonTokenValue.toString());
    urlencoded.append("active", "true");
    urlencoded.append("remaining_token", "0");
    try {
      const res = await PagesIndex.apiPostHandler(
        PagesIndex.Api.ADD_TRANSACTION,
        urlencoded
      );
      if (res.status === 200 || res.status === 201) {
        PagesIndex.toasterSuccess(res?.message);
      } else {
        PagesIndex.toasterError(res?.message);
      }
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const tokenBuy = async () => {
    try {
      if (referrelAddress.id !== undefined) {
        buyTokens(tonTokenValue.toString(), referrelAddress.id);
        handleCallApi();
      } else {
        buyTokens(
          tonTokenValue.toString(),
          "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c"
        );
        handleCallApi();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Index.Box className="buy-presale-card">
        <Index.Box className="buy-presale-title-header">
          <Index.Typography className="buy-presale-title">
            Buy BZZN Presale
          </Index.Typography>
        </Index.Box>
        <Index.Box className="buy-presale-inner-card">
          <Index.Box className="buy-presale-progress-main">
            <Index.Box className="buy-presale-progrss-title-flex">
              <Index.Typography className="buy-presale-progrss-title">
                Sold BZZN
              </Index.Typography>
              <Index.Typography className="buy-presale-progrss-title">
                <img
                  src={PagesIndex.Svg.bizzonCoin}
                  alt="bizzon"
                  className="buy-presale-icon"
                />
                1 200 000 <span>/</span> <span>2 000 000</span>
              </Index.Typography>
            </Index.Box>
            <Index.Box className="admin-progress-bar-main">
              <BorderLinearProgress
                variant="determinate"
                value={50}
                className="admin-progress-bar"
              />
            </Index.Box>
          </Index.Box>
          <Index.Box className="buy-presale-input-card">
            <Index.Box className="presale-amount-title-flex">
              <Index.Box className="presale-amount-text-flex">
                <Index.Typography className="presale-amount-title">
                  1 BZZN = 0.25 USDT
                </Index.Typography>
                <img
                  src={PagesIndex.Svg.tonIcon}
                  alt="presale"
                  className="buy-presale-icon"
                />
              </Index.Box>
              <Index.Box className="presale-dropdown-main">
                <Index.Box className="input-box presale-dropdown-input-box">
                  <Index.Box className="form-group">
                    <Index.Box className="dropdown-box">
                      <Index.FormControl className="form-control">
                        <Index.Select
                          className="dropdown-select"
                          value={age}
                          onChange={handleChangedropdown}
                          displayEmpty
                        >
                          <Index.MenuItem value="" className="menuitem">
                            <Index.Box className="menuitem-flex">
                              <img
                                src={PagesIndex.Svg.UsdtIcon}
                                alt="Active"
                                className="menu-active-icon"
                              />
                              <Index.Typography>USDT</Index.Typography>
                            </Index.Box>
                          </Index.MenuItem>
                          <Index.MenuItem value={10} className="menuitem">
                            <Index.Box className="menuitem-flex">
                              <img
                                src={PagesIndex.Svg.tonIcon}
                                alt="Active"
                                className="menu-active-icon"
                              />
                              <Index.Typography>TON</Index.Typography>
                            </Index.Box>
                          </Index.MenuItem>
                        </Index.Select>
                      </Index.FormControl>
                    </Index.Box>
                  </Index.Box>
                </Index.Box>
              </Index.Box>
            </Index.Box>
            <Index.Box className="presale-amount-input-flex">
              <Index.Box className="input-box presale-input">
                <Index.FormHelperText className="form-lable">
                  Pay with TON
                </Index.FormHelperText>
                <Index.Box className="form-group">
                  <Index.TextField
                    fullWidth
                    id="fullWidth"
                    className="form-control"
                    placeholder="0"
                    type="number"
                    onChange={(e) => setTonTokenValue(Number(e.target.value))}
                  />
                </Index.Box>
              </Index.Box>
              <Index.Box className="input-box presale-input">
                <Index.FormHelperText className="form-lable">
                  $ BZZN you receive
                </Index.FormHelperText>
                <Index.Box className="form-group">
                  <Index.TextField
                    fullWidth
                    id="fullWidth"
                    className="form-control"
                    placeholder="0"
                    value={Number(tonTokenValue) / 0.25}
                    disabled
                  />
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
          <Index.Box className="wallet-copy-main presale-wallet-copy-main">
            <Index.Typography className="wallet-copy-text">
              Copy your referral link
            </Index.Typography>
            <Index.Box className="wallet-copy-btn-main">
              <Index.Tooltip
                title="copy"
                arrow
                placement="bottom"
                className="admin-tooltip"
              >
                <Index.Button
                  onClick={GenerateReferralLink}
                  className="wallet-copy-btn"
                >
                  <img
                    src={PagesIndex.Svg.copySqureIcon}
                    className="wallet-copy-icon"
                    alt="Copy"
                  />
                </Index.Button>
              </Index.Tooltip>
            </Index.Box>
          </Index.Box>
          {!userFriendlyAddress ? (
            <Index.Button
              className="buy-presale-btn"
              onClick={() => tonConnectUI.openModal()}
            >
              <img
                src={PagesIndex.Svg.walletIcon}
                alt="wallet"
                className="buy-presale-btn-icon"
              />
              Connect Wallet
            </Index.Button>
          ) : usdtValue < tonTokenValue ? (
            <Index.Button className="buy-presale-btn" disabled>
              <img
                src={PagesIndex.Svg.walletIcon}
                alt="wallet"
                className="buy-presale-btn-icon"
              />
              Insufficient USDT Balance
            </Index.Button>
          ) : (
            <Index.Button
              className="buy-presale-btn"
              onClick={() => tokenBuy()}
            >
              <img
                src={PagesIndex.Svg.walletIcon}
                alt="wallet"
                className="buy-presale-btn-icon"
              />
              Buy Token
            </Index.Button>
          )}
        </Index.Box>
      </Index.Box>
    </>
  );
}
