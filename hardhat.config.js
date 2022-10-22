require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("./tasks/block-number")
require("hardhat-gas-reporter")
// require("@nomiclabs/hardhat-etherscan")
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [PRIVATE_KEY],
      chainId: 97,
    },
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency:"USD"
  }
};
