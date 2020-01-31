import React, { Component } from 'react';
import './projects.css';
import icoImage from './prueba.jpg';


export default class UserProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: this.props.project,
      startDate: this.props.project.t_init,
      endDate: this.props.project.t_end,
      state: this.props.project.state,
      addresses : {token: this.props.project.token, ico: this.props.project.ico},
      message: "",
      messageAddressToken: "",
      messageAddressIco: ""


    };
    

  }

  componentDidMount(){
    console.log(this.state.startDate)
    //need to this the * because of differents needs between blockchain and js 
    const t_init = new Date(this.state.startDate*1000);
    const t_end = new Date(this.state.endDate*1000);

    this.setState(
      {
        startDate: t_init.toLocaleDateString(),
        endDate: t_end.toLocaleDateString()

      })
  }

  handleOnClick = () => {
    if(this.state.state === 'deployed'){
      const option = window.confirm('El proyecto ya ha sido desplegado, si continua con el proceso un nuevo smart contract sera desplegado.\n¿Desea continuar? ');
      if(option === false){return 0;}
    }
    this.setState({message: 'El proceso se ha iniciado esto puede llevar unos minutos...'})
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
      this.setState({state: 'deployed'})
      return res.json();
      } 
      }).then(addresses => { 

        this.setState({addresses});

        const messageAddressToken = 'El token se encuentra en la dirección: ' + this.state.addresses.token;
        const messageAddressIco = 'El token se encuentra en la dirección: ' + this.state.addresses.ico; 
        
        this.setState(
          { message: 'Tu proyecto ha sido desplegado correctamente',
            messageAddressToken: messageAddressToken ,
            messageAddressIco: messageAddressIco
        });
        
        
     });
    
   
  }

  render(){
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
            <li className="">Wallet: {this.props.project.wallet}</li>
            <li className="">Precio de cada token: {this.props.project.tokensValue} ether</li>

          </ul>
          </div>
          <div className="row">
          <button className="btn  btn-primary " onClick={ () => this.handleOnClick()} >Desplegar</button>
          </div>
        </div>
      </div>
      {/* /.row */}
      <hr className="my-4" />
      <h3 style={{textAlign:'center'}}>{this.state.message}</h3>
      <p>{this.state.messageAddressToken}</p>
      <p>{this.state.messageAddressIco}</p>
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
            <li className="">Wallet: {this.props.project.wallet}</li>
            <li className="">Precio de cada token: {this.props.project.tokensValue} ether</li>
            <li className="">Max ether: {this.props.project.cap}</li>
          </ul>
          </div>
          <div className="row">
          <button className="btn  btn-primary " onClick={ () => this.handleOnClick()} >Desplegar</button>          </div>
        </div>
      </div>
      {/* /.row */}
      <hr className="my-4" />
      <h3 style={{textAlign:'center'}}>{this.state.message}</h3>
      <p>{this.state.messageAddressToken}</p>
      <p>{this.state.messageAddressIco}</p>
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
            <li className="">Wallet: {this.props.project.wallet}</li>
            <li className="">Precio de cada token: {this.props.project.tokensValue} ether</li>
            <li className="">Max ether: {this.props.project.cap}</li>
            <li className="">Fecha de comienzo: {this.state.startDate}</li>
            <li className="">Fecha de finalización: {this.state.endDate}</li>
          </ul>
          </div>
          <div className="row">
          <button className="btn  btn-primary " onClick={ () => this.handleOnClick()} >Desplegar</button>          </div>
        </div>
      </div>
      {/* /.row */}
      <hr className="my-4" />
      <h3 style={{textAlign:'center'}}>{this.state.message}</h3>
      <p>{this.state.messageAddressToken}</p>
      <p>{this.state.messageAddressIco}</p>
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
            <li className="">Wallet: {this.props.project.wallet}</li>
            <li className="">Precio de cada token: {this.props.project.tokensValue} ether</li>
            <li className="">Number of tokens: {this.props.project.cap}</li>
            <li className="">Fecha de comienzo: {this.props.project.t_init}</li>
            <li className="">Fecha de finalización: {this.props.project.t_end}</li>
          </ul>
          </div>
          <div className="row">
          <button className="btn  btn-primary " onClick={ () => this.handleOnClick()} >Desplegar</button>          </div>
        </div>
      </div>
      {/* /.row */}
      <hr className="my-4" />
      <h3 style={{textAlign:'center'}}>{this.state.message}</h3>
      <p>{this.state.messageAddressToken}</p>
      <p>{this.state.messageAddressIco}</p>
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
        <button className="btn  btn-primary " >Desplegar</button>
      </div>
    </div>
    {/* /.row */}
    <hr />
  </div>


  );
  }
  };
};