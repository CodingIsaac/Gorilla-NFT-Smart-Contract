import { ethers } from "hardhat";

async function main() {
  const deployNFT = await ethers.getContractFactory('ElonGorilla');
  const NFT = await deployNFT.deploy();
  await NFT.deployed();

  console.log('NFT deployed to:', NFT.address);
  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
