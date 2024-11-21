// import { useEffect, useState } from "react";
import {
  JettonDefaultWallet
} from "../utils/wrepper/tact_DefaultJettonWallet";
// import { SampleJetton } from "../utils/wrepper/tact_SampleJetton";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, beginCell, OpenedContract, toNano } from "@ton/core";
import { useTonAddress } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";

export function useJettonDefaultContract() {
  const userFriendlyAddress = useTonAddress();
  const client = useTonClient();
  const { sender } = useTonConnect();
  const [usdtValue, setUSDTValue] = useState< number>(0);
  const counterContract = useAsyncInitialize(async () => {
    if (!client) return;
    const userWalladd = JettonDefaultWallet.fromInit(Address.parse("EQBA1BbZsdwWxGhYL0Gjl8mN5tEnuJKNZE1qBf4_-EJ_pL5h"), Address.parse(userFriendlyAddress));
    // console.log(await userWalladd,"userWalladd");
    const JettonDefault = JettonDefaultWallet.fromAddress((await userWalladd).address)
    return client.open(await JettonDefault) as OpenedContract<JettonDefaultWallet>;
  }, [client]);

  useEffect(() => {
    const fetchValue = async () => {
      if (!counterContract) return;
      if(userFriendlyAddress === null) return
      try {
       const usdtValue =await counterContract.getGetWalletData()
        
      // console.log(Number(usdtValue.balance.toString()) / 10 ** 9,"usdtValue");
          setUSDTValue(Number(usdtValue.balance.toString()) / 10 ** 9)
      
      } catch (error) {
        console.error("Error fetching counter value:", error);
      }
      
    };
    fetchValue();
   
  }, [counterContract]);


  return {
    usdtValue,
    address: counterContract?.address.toString(),
    buyTokens: async (tonValue:any,refAddress:any) => {
      if (!counterContract || !client) return;
      try {
   
        await counterContract.send(
          sender,
          {
            value: toNano("0.1"),
          },
          {
            $$type: 'TokenTransfer',
            queryId: 0n,
            amount: toNano(tonValue),
            destination: Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL"),
            response_destination: Address.parse("EQDXMS7dp7B5tSkW-k-8lmmchedfPMpuE-aEn-PTIdfqs6GL"),
            custom_payload: null,
            forward_ton_amount: toNano("0.05"),
            forward_payload: beginCell().storeAddress(Address.parse(refAddress)).endCell()
        }
      );
      } catch (error) {
        console.error("Error sending increment transaction:", error);
      }
    },
  };
}
