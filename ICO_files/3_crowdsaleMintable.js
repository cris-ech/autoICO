const MyToken = artifacts.require("IcoToken");
const MyCrowdsale = artifacts.require("IcoCrowdsale");
const values = require("./values.js");


module.exports = async function(deployer, network, accounts) {

  
  const rate = values.rate ;
  const wallet = values.wallet;
 
  await deployer.deploy(MyCrowdsale, rate, wallet, MyToken.address);

  const myCrowdsale = await MyCrowdsale.deployed();
  const myToken = await MyToken.deployed();
  await myToken.addMinter(MyCrowdsale.address);
  await myToken.renounceMinter();

  const numberTokens = await myToken.balanceOf(myCrowdsale.address);
  console.log("Crowdsale tiene : " + numberTokens);
};