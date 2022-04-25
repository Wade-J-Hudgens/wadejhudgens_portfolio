import React from "react";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import "./Resume.css";

// This component is where you will download the resume
class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="RESUME">
                <Element name="resume"></Element>
                <h1 className="Page_Header">Resume</h1>
                <br />
                <a id="RESUME_DOWNLOAD_BUTTON" href="Resume.pdf" download="WadeHudgens_Resume.pdf">Download Resume</a>
            </div>
        );
    }
}

export default Resume;