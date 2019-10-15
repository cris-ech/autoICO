import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
    
  }


  


  render() {
    if(window.location.pathname==='/register'
    || window.location.pathname==='/login' 
    || window.location.pathname==='/project'
    || window.location.pathname==='/user-projects'
    || window.location.pathname==='/all-projects'){
      return <div style={{paddingBottom: '67px'}}></div>;
    }
    return (
    <header className="masthead text-center text-white">
      <div className="masthead-content">
        <div className="container">
          <h1 className="masthead-heading mb-0">Crea, Lanza, Innova </h1>
          <h1>{this.state.url}</h1>
          <p>{this.state.hidden}</p>
          <h2 className="masthead-subheading mb-0">Sin dificultades, Sin programacion</h2>
          <h3>AUTOICO</h3>
          <a href="register" className="btn btn-primary btn-xl rounded-pill mt-5">Pruebalo</a>
        </div>
      </div>
      {/*
      <div className="bg-circle-1 bg-circle" />
      <div className="bg-circle-2 bg-circle" />
      <div className="bg-circle-3 bg-circle" />
      <div className="bg-circle-4 bg-circle" />*/}
    </header>
    
    );
  }
}