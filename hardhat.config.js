require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
// require("@nomiclabs/hardhat-etherscan")
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    bscTestnet: {
      url: "https://bscrpc.com",
      accounts: [PRIVATE_KEY],
      chainId: 97,
    },
  },
};
