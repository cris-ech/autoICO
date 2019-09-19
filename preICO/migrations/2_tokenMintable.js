const MyToken = artifacts.require("IcoToken");
const values = require("./values.js");


module.exports = async function(deployer, network, accounts) {

  const _name = values.name;
  const _symbol = values.symbol;
  const _decimals = values.decimals;


  await deployer.deploy(MyToken, _name, _symbol, _decimals);

};