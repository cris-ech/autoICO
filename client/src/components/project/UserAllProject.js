import React, { Component } from 'react';
import web3 from '../../helpers/web3';
import './projects.css';

export default class UserProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: this.props.project,
      startDate :  Date(this.props.project.t_init),
      endDate :  Date(this.props.project.t_end),
      value : 1,
      icoAddress : this.props.project.icoAddress,
      tokenAddress : this.props.project.tokenAddress,
      accounts: []


    };
    

  }

  handleOnClick = () => {
    web3.eth.sendTransaction({to:this.state.icoAddress,
      from: this.state.accounts[0], 
     value:web3.utils.toWei(this.state.value.toString(), "ether")}
      ,function (err, res){
        console.log(res);
      });
    
   
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();

    this.setState({ accounts });
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
          </div>
          <div className="row">
          <button className="btn  btn-primary " onClick={ () => this.handleOnClick()} >Buy</button>
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
          <h5>Details</h5>
          </div>
          <div className="row">
          <ul className="" >
            <li className="">Max ether: {this.props.project.cap}</li>
          </ul>
          </div>
          <div className="row">
          <button className="btn  btn-primary " onClick={ () => this.handleOnClick()} >Buy</button>          </div>
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
          <h5>Details</h5>
          </div>
          <div className="row">
          <ul className="" >
            <li className="">Max ether: {this.props.project.cap}</li>
            <li className="">Start Date: {this.state.startDate}</li>
            <li className="">End Date: {this.state.endDate}</li>
          </ul>
          </div>
          <div className="row">
          <button className="btn  btn-primary " onClick={ () => this.handleOnClick()} >Buy</button>          </div>
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
          <h5>Details</h5>
          </div>
          <div className="row">
          <ul className="" >
            <li className="">Max ether: {this.props.project.cap}</li>
            <li className="">Start Date: {this.state.startDate}</li>
            <li className="">End Date: {this.state.endDate}</li>
          </ul>
          </div>
          <div className="row">
          <button className="btn  btn-primary " onClick={ () => this.handleOnClick()} >Buy</button>          </div>
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
        <button className="btn  btn-primary " >Buy</button>
      </div>
    </div>
    {/* /.row */}
    <hr />
  </div>


  );
  }
  };
};