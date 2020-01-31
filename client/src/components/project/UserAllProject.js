import React, { Component } from 'react';
import web3 from '../../helpers/web3';
import icoImage from './prueba.jpg';

import './projects.css';

export default class UserProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: this.props.project,
      startDate: this.props.project.t_init,
      endDate: this.props.project.t_end,
      value : 1,
      icoAddress : this.props.project.icoAddress,
      tokenAddress : this.props.project.tokenAddress,
      nTokens: this.props.project.nTokens,
      tokensValue: this.props.project.tokensValue,
      yourTokens: 0,
      tokenABI: this.props.project.tokenABI,
      tokenContract: null,
      accounts: []


    };
    

  }

  onSubmit = (event) => {
    event.preventDefault();
    web3.eth.sendTransaction({to:this.state.icoAddress,
      from: this.state.accounts[0], 
     value:web3.utils.toWei(this.state.value.toString(), "ether")}
      ,function (err, res){
        console.log(res);

      }).then(() => {
        this.state.tokenContract.methods.balanceOf(this.state.accounts[0]).call().then(
          (balance) => this.setState({yourTokens: balance}) )
      });
    
   
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  async componentDidMount() {
    if(web3 != null && this.state.project.state === 'deployed'){
    const accounts = await web3.eth.getAccounts();
    //const abi = JSON.stringify(this.state.tokenABI);
    const abi = [  
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x06fdde03"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "spender",
            "type": "address"
          },
          {
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x095ea7b3"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x18160ddd"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "sender",
            "type": "address"
          },
          {
            "name": "recipient",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x23b872dd"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint8"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x313ce567"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "spender",
            "type": "address"
          },
          {
            "name": "addedValue",
            "type": "uint256"
          }
        ],
        "name": "increaseAllowance",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x39509351"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x40c10f19"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x70a08231"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x95d89b41"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "addMinter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x983b2d56"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "renounceMinter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x98650275"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "spender",
            "type": "address"
          },
          {
            "name": "subtractedValue",
            "type": "uint256"
          }
        ],
        "name": "decreaseAllowance",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xa457c2d7"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "recipient",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xa9059cbb"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "isMinter",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xaa271e1a"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xdd62ed3e"
      },
      {
        "inputs": [
          {
            "name": "_name",
            "type": "string"
          },
          {
            "name": "_symbol",
            "type": "string"
          },
          {
            "name": "_decimals",
            "type": "uint8"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "account",
            "type": "address"
          }
        ],
        "name": "MinterAdded",
        "type": "event",
        "signature": "0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "account",
            "type": "address"
          }
        ],
        "name": "MinterRemoved",
        "type": "event",
        "signature": "0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event",
        "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event",
        "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
      }
    ];
    console.log(abi);
    console.log(this.state.tokenABI);
    const tokenContract = new web3.eth.Contract(abi, this.state.tokenAddress); 
    console.log(tokenContract);
    let yourTokens = await tokenContract.methods.balanceOf(accounts[0]).call();
    console.log(yourTokens.toString());
    this.setState({ accounts, tokenContract, yourTokens });
    }
    const t_init = new Date(this.state.startDate*1000);
    const t_end = new Date(this.state.endDate*1000);

    this.setState(
      {
        startDate: t_init.toLocaleDateString(),
        endDate: t_end.toLocaleDateString()

      })
  }

  render(){
    if(this.state.project.state != 'deployed'){return null}
    switch(this.props.project.type) {

      case 1: return(
      <div className="container project_container" style={{marginTop: "40px", paddingTop: "20px"}}>
      {/* Project One */}
      <div className="row">
        <div className="col-md-5">
          <a href="#">
            <img className="img-fluid rounded mb-3 mb-md-0" src={icoImage} alt="" />
          </a>
        </div>
        <div className="col-md-7">
          <h3>{this.props.project.name}</h3>
          <p>{this.props.project.description}</p>
          <div className="row">
          <h5>Detalles</h5>
          </div>
          <div className="row">
          <ul className="" >
            <li className="">Dirección del token: {this.state.tokenAddress}</li>
            <li className="">Dirección de la ico: {this.state.icoAddress}</li>
            <li className="">Precio de cada token: {this.props.project.tokensValue} ether</li>
          </ul>
          </div>
          <div className="row">
          <h3>Tienes {web3.utils.fromWei(this.state.yourTokens.toString(), 'ether')} tokens</h3>
          </div>
          <div className="row">
          <form className="form" onSubmit={this.onSubmit}>
          <div className="form-label-group">
           <input type="number" name="value" id="inputNumberTokens" className="form-control" placeholder="ether" step={0.01} min={0.01} defaultValue={1} required onChange={this.handleInputChange} />
           <label htmlFor="inputNumberTokens">Ether</label>
           </div>
          <button className="btn  btn-primary " type="submit" >Comprar</button>
          </form>
          </div>
        </div>
      </div>
      {/* /.row */}
      <hr />
    </div>


    );
    case 2: return(
      <div className="container project_container" style={{marginTop: "40px", paddingTop: "20px"}}>
      {/* Project One */}
      <div className="row">
        <div className="col-md-5">
          <a href="#">
            <img className="img-fluid rounded mb-3 mb-md-0" src={icoImage} alt="" />
          </a>
        </div>
        <div className="col-md-7">
          <h3>{this.props.project.name}</h3>
          <p>{this.props.project.description}</p>
          <div className="row">
          <h5>Detalles</h5>
          </div>
          <div className="row">
          <ul className="" >
            <li className="">Dirección del token: {this.state.tokenAddress}</li>
            <li className="">Dirección de la ico: {this.state.icoAddress}</li>
            <li className="">Hard cap: {this.props.project.cap}</li>
            <li className="">Precio de cada token: {this.props.project.tokensValue} ether</li>
            <li className="">Número maximo de tokens: {this.props.project.nTokens}</li>
          </ul>
          </div>
          <div className="row">
          <h3>Tienes {web3.utils.fromWei(this.state.yourTokens.toString(), 'ether')} tokens</h3>
          </div>
          <div className="row">
          <form className="form" onSubmit={this.onSubmit}>
          <div className="form-label-group">
          <input type="number" name="value" id="inputNumberTokens" className="form-control" placeholder="ether" step={0.01} min={0.01} defaultValue={1} required onChange={this.handleInputChange} />           <label htmlFor="inputNumberTokens">Ether</label>
           </div>
          <button className="btn  btn-primary " type="submit" >Comprar</button>
          </form>          </div>
        </div>
      </div>
      {/* /.row */}
      <hr />
    </div>


    );
    case 3: return(
      <div className="container project_container" style={{marginTop: "40px", paddingTop: "20px"}}>
      {/* Project One */}
      <div className="row">
        <div className="col-md-5">
          <a href="#">
            <img className="img-fluid rounded mb-3 mb-md-0" src={icoImage} alt="" />
          </a>
        </div>
        <div className="col-md-7">
          <h3>{this.props.project.name}</h3>
          <p>{this.props.project.description}</p>
          <div className="row">
          <h5>Detalles</h5>
          </div>
          <div className="row">
          <ul className="" >
            <li className="">Dirección del token: {this.state.tokenAddress}</li>
            <li className="">Dirección de la ico: {this.state.icoAddress}</li>
            <li className="">Hard cap: {this.props.project.cap}</li>
            <li className="">Precio de cada token: {this.props.project.tokensValue} ether</li>
            <li className="">Número maximo de tokens: {this.props.project.nTokens}</li>
            <li className="">Fecha de comienzo: {this.state.startDate}</li>
            <li className="">Fecha de finalización: {this.state.endDate}</li>
          </ul>
          </div>
          <div className="row">
          <h3>Tienes {web3.utils.fromWei(this.state.yourTokens.toString(), 'ether')} tokens</h3>
          </div>
          <div className="row">
          <form className="form" onSubmit={this.onSubmit}>
          <div className="form-label-group">
          <input type="number" name="value" id="inputNumberTokens" className="form-control" placeholder="ether" step={0.01} min={0.01} defaultValue={1} required onChange={this.handleInputChange} />           <label htmlFor="inputNumberTokens">Ether </label>
           </div>
          <button className="btn  btn-primary " type="submit" >Comprar</button>
          </form>          </div>
        </div>
      </div>
      {/* /.row */}
      <hr />
    </div>


    );
    case 4: return(
      <div className="container project_container" style={{marginTop: "40px", paddingTop: "20px"}}>
      {/* Project One */}
      <div className="row">
        <div className="col-md-5">
          <a href="#">
            <img className="img-fluid rounded mb-3 mb-md-0" src={icoImage} alt="" />
          </a>
        </div>
        <div className="col-md-7">
          <h3>{this.props.project.name}</h3>
          <p>{this.props.project.description}</p>
          <div className="row">
          <h5>Detalles</h5>
          </div>
          <div className="row">
          <ul className="" >
            <li className="">Dirección del token: {this.state.tokenAddress}</li>
            <li className="">Dirección de la ico: {this.state.icoAddress}</li>
            <li className="">Hard cap: {this.props.project.cap}</li>
            <li className="">Precio de cada token: {this.props.project.tokensValue} ether</li>
            <li className="">Número maximo de tokens: {this.props.project.nTokens}</li>
            <li className="">Fecha de comienzo: {this.state.startDate}</li>
            <li className="">Fecha de finalización: {this.state.endDate}</li>
          </ul>
          </div>
          <div className="row">
          <h3>Tienes {web3.utils.fromWei(this.state.yourTokens.toString(), 'ether')} tokens</h3>
          </div>
          <div className="row">
          <form className="form" onSubmit={this.onSubmit}>
          <div className="form-label-group">
          <input type="number" name="value" id="inputNumberTokens" className="form-control" placeholder="ether" step={0.01} min={0.01} defaultValue={1} required onChange={this.handleInputChange} />           <label htmlFor="inputNumberTokens">Ether </label>
           </div>
          <button className="btn  btn-primary " type="submit" >Comprar</button>
          </form>          </div>
        </div>
      </div>
      {/* /.row */}
      <hr />
    </div>


    );
    default: return(
    <div className="container project_container" style={{marginTop: "40px",paddingTop: "20px"}}>
    {/* Project One */}
    <div className="row">
      <div className="col-md-5">
        <a href="#">
          <img className="img-fluid rounded mb-3 mb-md-0" src={icoImage} alt="" />
        </a>
      </div>
      <div className="col-md-7">
        <h3>{this.props.project.name}</h3>
        <p>{this.props.project.description}</p>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form-label-group">
           <input type="number" name="value" id="inputNumberTokens" className="form-control" placeholder="ether" defaultValue={1} required onChange={this.handleInputChange} />
           <label htmlFor="inputNumberTokens">Ether</label>
           </div>
          <button className="btn  btn-primary " type="submit" >Comprar</button>
          </form>      </div>
    </div>
    {/* /.row */}
    <hr />
  </div>


  );
  }
  };
};