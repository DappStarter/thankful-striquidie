require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remind hub include entire front spirit'; 
let testAccounts = [
"0x22314e9dc77484e374b7c7eaa372c19ed3e505b3dae8d0978ddb0d78ccdd1f19",
"0xf81acea9e7a198628ed950305d5c6bc0b7eb7c88abcea847bb1a7eb57433ba94",
"0xd1aea22796636704ff54c1c364d8801bd452665712226ecc875f463c8c379b07",
"0x0ee2a4c3084ac39099e0cdc18df705bd1dc44ec4d9b5981e9f9c97ee8b9286d1",
"0x16d0c567c2c46cbd9efabf0cc14cf3c22605cd577f43aae85d17811ee038b307",
"0x7abcfb9974939ba424b359651d147c5d19f3d72ab274d4744479dfaf117a1c7c",
"0xb28257baec00f0a752247e03ff398730bf3b434b280da5b58bdc7993b00a96d7",
"0x43db42308aa4a95718a942cf5c2ae27d96eb5df04d2c64be9a0f0e6c306cfcb6",
"0x7c6bce7d660bf12f938bd83f5bc0b0af3697e4b5579a6ae57e11af2a746959f0",
"0x09e9492530f41bb3cdafea7b995dbddf094d7c2e9224203af27c33e4f9090a9b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

