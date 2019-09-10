import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logout from '../auth/Logout';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }


  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">AutoICO project</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/secret">Secret</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
            </li>
            <Logout></Logout>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    );
  }
}