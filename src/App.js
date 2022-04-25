import './App.css';
import React from "react";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Content/Portfolio/Portfolio";
import Skills from "./components/Content/Skills/Skills";
import Resume from "./components/Content/Resume/Resume";
import Contact from "./components/Content/Contact/Contact";

import "./App0.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="WADEJHUDGENS">
        <Navbar handleButtonClick={this.handleButtonClick}/>
        <div id="CONTENT">
          <Portfolio />
          <Skills />
          <Resume />
          <Contact />
        </div>
      </div>
    );
  }

  // When a menu item is clicked, the page will scroll to the desired location
  handleButtonClick(ele) {
    if (ele === 0) {
      scroller.scrollTo('portfolio', {
        duration: 1000,
        delay: 100,
        smooth: true,
      });
    }
    else if (ele === 1) {
      scroller.scrollTo('skills', {
        duration: 1000,
        delay: 100,
        smooth: true,
      });
    }
    else if (ele === 2) {
      scroller.scrollTo('resume', {
        duration: 1000,
        delay: 100,
        smooth: true,
      });
    }
    else if (ele === 3) {
      scroller.scrollTo('contact', {
        duration: 1000,
        delay: 100,
        smooth: true,
      });
    }
  }
}

export default App;
