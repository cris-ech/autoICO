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
  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.visibility !== this.state.visibility) {
      this.setState({ visibility: nextProps.visibility });
    }
  }


  render() {
    if(this.state.visibility== "hidden") {
    return null;} else {
    return (
      
     
      <section style={{paddingBottom: "20px"}}>
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
                      <hr />
                      <div className="form-label-group">
                        <input type="text" name="acronym" id="inputAcronym" className="form-control" placeholder="Acronym" required onChange={this.handleInputChange} />
                        <label htmlFor="inputAcronym">Acronym</label>
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
          
          
    
    );}
  }
}