const MyToken = artifacts.require("IcoToken");


module.exports = async function(deployer, network, accounts) {

  const _name = "name_r";
  const _symbol = "symbol_r";
  const _decimals = decimals_r;


  await deployer.deploy(MyToken, _name, _symbol, _decimals);

};