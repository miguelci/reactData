import React, { Component } from 'react';
import Menu from './components/Menu';

class About extends Component{
  render(){
    return(
      <div className="col-xs-12">
        <Menu nav="about"/>
        <row>
          <h1>Being done by Miguel</h1>
        </row>
      </div>
    );
  }
}

export default About;
