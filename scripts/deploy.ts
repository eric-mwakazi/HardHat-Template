import { ethers } from "hardhat";

async function main() {
  // Get the contract factoryMpesaEthBridgeMain
  const MpesaEthBridgeMain = await ethers.getContractFactory("MpesaEthBridgeMain");
  const MpesaEthBridge = await MpesaEthBridgeMain.deploy();
  await MpesaEthBridge.deploymentTransaction()?.wait();
  
  console.log(`Contract deployed to: ${await MpesaEthBridge.getAddress()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });