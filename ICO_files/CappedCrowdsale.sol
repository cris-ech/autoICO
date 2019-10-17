pragma solidity ^0.5.0;

import "./MintableToken.sol";
import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";
import "@openzeppelin/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "@openzeppelin/contracts/crowdsale/validation/CappedCrowdsale.sol";


contract IcoCrowdsale is Crowdsale, MintedCrowdsale, CappedCrowdsale {
  constructor(
    uint256 rate,
    address payable wallet,
    IcoToken token,
    uint256 cap
  )
  MintedCrowdsale()
  Crowdsale(rate,wallet,token)
  CappedCrowdsale(cap)
  public
  {

  }


}