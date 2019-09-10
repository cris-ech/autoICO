import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    }
  }
  
  componentDidMount() {
    fetch('/api/home')
      .then(res => res.text())
      .then(res => this.setState({message: res}));
  }
  
  render() {
    return (
    <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src="img/home.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">¿Como funciona?</h2>
                <p>¿Tienes una idea relacionada con Blockchain?¿Quieres lanzar una ICO para financiarte? AutoICO
                  hara el camino mucho mas facil para ti, registrate y crea un nuevo proyecto, lanza tu ICO sin 
                  escribir una sola linea de codigo, dejanos eso a nosotros. Ponemos a tu disposicion varias opciones 
                  en la creacion de tu ICO para que se adapte a tus necesidades. Simple, rapido, economico ¿Estas listo?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}