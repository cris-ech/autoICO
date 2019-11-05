import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: ''
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
    fetch('users/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
        window.location.reload(false);

      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  render() {
    return (
      <div className="section login-container">
      <div className="row">
        <div className="col-lg-5 col-xl-5 col-md-6 col-sm-7 col-xs-8 mx-auto">
          <div className="card card-signin flex-row my-5">
            
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <form className="form-signin" onSubmit={this.onSubmit}>
                <div className="form-label-group">
                  <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" required onChange={this.handleInputChange} />
                  <label htmlFor="inputEmail">Email</label>
                </div>
                <hr />
                <div className="form-label-group">
                  <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.handleInputChange} />
                  <label htmlFor="inputPassword">Contraseña</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>

                <hr className="my-4" />
                <h3>{this.state.message}</h3>
                
              </form>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
    );
  }
}