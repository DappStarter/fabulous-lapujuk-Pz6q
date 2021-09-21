require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember method idea prize outer stomach'; 
let testAccounts = [
"0x5726c4faa56b8ff364a96e4acc5dbfb570c694b0a04b8373b9ad391dd4a10ed3",
"0x7b41ac2733367111ee6e27ddb678f34722c259d68924bac1626a0e0dfe3d5f48",
"0xf3714b875ad601b20e8a535aab1c2118f82b1cbea526998e345044ffe3b274f9",
"0xfdc79e4a214933048c96087f090422d4c149f13e74036a1a55e5491747e6290e",
"0xbcbb5392bbc1f9d6e42b4cc9861c384cf566598a82efc9c9f3c49002c723211e",
"0xde223e7315c02d279f27de0a1c0922491c3909c1d42f4ce0eacd0537f6abc0a7",
"0x8e9e959baffcdc69502327d775ca743f4d9184284639f881366ebf0be9192a88",
"0xb036201c8b5300d844f8ead9ea9cbafd5fc9e5f2374c9b37f22cb75c8da2ceda",
"0x31d56a7b850e871895bd38009845ee2111842dba6f2ee887c7291896577f6370",
"0x5da59852105dc9bf10603edc8eeec78c5f50a6414a89f6d7f9da93d27689ffcb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

