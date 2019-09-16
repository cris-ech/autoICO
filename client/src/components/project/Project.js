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
      t_end: ""

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
        this.setState({message: 'Your project has been created !'})

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


  render() {
    return (
      
      <div className="section login-container" style={{overflow:"auto"}}>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* Free Tier */}
      <div className="col" style={{paddingBottom: "20px"}}>
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check" /></span>Single User</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>5GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Community Access</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Unlimited Private Projects</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Dedicated Phone Support</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Monthly Status Reports</li>
            </ul>
            <button className="btn btn-block btn-primary text-uppercase" onClick={() => this.setState({ type: 1, visibility: " "})}>Button</button>
          </div>
        </div>
      </div>
      {/* Plus Tier */}
      <div className="col" style={{paddingBottom: "20px"}}>
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check" /></span><strong>5 Users</strong></li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>50GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Community Access</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Monthly Status Reports</li>
            </ul>
            <button className="btn btn-block btn-primary text-uppercase" onClick={() => this.setState({ type: 1, visibility: " "})}>Button</button>
          </div>
        </div>
      </div>
      <div class="w-100"></div>
      {/* Free Tier */}
      <div className="col" style={{paddingBottom: "20px"}}>
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check" /></span>Single User</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>5GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Community Access</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Unlimited Private Projects</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Dedicated Phone Support</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Monthly Status Reports</li>
            </ul>
            <button className="btn btn-block btn-primary text-uppercase" onClick={() => this.setState({ type: 1, visibility: " "})}>Button</button>
          </div>
        </div>
      </div>
{/* Free Tier */}
      <div className="col" style={{paddingBottom: "20px"}}>
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check" /></span>Single User</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>5GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check" /></span>Community Access</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Unlimited Private Projects</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Dedicated Phone Support</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Monthly Status Reports</li>
            </ul>
            <button className="btn btn-block btn-primary text-uppercase" onClick={() => this.setState({ type: 1, visibility: " "})}>Button</button>
          </div>
        </div>
      </div>    
    </div>
  </div>
</section>

     <FormProject visibility= {this.state.visibility}></FormProject>
    </div>
    
    );
  }
}