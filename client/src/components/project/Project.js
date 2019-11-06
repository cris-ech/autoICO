import React, { Component } from 'react';
import FormProject from './formProject';

import '../auth/auth.css';

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      acronym: "",
      description: "",
      message: "",
      type: "",
      visibility: "hidden",
      decimals: 1,
      cap: 1,
      wallet : "",
      t_init: "",
      t_end: "",
      scrollPosition: 0,
      myDivToFocus: React.createRef()

    };

  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleScroll = (event) => {
    this.setState({
      scrollPosition: window.pageYOffset
    })
  };

  

  handleOnClick = (type) => {
    function prueba(Focus) {
      if(Focus.current){
        Focus.current.scrollIntoView({ 
           behavior: "smooth", 
           block: "nearest"
        })
    }
    };
    
    //.current is verification that your element has rendered
    this.setState({ 
      type: type, 
      visibility: " ",
      myDivToFocus: React.createRef()
    }, () => prueba(this.state.myDivToFocus)); 
    //this.setState({myDivToFocus: React.createRef()})
    //prueba(this.state.myDivToFocus);

}



  onSubmit = (event) => {
    event.preventDefault();
    const project = {
      name: this.state.name,
      acronym: this.state.acronym,
      description: this.state.description
      

    };
    fetch('projects/newProject', {
      method: 'POST',
      body: JSON.stringify(project),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.setState({message: 'Tu proyecto ha sido creado !'})

      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Ha ocurrido un error porfavor vuelve a intentarlo');
    })
    console.log(this.state);
  }


  render() {
    return (
      <div className="section login-container" style={{overflow:"auto"}}>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* Free Tier */}
      <div className="col " style={{paddingBottom: "20px"}}>
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Basic</h5>
            <h6 className="card-price text-center">Minted Crowdsale</h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check" /></span>Nombre del token</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Simbolo del token</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Limite de ether</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Limite de tiempo</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Lista de acceso</li>
             
            </ul>
            <button className="btn btn-block btn-primary text-uppercase" onClick={ () => this.handleOnClick(1)}>Seleccionar</button>
          </div>
        </div>
      </div>
      {/* Plus Tier */}
      <div className="col" style={{paddingBottom: "20px"}}>
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Advanced</h5>
            <h6 className="card-price text-center">Capped Crowdsale</h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check" /></span>Nombre del token</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Simbolo del token</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Limite de ether</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Limite de tiempo</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Lista de acceso</li>
            </ul>
            <button className="btn btn-block btn-primary text-uppercase" onClick={ () => this.handleOnClick(2)}>Seleccionar</button>
          </div>
        </div>
      </div>
      </div>
      <div className="row"  style={{paddingBottom: "20px"}}>
      {/* Free Tier */}
      <div className="col" style={{paddingBottom: "20px"}}>
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">Timed Crowdsale</h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check" /></span>Nombre del token</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Simbolo del token</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Limite de ether</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Limite de tiempo</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Lista de acceso</li>
            </ul>
            <button className="btn btn-block btn-primary text-uppercase" onClick={ () => this.handleOnClick(3)}>Seleccionar</button>
          </div>
        </div>
      </div>
      {/* Free Tier */}
      <div className="col" style={{paddingBottom: "20px"}}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">Whitelist Crowdsale</h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check" /></span>Nombre del token</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Simbolo del token</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Limite de ether</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Limite de tiempo</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Lista de acceso</li>
            </ul>
            <button className="btn btn-block btn-primary text-uppercase" onClick={ () => this.handleOnClick(4)}>Seleccionar</button>
          </div>
        </div>
      </div>    
    </div>
  </div>
</section>
      
     <FormProject  visibility= {this.state.visibility} type= {this.state.type}></FormProject>
     <div ref={this.state.myDivToFocus} >
     </div>
    </div>
    );
  } 
}