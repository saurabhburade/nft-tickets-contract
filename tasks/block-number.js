const {task } = require("hardhat/config")
task("block-number", "Prints current Block Number").setAction(
    async (taskArgs, hre) => {
        const blockNumber =await hre.ethers.provider.getBlockNumber();
        console.log('====================================');
        console.log({blockNumber});
        console.log('====================================');
    }
)