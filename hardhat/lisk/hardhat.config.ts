import "dotenv/config";
import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const LISK_RPC_URL = process.env.LISK_RPC_URL || "";
const LISK_PRIVATE_KEY = process.env.LISK_PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    lisk: {
      url: LISK_RPC_URL,
      accounts: LISK_PRIVATE_KEY ? [LISK_PRIVATE_KEY] : [],
      chainId: process.env.LISK_CHAIN_ID ? Number(process.env.LISK_CHAIN_ID) : undefined,
    },
  },
};

export default config;
