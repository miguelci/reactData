import React, { Component } from 'react';

import {Link} from 'react-router';

class Menu extends Component {

  home = this.props.nav === 'home' ? 'active' : '';
  about = this.props.nav === 'about' ? 'active' : '';

  render(){
    return(
      <ul className="nav nav-pills">
        <li role="presentation" className={this.home}><Link to="/">Home</Link></li>
        <li role="presentation" className={this.about}><Link to="about">About</Link></li>
      </ul>
    );
  }
}

export default Menu;
