import React, { Component } from 'react';

import './auth.css';

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
      password: "",
      password2:"", //confirmation password
      message: ""

    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2

    };
    fetch('users/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.setState({message: 'Your registration is complete !'})

      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error in register please try again');
    })
    console.log(this.state);
  }


  render() {
    return (
      <div className="section login-container">
      <div className="row">
        <div className="col-lg-5 col-xl-5 col-md-6 col-sm-7 col-xs-8 mx-auto">
          <div className="card card-signin flex-row my-5">
            
            <div className="card-body">
              <h5 className="card-title text-center">Register</h5>
              <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="form-label-group">
                  <input type="text" name="name" id="inputName" className="form-control" placeholder="User Name" required onChange={this.handleInputChange} />
                  <label htmlFor="inputName">User Name</label>
                </div>
                <div className="form-label-group">
                  <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" required onChange={this.handleInputChange} />
                  <label htmlFor="inputEmail">Email address</label>
                </div>
                <hr />
                <div className="form-label-group">
                  <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.handleInputChange} minLength="6" />
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="form-label-group">
                  <input type="password" name="password2" id="inputConfirmPassword" className="form-control" placeholder="Password" required onChange={this.handleInputChange} minLength="6" />
                  <label htmlFor="inputConfirmPassword">Confirm password</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>

                <hr className="my-4" />
                <h3 style={{textAlign:'center'}}>{this.state.message}</h3>
                
              </form>
            </div>
          </div>
          
        </div>
      </div>
     
    </div>
    
    );
  }
}