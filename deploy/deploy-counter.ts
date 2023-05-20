import { Wallet } from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Counter contract`);

  // 初始化钱包 填入私钥
  const wallet = new Wallet("your_private_key");

  // 创建deployer
  const deployer = new Deployer(hre, wallet);
  // 设置部署的合约名
  const artifact = await deployer.loadArtifact("Counter");

  // 计算gas fee
  const deploymentFee = await deployer.estimateDeployFee(artifact, []);

  //部署合约
  const counterContract = await deployer.deploy(artifact, []);

  const contractAddress = counterContract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
