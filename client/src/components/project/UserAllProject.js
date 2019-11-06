import React, { Component } from 'react';
import web3 from '../../helpers/web3';

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
      nTokens: this.props.nTokens,
      tokensValue: this.props.tokensValue,
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
      });
    
   
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  async componentDidMount() {
    if(web3 != null){
    const accounts = await web3.eth.getAccounts();

    this.setState({ accounts });
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
    switch(this.props.project.type) {

      case 1: return(
      <div className="container project_container" style={{marginTop: "40px", paddingTop: "20px"}}>
      {/* Project One */}
      <div className="row">
        <div className="col-md-5">
          <a href="#">
            <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/500x300" alt="" />
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
            <li className="">Precio de cada token: {this.props.project.tokensValue} ether</li>
          </ul>
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
            <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/500x300" alt="" />
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
            <li className="">Hard cap: {this.props.project.cap}</li>
            <li className="">Precio de cada token: {this.props.project.tokensValue} ether</li>
            <li className="">Número maximo de tokens: {this.props.project.nTokens}</li>
          </ul>
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
            <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/500x300" alt="" />
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
            <li className="">Hard cap: {this.props.project.cap}</li>
            <li className="">Precio de cada token: {this.props.project.tokensValue} ether</li>
            <li className="">Número maximo de tokens: {this.props.project.nTokens}</li>
            <li className="">Fecha de comienzo: {this.state.startDate}</li>
            <li className="">Fecha de finalización: {this.state.endDate}</li>
          </ul>
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
            <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/500x300" alt="" />
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
            <li className="">Hard cap: {this.props.project.cap}</li>
            <li className="">Precio de cada token: {this.props.project.tokensValue} ether</li>
            <li className="">Número maximo de tokens: {this.props.project.nTokens}</li>
            <li className="">Fecha de comienzo: {this.state.startDate}</li>
            <li className="">Fecha de finalización: {this.state.endDate}</li>
          </ul>
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
          <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/500x300" alt="" />
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