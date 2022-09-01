// 0xCa1D199b6F53Af7387ac543Af8e8a34455BBe5E0

// 0x0dDfe90134de60aeCCA06ffcacA4B43F4a2D89eb deployed to.

//  0x501794785135218aA6681dd286aB8774991F1c95 deployed to
import { ethers } from "hardhat";

async function main() {
    const NFTAmount = ethers.utils.parseEther('0.5');

    

    const nftGoerliContract = '0x501794785135218aA6681dd286aB8774991F1c95';

    const nftContract = await ethers.getContractAt(
        'ElonGorilla',
        nftGoerliContract
    );

    const firstMint = await nftContract.safeMint(
        '0xAA5AC6134633183C81436499fb38748D128e039b',
        'QmNzHMknTdqeTYC1NiLmy6R5L5uVoX7th7nDgJzdwYqdzg'
    )

    const nftMintTnxReceipt = await firstMint.wait();
    console.log('Here is your Minting Receipt', nftMintTnxReceipt);


}

// Transaction Hash 0xed9f7208fdd44c47f3603824748ee6371f2daa6aa858ac803d47ae32245d9722

/* 
Here is your Minting Receipt {
  to: '0x501794785135218aA6681dd286aB8774991F1c95',
  from: '0xAA5AC6134633183C81436499fb38748D128e039b',
  contractAddress: null,
  transactionIndex: 5,
  gasUsed: BigNumber { value: "167278" },
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000004000000020000000000000000000800000000000000000000000010000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000020000000000400000000000000000000000100000000000000000000000000100000',
  blockHash: '0x6e5c7efb0e6ffce00c5b11d0f73db34f0247fa894f7c0b930a44a5258dbc2482',
  transactionHash: '0xed9f7208fdd44c47f3603824748ee6371f2daa6aa858ac803d47ae32245d9722',
  logs: [
    {
      transactionIndex: 5,
      blockNumber: 7508360,
      transactionHash: '0xed9f7208fdd44c47f3603824748ee6371f2daa6aa858ac803d47ae32245d9722',
      address: '0x501794785135218aA6681dd286aB8774991F1c95',
      topics: [Array],
      data: '0x',
      logIndex: 3,
      blockHash: '0x6e5c7efb0e6ffce00c5b11d0f73db34f0247fa894f7c0b930a44a5258dbc2482'
    }
  ],
  blockNumber: 7508360,
  confirmations: 1,
  cumulativeGasUsed: BigNumber { value: "793854" },
  effectiveGasPrice: BigNumber { value: "1500000036" },
  status: 1,
  type: 2,
  byzantium: true,
  events: [
    {
      transactionIndex: 5,
      blockNumber: 7508360,
      transactionHash: '0xed9f7208fdd44c47f3603824748ee6371f2daa6aa858ac803d47ae32245d9722',
      address: '0x501794785135218aA6681dd286aB8774991F1c95',
      topics: [Array],
      data: '0x',
      logIndex: 3,
      blockHash: '0x6e5c7efb0e6ffce00c5b11d0f73db34f0247fa894f7c0b930a44a5258dbc2482',
      args: [Array],
      decode: [Function (anonymous)],
      event: 'Transfer',
      eventSignature: 'Transfer(address,address,uint256)',
      removeListener: [Function (anonymous)],
      getBlock: [Function (anonymous)],
      getTransaction: [Function (anonymous)],
      getTransactionReceipt: [Function (anonymous)]
    }
  ]
}

*/
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });