require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-etherscan");

const { ETHERSCAN_API_KEY, WALLET_PRIVATE_KEY } = require("./secret.json");

module.exports = {
  // defaultNetwork: "rinkeby",
  etherscan: {
    apiKey: '2AM6X58M3UW8AV3FK94V5NCY5ZD77RRU67'
  },
  networks: {
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/523f83c1211b4da6bf364cbe1aef5919",//infura
      // url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 4,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      }
    ]
  }
};
