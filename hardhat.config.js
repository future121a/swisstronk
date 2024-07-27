require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x30492d07511ed85d69fe105c39371c250bfb1bc4aa274ad183fdd9eb51cd72a4"], //Your private key starting with "0x"
    },
  },
};
