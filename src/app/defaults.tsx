import { QueryClient } from "react-query";

export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export const FONTS: [string, number[]][] = [["Inter", [300, 400, 600, 700]]];

export const BSC_CHAIN_ID = 56;
export const BSC_RPC_URLS = [
  "https://bsc-dataseed.binance.org/",
  "https://bsc-dataseed1.defibit.io/",
  "https://bsc-dataseed1.ninicoin.io/",
];
