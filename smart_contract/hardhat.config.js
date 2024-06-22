// https://eth-sepolia.g.alchemy.com/v2/xQvMF-ynTxyEKxW375DneX_riKYDd14d

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/xQvMF-ynTxyEKxW375DneX_riKYDd14d',
      accounts: ['68db8aec5796e71bfa865e1d344c64126d975e64cec203403bfa3ec205830140'],
    },
  },
};
