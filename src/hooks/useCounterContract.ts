import { useEffect, useState } from "react";
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

export function useCounterContract() {
  const dispatch = PagesIndex.useDispatch();
  // const { userSeedTokenData } = useSelector((state: any) => state.AdminReducer);
  const userFriendlyAddress = useTonAddress();
  const client = useTonClient();
  const [userSeedTokenData, setUserSeedTokenData] = useState<null | object>([]);
  const [tokonomicsData, setTokonomicsData] = useState<null | object>([]);
  const [tonBalance, setTonBalance] = useState<number>(0);
  const [referralData, setReferralData] = useState<null | object>([]);
  const { sender } = useTonConnect();

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

  useEffect(() => {
    // let isActive = true;
    console.log("startig","balance1234")
    const fetchValue = async () => {
      if (!counterContract) return;
      if (userFriendlyAddress === null) return;
      try {
        const address = Address.parseFriendly(userFriendlyAddress).address;
        const balance = await client?.getBalance(address);
        console.log(balance,"balance1234");
        setTonBalance(Number(balance?.toString()) / 10 ** 9);
        
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
          counterContract.getGetAllReferralDetails(
            Address.parse(userFriendlyAddress)
          ),
          counterContract.getGetTokonomicsData(),
        ]);
        console.log(SeedTokenData,"balance123");

      

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
        console.log(formattedData, "formattedData");

        // if (isActive) {
        setReferralData(ReferralData.values());
        dispatch(PagesIndex.setReferralData(ReferralData.values()));
        setUserSeedTokenData(formattedData);
        dispatch(PagesIndex.setUserSeedTokenData(formattedData));
        setTokonomicsData(tokonomicsData.values());
        // }
      } catch (error) {
        console.error("Error fetching counter value:", error);
      }
      // setTimeout(() => {
      //   if (isActive) fetchValue();
      // }, 5000);
    };
    fetchValue();
    // return () => {
    //   isActive = false;
    // };
  }, [counterContract, userFriendlyAddress]);

  console.log(userSeedTokenData,"787878");
  return {
    userSeedTokenData,
    tokonomicsData,
    referralData,
    tonBalance,
    address: counterContract?.address.toString(),
    claimTokens: async () => {
      if (!jettonContract || !counterContract || !client) return;

      try {
        const contwalladd = await jettonContract.getGetWalletAddress(
          Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL")
        );
        const message: ClaimTokens = {
          $$type: "ClaimTokens",
          amount: 10n,
          cenderadd: contwalladd,
          senderadd: Address.parse(userFriendlyAddress),
        };
        await counterContract.send(
          sender,
          {
            value: toNano("0.1"),
          },
          message
        );
      } catch (error) {
        console.error("Error sending claim transaction:", error);
      }
    },
    claimSingleTokens: async (i: any) => {
      const index = BigInt(i);
      if (!jettonContract || !counterContract || !client) return;
      try {
        const contwalladd = await jettonContract.getGetWalletAddress(
          Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL")
        );
        const message: ClaimSingleToken = {
          $$type: "ClaimSingleToken",
          index: index,
          cenderadd: contwalladd,
          senderadd: Address.parse(userFriendlyAddress),
        };
        await counterContract.send(
          sender,
          {
            value: toNano("0.1"),
          },
          message
        );
      } catch (error) {
        console.error("Error sending claim transaction:", error);
      }
    },
    claimPrivateSaleTokens: async (i: any) => {
      const index = BigInt(i);
      if (!jettonContract || !counterContract || !client) return;
      try {
        const contwalladd = await jettonContract.getGetWalletAddress(
          Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL")
        );
        const message: ClaimPrivateSaleTokens = {
          $$type: "ClaimPrivateSaleTokens",
          index: index,
          cenderadd: contwalladd,
          senderadd: Address.parse(userFriendlyAddress),
        };
        await counterContract.send(
          sender,
          {
            value: toNano("0.1"),
          },
          message
        );
      } catch (error) {
        console.error("Error sending claim transaction:", error);
      }
    },
    ClaimMarketingeTokens: async (i: any) => {
      const index = BigInt(i);
      if (!jettonContract || !counterContract || !client) return;
      try {
        const contwalladd = await jettonContract.getGetWalletAddress(
          Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL")
        );
        const message: ClaimMarketingeTokens = {
          $$type: "ClaimMarketingeTokens",
          index: index,
          cenderadd: contwalladd,
          senderadd: Address.parse(userFriendlyAddress),
        };
        await counterContract.send(
          sender,
          {
            value: toNano("0.1"),
          },
          message
        );
      } catch (error) {
        console.error("Error sending claim transaction:", error);
      }
    },
    ClaimTeamTokens: async (i: any) => {
      const index = BigInt(i);
      if (!jettonContract || !counterContract || !client) return;
      try {
        const contwalladd = await jettonContract.getGetWalletAddress(
          Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL")
        );
        const message: ClaimTeamTokens = {
          $$type: "ClaimTeamTokens",
          index: index,
          cenderadd: contwalladd,
          senderadd: Address.parse(userFriendlyAddress),
        };
        await counterContract.send(
          sender,
          {
            value: toNano("0.1"),
          },
          message
        );
      } catch (error) {
        console.error("Error sending claim transaction:", error);
      }
    },
    ClaimAdvisorTokens: async (i: any) => {
      const index = BigInt(i);
      if (!jettonContract || !counterContract || !client) return;
      try {
        const contwalladd = await jettonContract.getGetWalletAddress(
          Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL")
        );
        const message: ClaimAdvisorTokens = {
          $$type: "ClaimAdvisorTokens",
          index: index,
          cenderadd: contwalladd,
          senderadd: Address.parse(userFriendlyAddress),
        };
        await counterContract.send(
          sender,
          {
            value: toNano("0.1"),
          },
          message
        );
      } catch (error) {
        console.error("Error sending claim transaction:", error);
      }
    },
    ClaimTreasuryTokens: async (i: any) => {
      const index = BigInt(i);
      if (!jettonContract || !counterContract || !client) return;
      try {
        const contwalladd = await jettonContract.getGetWalletAddress(
          Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL")
        );
        const message: ClaimTreasuryTokens = {
          $$type: "ClaimTreasuryTokens",
          index: index,
          cenderadd: contwalladd,
          senderadd: Address.parse(userFriendlyAddress),
        };
        await counterContract.send(
          sender,
          {
            value: toNano("0.1"),
          },
          message
        );
      } catch (error) {
        console.error("Error sending claim transaction:", error);
      }
    },
    ClaimReferralTokens: async () => {
      if (!jettonContract || !counterContract || !client) return;
      try {
        const contwalladd = await jettonContract.getGetWalletAddress(
          Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL")
        );
        const message: ClaimReferralTokens = {
          $$type: "ClaimReferralTokens",
          cenderadd: contwalladd,
        };
        await counterContract.send(
          sender,
          {
            value: toNano("0.1"),
          },
          message
        );
      } catch (error) {
        console.error("Error sending claim transaction:", error);
      }
    },
  };
}
