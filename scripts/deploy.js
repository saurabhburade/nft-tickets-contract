// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("1");

  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();
  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.deploy();
  console.log("====================================");
  console.log({ simpleStorage });
  console.log("====================================");
  await simpleStorage.deployed();
  const simpleStorageAddTxn = await simpleStorage.addPersonToList("John", 75);
  await simpleStorageAddTxn.wait();
  console.log("====================================");
  console.log({ simpleStorageAddTxn });
  console.log("====================================");

  const simpleStoragePersonAt0 = await simpleStorage.viewPersonAt(0);
  console.log("====================================");
  console.log({ simpleStoragePersonAt0 });
  console.log("====================================");

  const simpleStorageAddTxn2 = await simpleStorage.addPersonToList("Jane", 20);
  await simpleStorageAddTxn2.wait();
  console.log("====================================");
  console.log({ simpleStorageAddTxn2 });
  console.log("====================================");

  const simpleStoragePersonAt1 = await simpleStorage.viewPersonAt(1);
  console.log("====================================");
  console.log({ simpleStoragePersonAt1 });
  console.log("====================================");
  const simpleStoragePersonAt100 = await simpleStorage.viewPersonAt(100);
  console.log("====================================");
  console.log({ simpleStoragePersonAt100 });
  console.log("====================================");
  // console.log(
  //   `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
