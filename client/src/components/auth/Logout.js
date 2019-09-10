import React, { Component } from 'react';

export default class Logout extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      redirect: false,
    };
  }

  componentDidMount() {
    fetch('/checkToken')
      .then(res => {
        if (res.status === 200) {
          this.setState({ loading: false });
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false, redirect: true });
      });
  }
  onSubmit = (event) => {
    console.log("inside the event");
    event.preventDefault();
    fetch('users/logout')
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
            window.location.reload(false);
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
  }  

  
  render() {
    const {loading, redirect} = this.state;
    if(!redirect && !loading){
    return (
      <div>
        <li className="nav-item"><a className="nav-link" onClick={this.onSubmit}>logout</a></li>
      </div>
    );
  }else return null;
}
}