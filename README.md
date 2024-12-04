# HARDHAT TEMPLATE

- This template was created to the shorten the hardhat setup and configuration time.
- All you need is to clone it then run the necessary commands to install the necessary modules

- Commands to run after cloning:

  ```shell
  npm install
  npx i dotenv
  ```
- The template comes with a simple counter smart contract that you can interact with
- 1. compile the contract
  ``` shell
  npx hardhat compile
  ```
- 2. test the contract
  ```shell
  npx hardhat test
  ```
- To deploy locally
  ```shell
  npx hardhat run scripts/deploy.ts
  ```
- To deploy to sepolia testnet
  ```
  npx hardhat run scripts/deploy.ts --network sepolia
  ```

- In hardhat.config.ts you can change the network URL to infura if you are not using Alchemy
