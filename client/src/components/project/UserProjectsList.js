import React, { Component } from 'react';
import UserProject from './UserProject';
import './projects.css';


export default class UserProjectsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prueba: [
        {
          name: "prueba",
          acronym: "prb",
          description: "prueba",
          wallet: "wallet de prueba",
          cap: 10000,
          t_init: Date.now(),
          t_end: Date.now(),
          type: 1
        },
        {
          name: "prueba",
          acronym: "prb",
          description: "prueba",
          wallet: "wallet de prueba",
          cap: 10000,
          t_init: Date.now(),
          t_end: Date.now(),
          type: 2
        },
        {
          name: "prueba",
          acronym: "prb",
          description: "prueba",
          wallet: "wallet de prueba",
          cap: 10000,
          t_init: Date.now(),
          t_end: Date.now(),
          type: 3
        },
        {
          name: "prueba",
          acronym: "prb",
          description: "prueba",
          wallet: "wallet de prueba",
          cap: 10000,
          t_init: Date.now(),
          t_end: Date.now(),
          type: 4
        }
        
      ],
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