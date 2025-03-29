import React, { useEffect, useState } from "react";

import { createConfig, http, useReadContract } from "wagmi";
import { mainnet } from "wagmi/chains";
import { WagmiProvider } from "wagmi";
import useContractFunction from "../hooks/useContractFunction";
import { usdtContractAddress } from "../constants";
import usdtAbi from "../abi/usdtAbi.json";
import { readContract, writeContract } from "wagmi/actions";
import { useAppKitNetwork } from "@reown/appkit/react";
import { getContractAddressByChainId } from "../utils";

const ContractComponent = () => {
  const [loading, setloading] = useState(false);

  const [txnHash, settxnHash] = useState("");

  const { caipNetwork, caipNetworkId, chainId, switchNetwork } =
    useAppKitNetwork();

  const contractConfig = {
    address: getContractAddressByChainId(chainId),
    abi: usdtAbi,
    chainId: chainId,
  };

  const callFunction = async () => {
    console.log("Contract Config:", contractConfig);
    try {
      const data = await readContract({
        ...contractConfig,
        functionName: "totalSupply",
        chainId: chainId,
      });

      console.log("transaction data ", data);
    } catch (error) {
      console.error("Error fetching :", error);
    }
  };

  const sendTransaction = async (recAddress, amt) => {
    try {
      const { hash } = await writeContract({
        ...contractConfig,
        functionName: "transfer", // Example function
        args: [
          recAddress, //  recipient address
          amt, // Amount (use BigInt for ERC20 tokens)
        ],
      });
      settxnHash(hash); // Store transaction hash
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <div className="w-lg flex flex-col">
      <h1>Contract Interaction Example</h1>

      {/* Read Data */}
      <button onClick={callFunction} disabled={loading}>
        {loading ? "Loading..." : "Call Function"}
      </button>

      {/* Write Data */}
      <button onClick={sendTransaction} disabled={loading}>
        {loading ? "Setting..." : "write function"}
      </button>
    </div>
  );
};

export default ContractComponent;
