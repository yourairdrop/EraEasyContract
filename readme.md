为了让更多的人熟悉era的合约开发，这里做了一个简单的教程
本repo为大家制作了一个简单的era合约，通过在合约中计数完成交互，gas为0.3的时候，每次交互费用大约是0.2usd
（点击以下链接了解当前gas情况:https://cointool.app/gasPrice/zksync-era)
如想在部署前先尝试合约，可以使用16进制的方法交互
方法是在metamask的高级选项中打开16进制
然后给一下地址发送0eth，16进制字段为hex等号后的一串字符
contract_address = 0x737dE2e406571231663109A5fF0a9c1E1c448335
hex = 0x8ada066e

era不同于arb和op，无法在remix中直接部署
所以需要在本地安装hardhat并部署成era的开发环境，整个过程会有点困难，但是一旦完成环境的安装，后面的部署会非常舒适
这里会提供一个简单的操作方法，具体方法可以参考era官方文档：https://era.zksync.io/docs/dev/building-on-zksync/hello-world.html#prerequisites

因为本人使用的mac，所以这里以mac为例，无论是mac还是windows，安装过程中如遇到困难，可咨询ChatGPT
首先打开终端，逐步安装需要的程序（//代表注释，不用运行）：
//安装homebrew，mac很重要的一个开源包管理器
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
//安装nvm，一个nodejs安装工具
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
//安装16.20版本的nodejs，JavaScript的一种运行环境
nvm install 16.20.0
//安装yarn，一个JavaScript的包管理
npm install -g yarn
//下面在自己熟悉的地方新建一个文件夹，通过右键服务里的终端命令直接到达文件夹下,安装yarn和用于era的hardhat
yarn init -y
yarn add -D typescript ts-node ethers@^5.7.2 zksync-web3 hardhat @matterlabs/hardhat-zksync-solc @matterlabs/hardhat-zksync-deploy

现在你已经完成了环境的安装，把这个项目库的文件直接下载到新建的文件夹下面。我们能看到两个文件夹，分别是contract（合约文件放这里面）和deploy（编译脚本放这里），和一个环境配置文件hardhat.config.ts
deploy文件夹中有一个deploy-counter.ts文件，"your_private_key"是你钱包的私钥，需要自行填写，其他的文件暂时都不用管
我们直接运行‘yarn hardhat compile’命令编译合约，会看到生成了一个'artifacts-zk'文件夹，这是编译后机器能够读懂的语言。
再运行'npx hardhat deploy-zksync'，不出意外，会在终端看到合约已经生成，大概会有这么一行字：Counter was deployed to 0x737dE2e406571231663109A5fF0a9c1E1c448335
接下来，就可以用自己的钱包发送16进制字段进行交互了


