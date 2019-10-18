import React, { Component } from 'react';
import UserProject from './UserProject';
import './projects.css';


export default class UserProjectsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []

    };
    
    
  }

  componentDidMount() {
    fetch('/users/userProjects')
    .then(res => {
      if(res.status === 200){
      //console.log(res);
      return res.json()}
      })
    .then(projects => { 
      //console.log(projects); 
      this.setState({ projects})
   });
      
}
    

  render(){
    
    return(
  <div className="section projects-container" style={{overflow:"auto"}}>
  {this.state.projects.map((project) => 
    <UserProject project={project} key={project.name}></UserProject>
    )}
    <div style={{padding:"50px"}}></div>
</div>


    );
  };
};