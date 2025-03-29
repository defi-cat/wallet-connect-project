import { usdtContractAddress } from "../constants";

export const getContractAddressByChainId = (chainID) => {
  switch (chainID) {
    case 1:
      return usdtContractAddress.ether;

    case 204:
      return usdtContractAddress.bnb;

    case 137:
      return usdtContractAddress.polygon;
  }
};
