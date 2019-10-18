import Web3 from 'web3';

function web3Connection(){
  let web3
  if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try {
          window.ethereum.enable().then(function() {return web3});
      } catch (e) {}
  } else if (window.web3) {
      web3 = new Web3(web3.currentProvider);
      return web3;
  } else {
      alert('You have to install MetaMask to be able to access to all the functions!');
      return null ;
  }

 
}

export default web3Connection();