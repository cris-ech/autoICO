import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }


  render() {
    return (
      <footer  className="footer py-4 bg-black">
        <div className="container">
          <p className="m-0 text-center text-white small">Copyright © AutoICO Project 2019</p>
        </div>
      </footer>
    );
  }
}