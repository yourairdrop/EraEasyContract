import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import fs from "fs";
import path from "path";
import "@matterlabs/hardhat-zksync-verify";
require("@nomiclabs/hardhat-ethers");

// Your hardhat configuration


module.exports = {
  zksolc: {
    version: "1.3.5",
    compilerSource: "binary",
    settings: {},
  },
  defaultNetwork: "zkSyncTestnet",

  networks: {
    zkSyncTestnet: {
      url: "https://mainnet.era.zksync.io",
      ethNetwork: "mainnet", // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      zksync: true,
      verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification'

    },
  },
  solidity: {
    version: "0.8.17",
  },
};
