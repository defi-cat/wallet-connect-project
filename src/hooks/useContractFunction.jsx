import { useState, useCallback } from "react";
import {
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";

const useContractFunction = (contractConfig, functionName, options = {}) => {
  const [error, setError] = useState(null);

  const { data, isFetching, refetch } = useReadContract({
    ...contractConfig,
    functionName,
    query: { enabled: false },
  });

  const { writeContractAsync } = useWriteContract();
  const [txData, setTxData] = useState(null);

  const { isLoading: txLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: txData?.hash,
  });

  const callFunction = useCallback(async () => {
    try {
      await refetch();
    } catch (err) {
      setError(err.message);
    }
  }, [refetch]);

  const writeFunction = useCallback(
    async (...args) => {
      try {
        const tx = await writeContractAsync({
          ...contractConfig,
          functionName,
          args,
          ...options,
        });
        setTxData(tx);
      } catch (err) {
        setError(err.message);
      }
    },
    [writeContractAsync, contractConfig, functionName, options]
  );

  return {
    data,
    loading: isFetching || txLoading,
    error,
    tx: txData,
    callFunction,
    writeFunction,
    isSuccess,
  };
};

export default useContractFunction;
