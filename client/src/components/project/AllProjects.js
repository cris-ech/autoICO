import React, { Component } from 'react';
import UserProject from './UserAllProject';
import web3 from '../../helpers/web3';

import './projects.css';


export default class AllProjects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []

    };
    
    
  }

  componentDidMount() {
    fetch('/projects/getAllProjects')
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
    if(web3 === null){
      return(
      <div className="section projects-container" style={{overflow:"auto"}}>
      <div style={{textAlign:"center", paddingTop:"100px"}}>
      <h2>You should install metamask to access this section in order to buy tokens</h2>
      <h3><a href="https://metamask.io/" target = "_blank">Get metamask</a></h3>
      </div>
      </div>);
    }
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