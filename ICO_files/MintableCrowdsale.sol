pragma solidity ^0.5.0;

import "./MintableToken.sol";
import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";
import "@openzeppelin/contracts/crowdsale/emission/MintedCrowdsale.sol";



contract IcoCrowdsale is Crowdsale, MintedCrowdsale {
  constructor(
    uint256 rate,
    address payable wallet,
    IcoToken token
  )
  MintedCrowdsale()
  Crowdsale(rate,wallet,token)
  public
  {

  }


}