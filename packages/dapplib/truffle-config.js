require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food town rice stereo puppy inside light army gentle'; 
let testAccounts = [
"0xbb3c58299e1d101703a23f82d16a751f142b603180cf719bdb65bd336ac51381",
"0x5272306fa81e3380c1b961a6f774d3093dd612e2041534db2809f2592ebddc7c",
"0xce5b187b2307e6aa53e0f9f406ed1192c18f9d07d047a0761f43002df0ac00c7",
"0xdc7ffae099f178885cafab065e3dcfa87ff75442f878ecebe359bf2ad1721118",
"0x97868bdac74bd82ff7b5df00ca27a2f62f366004c17ee9f5a6c670aeaf1f1faa",
"0x14bb32da57fda79929d86e4c0ff24f918858c1fb85abe7af589716fa081b5924",
"0xddf31402956d11ddc6ed65bffba4123c6118a03d1c39addc1e26dc78c443daf6",
"0xeb23662e3ba86d4bdfe7bb3d51b2266bb13d0beaf2a44c6a3552e979938570fb",
"0x18b9288a243a5064f72a77aa1ce14b299812b2907c2855a4238bf096a4385f48",
"0x2324fb0295953666992999a90bd5056f0a64cefc233f5d37f2fb1d51b5b9d663"
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
            version: '^0.5.11'
        }
    }
};
