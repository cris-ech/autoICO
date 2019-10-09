import React, { Component } from 'react';
import './projects.css';

export default class UserProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: this.props.project

    };
    

  }

  handleOnClick = () => {
    fetch('/projects/deployProject', {
      method: 'POST',
      body: JSON.stringify(this.state.project),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.status === 200){
      console.log(res);
      }
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
          <h5>Details</h5>
          </div>
          <div className="row">
          <ul className="" >
            <li className="">Wallet: {this.props.project.wallet}</li>
            <li className="">Number of tokens: {this.props.project.cap}</li>
          </ul>
          </div>
          <div className="row">
          <button className="btn  btn-primary " onClick={ () => this.handleOnClick()} >Deploy</button>
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
            <li className="">Wallet: {this.props.project.wallet}</li>
            <li className="">Number of tokens: {this.props.project.cap}</li>
          </ul>
          </div>
          <div className="row">
          <button className="btn  btn-primary " onClick={ () => this.handleOnClick()} >Deploy</button>          </div>
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
            <li className="">Wallet: {this.props.project.wallet}</li>
            <li className="">Number of tokens: {this.props.project.cap}</li>
            <li className="">Start Date: {this.props.project.t_init}</li>
            <li className="">End Date: {this.props.project.t_end}</li>
          </ul>
          </div>
          <div className="row">
          <button className="btn  btn-primary " onClick={ () => this.handleOnClick()} >Deploy</button>          </div>
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
            <li className="">Wallet: {this.props.project.wallet}</li>
            <li className="">Number of tokens: {this.props.project.cap}</li>
            <li className="">Start Date: {this.props.project.t_init}</li>
            <li className="">End Date: {this.props.project.t_end}</li>
          </ul>
          </div>
          <div className="row">
          <button className="btn  btn-primary " onClick={ () => this.handleOnClick()} >Deploy</button>          </div>
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
        <button className="btn  btn-primary " >Deploy</button>
      </div>
    </div>
    {/* /.row */}
    <hr />
  </div>


  );
  }
  };
};