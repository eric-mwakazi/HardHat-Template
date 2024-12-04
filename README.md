# HARDHAT TEMPLATE

- This template was created to the shorten the hardhat setup and configuration time.
- All you need is to clone it then run the necessary commands to install the necessary modules

- Commands to run after cloning:

  ```shell
  npm install
  npx i dotenv
  ```
- The template comes with a simple counter smart contract that you can interact with
  1. Compile the contract
  ``` shell
  npx hardhat compile
  ```
  2. Test the contract
  ```shell
  npx hardhat test
  ```
- Deployment
  1. Deploying locally
  ```shell
  npx hardhat run scripts/deploy.ts
  ```
  2. Deploying to sepolia testnet
  ```
  npx hardhat run scripts/deploy.ts --network sepolia
  ```

- In hardhat.config.ts you can change the network URL to infura if you are not using Alchemy
- Add the .env file to the project root folder then add the ALCHEMY_RPC_SEPOLIA URL and your WALLET_PRIVATE_KEY
  ![hh](https://github.com/user-attachments/assets/be7e3bf2-e223-4df6-9064-bb55a0b0479a)

