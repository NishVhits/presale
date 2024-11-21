import { Address, toNano } from "@ton/core";
import {
  ClaimAdvisorTokens as advisor,
  ClaimMarketingeTokens as Marketing,
  ClaimPrivateSaleTokens,
  ClaimReferralTokens,
  ClaimSingleToken,
  ClaimTeamTokens as team,
  ClaimTreasuryTokens as treasury,
} from "./wrepper/tact_SamplePresale";

const claimSingleTokens = async (
  i: any,
  counterContract: any,
  jettonContract: any,
  sender: any,
  userFriendlyAddress: any
) => {
  const index = BigInt(i);
  if (!jettonContract || !counterContract) return;
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
};

const claimPrivateSaleTokens = async (
  i: any,
  counterContract: any,
  jettonContract: any,
  sender: any,
  userFriendlyAddress: any
) => {
  const index = BigInt(i);
  if (!jettonContract || !counterContract) return;
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
};

const ClaimMarketingeTokens = async (
  i: any,
  counterContract: any,
  jettonContract: any,
  sender: any,
  userFriendlyAddress: any
) => {
  const index = BigInt(i);
  if (!jettonContract || !counterContract) return;
  try {
    const contwalladd = await jettonContract.getGetWalletAddress(
      Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL")
    );
    const message: Marketing = {
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
};

const ClaimTeamTokens = async (
  i: any,
  counterContract: any,
  jettonContract: any,
  sender: any,
  userFriendlyAddress: any
) => {
  const index = BigInt(i);
  if (!jettonContract || !counterContract) return;
  try {
    const contwalladd = await jettonContract.getGetWalletAddress(
      Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL")
    );
    const message: team = {
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
};

const ClaimAdvisorTokens = async (
  i: any,
  counterContract: any,
  jettonContract: any,
  sender: any,
  userFriendlyAddress: any
) => {
  const index = BigInt(i);
  if (!jettonContract || !counterContract) return;
  try {
    const contwalladd = await jettonContract.getGetWalletAddress(
      Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL")
    );
    const message: advisor = {
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
};

const ClaimTreasuryTokens = async (
  i: any,
  counterContract: any,
  jettonContract: any,
  sender: any,
  userFriendlyAddress: any
) => {
  const index = BigInt(i);
  if (!jettonContract || !counterContract) return;
  try {
    const contwalladd = await jettonContract.getGetWalletAddress(
      Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL")
    );
    const message: treasury = {
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
};

const ClaimReferralToken = async (
  i: any,
  counterContract: any,
  jettonContract: any,
  sender: any,
  userFriendlyAddress: any
) => {
  if (!jettonContract || !counterContract) return;
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
};

export {
  ClaimTeamTokens,
  ClaimMarketingeTokens,
  ClaimAdvisorTokens,
  ClaimTreasuryTokens,
  ClaimReferralToken,
  claimSingleTokens,
  claimPrivateSaleTokens,
};
