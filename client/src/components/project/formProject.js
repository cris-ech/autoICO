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
      decimals: 10,
      cap: null,
      wallet : "",
      t_init: null,
      t_end: null
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const project = {
      name: this.state.name,
      acronym: this.state.acronym,
      description: this.state.description,
      decimals: this.state.decimals,
      cap: this.state.cap,
      wallet: this.state.wallet,
      t_init: this.state.t_init,
      t_end: this.state.t_end,
      type: this.state.type
      

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
        this.setState({message: 'Your project has been created!'})

      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error in the proccess please try again');
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
                    <h5 className="card-title text-center">New Project</h5>
                    <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="form-label-group">
                        <input type="text" name="name" id="inputName" className="form-control" placeholder="User Name" required onChange={this.handleInputChange} />
                        <label htmlFor="inputName">Project name</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text-box" name="description" id="inputDescription" className="form-control" placeholder="Description" required onChange={this.handleInputChange} />
                        <label htmlFor="inputDescription">Description</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text" name="acronym" id="inputAcronym" className="form-control" placeholder="Acronym" required onChange={this.handleInputChange} />
                        <label htmlFor="inputAcronym">Acronym</label>
                      </div>
                      <div className="form-label-group">
                        <input type="text-box" name="wallet" id="inputWallet" className="form-control" placeholder="Wallet" required onChange={this.handleInputChange} />
                        <label htmlFor="inputWallet">Wallet to store the ether</label>
                      </div>
                      <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Create</button>

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
              <h5 className="card-title text-center">New Project</h5>
              <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="form-label-group">
                  <input type="text" name="name" id="inputName" className="form-control" placeholder="User Name" required onChange={this.handleInputChange} />
                  <label htmlFor="inputName">Project name</label>
                </div>
                <div className="form-label-group">
                  <input type="text-box" name="description" id="inputDescription" className="form-control" placeholder="Description" required onChange={this.handleInputChange} />
                  <label htmlFor="inputDescription">Description</label>
                </div>
                <div className="form-label-group">
                  <input type="text" name="acronym" id="inputAcronym" className="form-control" placeholder="Acronym" required onChange={this.handleInputChange} />
                  <label htmlFor="inputAcronym">Acronym</label>
                </div>
                <div className="form-label-group">
                  <input type="text-box" name="wallet" id="inputWallet" className="form-control" placeholder="Wallet" required onChange={this.handleInputChange} />
                  <label htmlFor="inputWallet">Wallet to store the ether</label>
                  </div>
                <div className="form-label-group">
                  <input type="number" name="cap" id="inputNumberTokens" className="form-control" placeholder="Number of Tokens" defaultValue={1} required onChange={this.handleInputChange} />
                  <label htmlFor="inputNumberTokens">Number Of Tokens</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Create</button>

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
              <h5 className="card-title text-center">New Project</h5>
              <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="form-label-group">
                  <input type="text" name="name" id="inputName" className="form-control" placeholder="User Name" required onChange={this.handleInputChange} />
                  <label htmlFor="inputName">Project name</label>
                </div>
                <div className="form-label-group">
                  <input type="text-box" name="description" id="inputDescription" className="form-control" placeholder="Description" required onChange={this.handleInputChange} />
                  <label htmlFor="inputDescription">Description</label>
                </div>
                <div className="form-label-group">
                  <input type="text" name="acronym" id="inputAcronym" className="form-control" placeholder="Acronym" required onChange={this.handleInputChange} />
                  <label htmlFor="inputAcronym">Acronym</label>
                </div>
                <div className="form-label-group">
                  <input type="text-box" name="wallet" id="inputWallet" className="form-control" placeholder="Wallet" required onChange={this.handleInputChange} />
                  <label htmlFor="inputWallet">Wallet to store the ether</label>
                </div>
                <div className="form-label-group">
                  <input type="number" name="cap" id="inputNumberTokens" className="form-control" placeholder="Number of Tokens" defaultValue={1} required onChange={this.handleInputChange} />
                  <label htmlFor="inputNumberTokens">Number Of Tokens</label>
                </div>
                <div className="form-label-group">
                  <input type="date" name="t_init" id="inputStartDate" className="form-control" placeholder="Start Day" required onChange={this.handleInputChange} />
                  <label htmlFor="inputStarDate">Start Day</label>
                </div>
                <div className="form-label-group">
                  <input type="date" name="t_end" id="inputEndDate" className="form-control" placeholder="End Day" required onChange={this.handleInputChange} />
                  <label htmlFor="inputEndDate">End Day</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Create</button>

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
              <h5 className="card-title text-center">New Project</h5>
              <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="form-label-group">
                  <input type="text" name="name" id="inputName" className="form-control" placeholder="User Name" required onChange={this.handleInputChange} />
                  <label htmlFor="inputName">Project name</label>
                </div>
                <div className="form-label-group">
                  <input type="text-box" name="description" id="inputDescription" className="form-control" placeholder="Description" required onChange={this.handleInputChange} />
                  <label htmlFor="inputDescription">Description</label>
                </div>
                <div className="form-label-group">
                  <input type="text" name="acronym" id="inputAcronym" className="form-control" placeholder="Acronym" required onChange={this.handleInputChange} />
                  <label htmlFor="inputAcronym">Acronym</label>
                </div>
                <div className="form-label-group">
                  <input type="text-box" name="wallet" id="inputWallet" className="form-control" placeholder="Wallet" required onChange={this.handleInputChange} />
                  <label htmlFor="inputWallet">Wallet to store the ether</label>
               </div>
                <div className="form-label-group">
                  <input type="number" name="NumberTokens" id="inputNumberTokens" className="form-control" placeholder="Number of Tokens" defaultValue={1} required onChange={this.handleInputChange} />
                  <label htmlFor="inputNumberTokens">Number Of Tokens</label>
                </div>
                <div className="form-label-group">
                  <input type="date" name="StartDate" id="inputStartDate" className="form-control" placeholder="Start Day" required onChange={this.handleInputChange} />
                  <label htmlFor="inputStarDate">Start Day</label>
                </div>
                <div className="form-label-group">
                  <input type="date" name="EndDate" id="inputEndDate" className="form-control" placeholder="End Day" required onChange={this.handleInputChange} />
                  <label htmlFor="inputEndDate">End Day</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Create</button>

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