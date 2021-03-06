const { ethers } = require("hardhat");

async function main() {
  // CakeContract
  // const CakeContract = await ethers.getContractFactory("contracts/CakeToken.sol:CakeToken");
  // const cakeContract = await CakeContract.deploy();
  // await cakeContract.deployed();
  // console.log(`Cake Contract deployed to: ${cakeContract.address}`);
  // const _token = cakeContract.address;
  const _token = '0x70e7182D9176F866eAaEE1ce4c573027DA7Cd939';

  // ReceiptContract
  // const ReceiptContract = await ethers.getContractFactory("contracts/ReceiptToken.sol:SyrupBar");
  // const receiptContract = await ReceiptContract.deploy(
  //   _token
  // );
  // await receiptContract.deployed();
  // console.log(`Receipt Contract deployed to: ${receiptContract.address}`);
  // const _receiptToken = receiptContract.address;
  const _receiptToken = '0x327b0F261bF66862e4e4A6ea10280f93B515C9fd';

  // MasterChef
  // const MasterCheifContract = await ethers.getContractFactory("contracts/Masterchef.sol:MasterChef");

  // const _devaddr = '0xb9fa21a62fc96cb2ac635a051061e2e50d964051'; //tmp
  // const _cakePerBlock = '40000000000000000000'; //tmp
  // const _startBlock1 = '703820'; //tmp
  // const masterCheifContract = await MasterCheifContract.deploy(
  //   _token,
  //   _receiptToken,
  //   _devaddr,
  //   _cakePerBlock,
  //   _startBlock1
  // );
  // await masterCheifContract.deployed();
  // console.log(`MasterCheif Contract Contract deployed to: ${masterCheifContract.address}`);
  // const _masterchef = masterCheifContract.address;
  const _masterchef = '0x276c7CDEc273bdf4972835798C03BC019056c01b';

  const _admin = '0x35f16A46D3cf19010d28578A8b02DfA3CB4095a1'; //tmp
  const _treasury = '0x35f16A46D3cf19010d28578A8b02DfA3CB4095a1'; //tmp
  const _startBlock = '134680200'; //tmp 16,167,619
  const _endBlock = '136696200'; //tmp


  const IFOContract = await ethers.getContractFactory("IFOPool");

  const ifoContract = await IFOContract.deploy(
    _token,
    _receiptToken,
    _masterchef,
    _admin,
    _treasury,
    _startBlock,
    _endBlock
  );

  await ifoContract.deployed();
  console.log(`Contract deployed to: ${ifoContract.address}`);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error("failed to deploy Contract", error);
    process.exit(1);
  });
