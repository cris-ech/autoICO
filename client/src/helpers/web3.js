import Web3 from 'web3';


  let web3
  if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try {
          window.ethereum.enable().then(function() {console.log(web3); return web3});
      } catch (e) {}
  } else if (window.web3) {
      web3 = new Web3(web3.currentProvider);
      console.log("segundo if")
      console.log(web3);
      
  } else {

      //alert('You have to install MetaMask to be able to access to all the functions!');
      web3 = null ;
  }

 


export default web3;