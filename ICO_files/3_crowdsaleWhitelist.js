const MyToken = artifacts.require("IcoToken");
const MyCrowdsale = artifacts.require("IcoCrowdsale");
const values = require("./values.js");

module.exports = async function(deployer, network, accounts) {

  
  const rate = values.rate ;
  const wallet = values.wallet;
  const cap = new web3.utils.BN(web3.utils.toWei(values.cap.toString(),'ether'));
  const openingTime = values.t_init ;
  const closingTime = values.t_end ;
 
  await deployer.deploy(MyCrowdsale, rate, wallet, MyToken.address, cap, openingTime, closingTime);

  const myCrowdsale = await MyCrowdsale.deployed();
  const myToken = await MyToken.deployed();
  await myToken.addMinter(MyCrowdsale.address);
  await myToken.renounceMinter();

  const numberTokens = await myToken.balanceOf(myCrowdsale.address);
  console.log("Crowdsale tiene : " + numberTokens);
};