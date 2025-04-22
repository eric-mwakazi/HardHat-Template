import { run } from "hardhat";
require("dotenv").config();
async function main() {
  //const contractAddress = process.env.CONTRACT_ADDR;
  const contractAddress ='0x08F504B539c1A52C7be4F6B58792b1A49F17aCb9'
  console.log(`Verifying contract at address: ${contractAddress}...`);

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: [], // Add arguments if your constructor takes any
    });

    console.log("Contract verified successfully!");
  } catch (error: any) {
    if (error.message.includes("Already Verified")) {
      console.log("Contract is already verified!");
    } else {
      console.error("Verification failed:", error.message);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });

