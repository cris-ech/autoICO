pragma solidity ^0.5.0;

import "./MintableToken.sol";
import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";
import "@openzeppelin/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "@openzeppelin/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "@openzeppelin/contracts/crowdsale/validation/TimedCrowdsale.sol";
import "@openzeppelin/contracts/crowdsale/validation/WhitelistCrowdsale.sol";



contract IcoCrowdsale is Crowdsale, MintedCrowdsale, CappedCrowdsale, TimedCrowdsale, WhitelistCrowdsale {
  constructor(
    uint256 rate,
    address payable wallet,
    IcoToken token,
    uint256 cap,
    uint256 openingTime,
    uint256 closingTime
  )
  MintedCrowdsale()
  Crowdsale(rate,wallet,token)
  CappedCrowdsale(cap)
  TimedCrowdsale(openingTime, closingTime)
  public
  {

  }


}