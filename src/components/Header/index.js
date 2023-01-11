import React, { Component } from "react";

import Navigation from "../../components/Navigation";
import About from "../../components/About";
class Header extends Component {
  render() {
    return (
        <header>
          <Navigation />
          <About />
        </header> 
    );
  }
}

export default Header;