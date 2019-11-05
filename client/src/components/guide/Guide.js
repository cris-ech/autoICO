import React, { Component } from 'react';

import '../auth/auth.css';

export default class Register extends Component {
  constructor(props) {
    super(props)
  }

  


  render() {
    return (
      <div className="section login-container">
      <div className="row">
        <div className="col-lg-5 col-xl-5 col-md-6 col-sm-7 col-xs-8 mx-auto">
          <div className="card card-signin flex-row my-5">
            
            <div className="card-body">
              <h5 className="card-title text-center">Guía de uso</h5>
              <div >
                    <div class="row works-step">
                        <div className='col-2-6'>1</div>
                        <p className='col'>Completa tu registro para poder acceder a todas las funciones.</p>
                    </div>
                    <div class="row works-step">
                        <div className='col-2-6'>2</div>
                        <p className='col'>En la pestaña "crear" podras iniciar el proceso de creacion de tu ICO, puediendo eligir entre 4 tipos distintos.</p>
                    </div>
                    <div class="row works-step">
                        <div className='col-2-6'>3</div>
                        <p className='col'>Una vez completado el proceso de creación solo tienes que ir a "mis proyectos" y seleccionar desplegar para que tu ICO sea lanzada en la blockchain.</p>
                    </div>
                </div>

            </div>
          </div>
          
        </div>
      </div>
     
    </div>
    
    );
  }
}