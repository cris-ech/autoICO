import React, { Component } from 'react';

import '../auth/auth.css';

export default class formProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      acronym: "",
      description: "",
      message: "",
      type: "",
      visibility: this.props.visibility,
      decimals: 18,
      cap: null,
      wallet : "",
      t_init: null,
      t_end: null,
      rate: 2000,
      minStart:'',
      minEnd:'',
      nTokens: 1,
      tokensValue: 0.0005
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    if(name == 't_init' ){ //change the minEnd based on the start date
    this.setState({
      [name]: value
    }, () => {console.log(this.state.t_init);
      let minEnd = new Date(this.state.t_init)
      console.log(minEnd);
      minEnd.setDate(minEnd.getDate() + 1);
      this.setState({minEnd: minEnd.toISOString().split('T')[0]});
      console.log(minEnd)});
    }else{
      this.setState({
        [name]: value
      });
    }
  };



  componentDidMount(){
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.setState({minStart: tomorrow.toISOString().split('T')[0]});
  }

  // process to create a new project
  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.type != 1){
    var rate = 1e18/(this.state.tokensValue*10**18);
    var cap = this.state.nTokens* this.state.tokensValue; //cap in ether 
    }

    const project = {
      name: this.state.name,
      acronym: this.state.acronym,
      description: this.state.description,
      decimals: this.state.decimals,
      cap: cap,
      wallet: this.state.wallet,
      t_init: (this.state.t_init === null) ? this.state.t_init : Date.parse(this.state.t_init) / 1000,
      t_end: (this.state.t_end === null) ? this.state.t_end : Date.parse(this.state.t_end) / 1000,
      type: this.state.type,
      tokensValue: this.state.tokensValue,
      nTokens: this.state.nTokens,
      rate: rate

      

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
        this.setState({message: 'Tu proyecto ha sido creado!'})

      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error en el proceso porfavor vuelve a intentarlo');
    })
    console.log(this.state);
  }
  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.visibility !== this.state.visibility) {
      this.setState({ visibility: nextProps.visibility });
    }
    if (nextProps.type !== this.state.type) {
      this.setState({ type: nextProps.type });
    }
  }


  render() {
    if(this.state.visibility== "hidden") {
    return <div></div>;} else {
    switch(this.state.type) {
      case 1: return (
      <section style={{paddingBottom: "30px"}}>
            <div className="row">
              <div className="col-lg-5 col-xl-5 col-md-6 col-sm-7 col-xs-8 mx-auto">
                <div className="card card-signin flex-row my-5">
                  
                  <div className="card-body">
                    <h5 className="card-title text-center">Nuevo proyecto</h5>
                    <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="form-label-group">
                        <input type="text" name="name" id="inputName" className="form-control" placeholder="User Name" required onChange={this.handleInputChange} />
                        <label htmlFor="inputName">Nombre del proyecto</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text-box" name="description" id="inputDescription" className="form-control" placeholder="Description" required onChange={this.handleInputChange} />
                        <label htmlFor="inputDescription">Descripción</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text" name="acronym" id="inputAcronym" className="form-control" placeholder="Acronym" required onChange={this.handleInputChange} />
                        <label htmlFor="inputAcronym">Simbolo del token</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text-box" name="wallet" id="inputWallet" className="form-control" placeholder="Wallet" required onChange={this.handleInputChange} />
                        <label htmlFor="inputWallet">Wallet para guardar los fondos</label>
                      </div>
                      <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Crear</button>

                      <hr className="my-4" />
                      <h3 style={{textAlign:'center'}}>{this.state.message}</h3>
                      
                    </form>
                  </div>
                </div>
                
              </div>
            </div>
            </section>
          
          
    
    );
      case 2: return(
      <section style={{paddingBottom: "30px"}}>
      <div className="row">
        <div className="col-lg-5 col-xl-5 col-md-6 col-sm-7 col-xs-8 mx-auto">
          <div className="card card-signin flex-row my-5">
            
            <div className="card-body">
            <h5 className="card-title text-center">Nuevo proyecto</h5>
                    <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="form-label-group">
                        <input type="text" name="name" id="inputName" className="form-control" placeholder="User Name" required onChange={this.handleInputChange} />
                        <label htmlFor="inputName">Nombre del proyecto</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text-box" name="description" id="inputDescription" className="form-control" placeholder="Description" required onChange={this.handleInputChange} />
                        <label htmlFor="inputDescription">Descripción</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text" name="acronym" id="inputAcronym" className="form-control" placeholder="Acronym" required onChange={this.handleInputChange} />
                        <label htmlFor="inputAcronym">Simbolo del token</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text-box" name="wallet" id="inputWallet" className="form-control" placeholder="Wallet" required onChange={this.handleInputChange} />
                        <label htmlFor="inputWallet">Wallet para guardar los fondos</label>
                      </div>
                <div className="form-label-group">
                  <input type="number" name="nTokens" id="inputNumberTokens" className="form-control" placeholder="Numero de tokens" defaultValue={1} required onChange={this.handleInputChange} />
                  <label htmlFor="inputNumberTokens">Numero de tokens</label>
                </div>
                <div className="form-label-group">
                  <input type="number" name="tokensValue" id="inputTokensValue" className="form-control" placeholder="Valor de cada token en ether" step={0.01} defaultValue={1} min={0.01} required onChange={this.handleInputChange} />
                  <label htmlFor="inputTokensValue">Valor de cada token en ether</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Crear</button>

                <hr className="my-4" />
                <h3 style={{textAlign:'center'}}>{this.state.message}</h3>
                
              </form>
            </div>
          </div>
          
        </div>
      </div>
      </section>);
      case 3: return(
      <section style={{paddingBottom: "30px"}}>
      <div className="row">
        <div className="col-lg-5 col-xl-5 col-md-6 col-sm-7 col-xs-8 mx-auto">
          <div className="card card-signin flex-row my-5">
            
            <div className="card-body">
            <h5 className="card-title text-center">Nuevo proyecto</h5>
                    <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="form-label-group">
                        <input type="text" name="name" id="inputName" className="form-control" placeholder="User Name" required onChange={this.handleInputChange} />
                        <label htmlFor="inputName">Nombre del proyecto</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text-box" name="description" id="inputDescription" className="form-control" placeholder="Description" required onChange={this.handleInputChange} />
                        <label htmlFor="inputDescription">Descripción</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text" name="acronym" id="inputAcronym" className="form-control" placeholder="Acronym" required onChange={this.handleInputChange} />
                        <label htmlFor="inputAcronym">Simbolo del token</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text-box" name="wallet" id="inputWallet" className="form-control" placeholder="Wallet" required onChange={this.handleInputChange} />
                        <label htmlFor="inputWallet">Wallet para guardar los fondos</label>
                      </div>
                <div className="form-label-group">
                  <input type="number" name="nTokens" id="inputNumberTokens" className="form-control" placeholder="Numero de tokens" defaultValue={1} required onChange={this.handleInputChange} />
                  <label htmlFor="inputNumberTokens">Numero de tokens</label>
                </div>
                <div className="form-label-group">
                <input type="number" name="tokensValue" id="inputTokensValue" className="form-control" placeholder="Valor de cada token en ether" step={0.01} defaultValue={1} min={0.01} required onChange={this.handleInputChange} />
                  <label htmlFor="inputTokensValue">Valor de cada token en ether</label>
                </div>
                <div className="form-label-group">
                  <input type="date" name="t_init" id="inputStartDate" className="form-control" placeholder="Start Day" min={this.state.minStart} required onChange={this.handleInputChange} />
                  <label htmlFor="inputStarDate">Día de comienzo</label>
                </div>
                <div className="form-label-group">
                  <input type="date" name="t_end" id="inputEndDate" className="form-control" placeholder="End Day" min={this.state.minEnd} required onChange={this.handleInputChange} />
                  <label htmlFor="inputEndDate">Día de finalización</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Crear</button>

                <hr className="my-4" />
                <h3 style={{textAlign:'center'}}>{this.state.message}</h3>
                
              </form>
            </div>
          </div>
          
        </div>
      </div>
      </section>);
      case 4: return(
      <section style={{paddingBottom: "30px"}}>
      <div className="row">
        <div className="col-lg-5 col-xl-5 col-md-6 col-sm-7 col-xs-8 mx-auto">
          <div className="card card-signin flex-row my-5">
            
            <div className="card-body">
            <h5 className="card-title text-center">Nuevo proyecto</h5>
                    <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="form-label-group">
                        <input type="text" name="name" id="inputName" className="form-control" placeholder="User Name" required onChange={this.handleInputChange} />
                        <label htmlFor="inputName">Nombre del proyecto</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text-box" name="description" id="inputDescription" className="form-control" placeholder="Description" required onChange={this.handleInputChange} />
                        <label htmlFor="inputDescription">Descripción</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text" name="acronym" id="inputAcronym" className="form-control" placeholder="Acronym" required onChange={this.handleInputChange} />
                        <label htmlFor="inputAcronym">Simbolo del token</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text-box" name="wallet" id="inputWallet" className="form-control" placeholder="Wallet" required onChange={this.handleInputChange} />
                        <label htmlFor="inputWallet">Wallet para guardar los fondos</label>
                      </div>
                <div className="form-label-group">
                  <input type="number" name="nTokens" id="inputNumberTokens" className="form-control" placeholder="Numero de tokens" defaultValue={1} required onChange={this.handleInputChange} />
                  <label htmlFor="inputNumberTokens">Numero de tokens</label>
                </div>
                <div className="form-label-group">
                <input type="number" name="tokensValue" id="inputTokensValue" className="form-control" placeholder="Valor de cada token en ether" step={0.01} defaultValue={1} min={0.01} required onChange={this.handleInputChange} />
                  <label htmlFor="inputTokensValue">Valor de cada token en ether</label>
                </div>
                <div className="form-label-group">
                  <input type="date" name="t_init" id="inputStartDate" className="form-control" placeholder="Start Day" min={this.state.minStart} required onChange={this.handleInputChange} />
                  <label htmlFor="inputStarDate">Día de comienzo</label>
                </div>
                <div className="form-label-group">
                  <input type="date" name="t_end" id="inputEndDate" className="form-control" placeholder="End Day" min={this.state.minEnd} required onChange={this.handleInputChange} />
                  <label htmlFor="inputEndDate">Día de finalización</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Crear</button>

                <hr className="my-4" />
                <h3 style={{textAlign:'center'}}>{this.state.message}</h3>
                
              </form>
            </div>
          </div>
          
        </div>
      </div>
      </section>);
  }
  
}
  
}
}