import React, { Component } from "react";

import Navigation from "../../components/Navigation";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
class Header extends Component {
  render() {
    return (
        <header>
          <Navigation />
          <About />
          <Portfolio />
        </header> 
      
    );
  }
}

export default Header;