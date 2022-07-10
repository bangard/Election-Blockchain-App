require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  //added the below one line
  contracts_build_directory: "./build/contracts",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  }, 
};
