import React, { createContext, useContext, useEffect, useState } from "react";
import {
  SamplePresale,
  ClaimTokens,
  ClaimSingleToken,
  ClaimPrivateSaleTokens,
  ClaimMarketingeTokens,
  ClaimTeamTokens,
  ClaimAdvisorTokens,
  ClaimTreasuryTokens,
  ClaimReferralTokens,
} from "../utils/wrepper/tact_SamplePresale";
import { SampleJetton } from "../utils/wrepper/tact_SampleJetton";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract, toNano } from "@ton/core";
import { useTonAddress } from "@tonconnect/ui-react";
import PagesIndex from "../container/PagesIndex";
// import { useSelector } from "react-redux";

interface TonContextType {
  userSeedTokenData: any;
  tokonomicsData: any;
  referralData: any;
  tonBalance: number;
  address: string | undefined;
  claimTokens: () => Promise<void>;
  claimSingleTokens: (i: any) => Promise<void>;
  claimPrivateSaleTokens: (i: any) => Promise<void>;
  ClaimMarketingeTokens: (i: any) => Promise<void>;
  ClaimTeamTokens: (i: any) => Promise<void>;
  ClaimAdvisorTokens: (i: any) => Promise<void>;
  ClaimTreasuryTokens: (i: any) => Promise<void>;
  ClaimReferralTokens: () => Promise<void>;
}

const TonContext = createContext<TonContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const dispatch = PagesIndex.useDispatch();
//   const { userSeedTokenData } = useSelector((state: any) => state.AdminReducer);
  const userFriendlyAddress = useTonAddress();
  const client = useTonClient();
  const [tokonomicsData, setTokonomicsData] = useState<null | object>([]);
  const [tonBalance, setTonBalance] = useState<number>(0);
  const [referralData, setReferralData] = useState<null | object>([]);
  const { sender } = useTonConnect();

  const counterContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = SamplePresale.fromAddress(
      Address.parse("EQA_-lqYhAaS34DJYcb02z1CWq8YpD2Zbll5AqWoxYOBgv8n")
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

  useEffect(() => {
    const fetchValue = async () => {
      if (!counterContract || !userFriendlyAddress) return;
      try {
        const [
          SeedTokenData,
          PrivateTokenData,
          MarketingTokenData,
          TeamTokenData,
          AdvisorTokenData,
          TreasuryTokenData,
          ReferralData,
          tokonomicsData,
        ] = await Promise.all([
          counterContract.getGetAllSeedTokenData(Address.parse(userFriendlyAddress)),
          counterContract.getGetAllPrivateTokenData(Address.parse(userFriendlyAddress)),
          counterContract.getGetAllMarketingTokenData(Address.parse(userFriendlyAddress)),
          counterContract.getGetAllTeamTokenData(Address.parse(userFriendlyAddress)),
          counterContract.getGetAllAdvisorTokenData(Address.parse(userFriendlyAddress)),
          counterContract.getGetAllTreasuryTokenData(Address.parse(userFriendlyAddress)),
          counterContract.getGetAllReferralDetails(Address.parse(userFriendlyAddress)),
          counterContract.getGetTokonomicsData(),
        ]);

        const address = Address.parseFriendly(userFriendlyAddress).address;
        const balance = await client?.getBalance(address);
        setTonBalance(Number(balance?.toString()) / 10 ** 9);

        const formattedData = [
          ...SeedTokenData.values().map((item, index) => ({ ...item, index })),
          ...PrivateTokenData.values().map((item, index) => ({ ...item, index })),
          ...MarketingTokenData.values().map((item, index) => ({ ...item, index })),
          ...TeamTokenData.values().map((item, index) => ({ ...item, index })),
          ...AdvisorTokenData.values().map((item, index) => ({ ...item, index })),
          ...TreasuryTokenData.values().map((item, index) => ({ ...item, index })),
        ];

        setReferralData(ReferralData.values());
        // dispatch(PagesIndex.setReferralData(ReferralData.values()));
        // dispatch(PagesIndex.setUserSeedTokenData(formattedData));
        setTokonomicsData(tokonomicsData.values());
      } catch (error) {
        console.error("Error fetching counter value:", error);
      }
    };
    fetchValue();
  }, [counterContract]);

  const sendClaimTransaction = async (message: any) => {
    if (!jettonContract || !counterContract || !client || !sender) return;
    try {
      const contwalladd = await jettonContract.getGetWalletAddress(
        Address.parse("EQA_-lqYhAaS34DJYcb02z1CWq8YpD2Zbll5AqWoxYOBgv8n")
      );
      await counterContract.send(
        sender,
        { value: toNano("0.1") },
        { ...message, cenderadd: contwalladd, senderadd: Address.parse(userFriendlyAddress) }
      );
    } catch (error) {
      console.error("Error sending claim transaction:", error);
    }
  };

  const value: TonContextType = {
    userSeedTokenData,
    tokonomicsData,
    referralData,
    tonBalance,
    address: counterContract?.address.toString(),
    claimTokens: () => sendClaimTransaction({ $$type: "ClaimTokens", amount: 10n }),
    claimSingleTokens: (i) => sendClaimTransaction({ $$type: "ClaimSingleToken", index: BigInt(i) }),
    claimPrivateSaleTokens: (i) => sendClaimTransaction({ $$type: "ClaimPrivateSaleTokens", index: BigInt(i) }),
    ClaimMarketingeTokens: (i) => sendClaimTransaction({ $$type: "ClaimMarketingeTokens", index: BigInt(i) }),
    ClaimTeamTokens: (i) => sendClaimTransaction({ $$type: "ClaimTeamTokens", index: BigInt(i) }),
    ClaimAdvisorTokens: (i) => sendClaimTransaction({ $$type: "ClaimAdvisorTokens", index: BigInt(i) }),
    ClaimTreasuryTokens: (i) => sendClaimTransaction({ $$type: "ClaimTreasuryTokens", index: BigInt(i) }),
    ClaimReferralTokens: () => sendClaimTransaction({ $$type: "ClaimReferralTokens" }),
  };

  return <TonContext.Provider value={value}>{children}</TonContext.Provider>;
};

export const useTon = () => {
  const context = useContext(TonContext);
  if (!context) {
    throw new Error("useTon must be used within a TonProvider");
  }
  return context;
};
