import { HardhatUserConfig } from "hardhat/config";
import 'solidity-coverage';
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.26",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_RPC_SEPOLIA,
      accounts: [String(process.env.WALLET_PRIVATE_KEY)],
    }
  },
  etherscan: {
    apiKey: String(process.env.ETHERSCAN_API_KEY),
  },
};

export default config;