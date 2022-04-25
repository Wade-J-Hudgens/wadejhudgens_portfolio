import React from "react";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import SkillItem from "./components/SkillItem";

import "./Skills.css";

import JSLogo from "./assets/js_logo.png";
import AngularLogo from "./assets/angular_logo.png";
import AspNetLogo from "./assets/aspnet_logo.png";
import CSharpLogo from "./assets/csharp_logo.png";
import CSSLogo from "./assets/css_logo.png";
import DotNetLogo from "./assets/dotnet_logo.png";
import GitLogo from "./assets/git_logo.png";
import HTMLLogo from "./assets/html_logo.png";
import PHPLogo from "./assets/php_logo.png";
import PythonLogo from "./assets/python_logo.png";
import ReactLogo from "./assets/react_logo.png";

//  This component will display the skills section of the portfolio
class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="SKILLS">
                <Element name="skills"></Element>
                <h1 className="Page_Header">Skills</h1>
                <div className="Skill_Items">
                    <div className="Skill_Grid">
                        <div className="Skill_Grid_Item">
                            <SkillItem Image={JSLogo} Name={"Javascript"} />
                        </div>
                        <div className="Skill_Grid_Item">
                            <SkillItem Image={AspNetLogo} Name={"ASP.net"} />
                        </div>
                        <div className="Skill_Grid_Item">
                            <SkillItem Image={CSharpLogo} Name={"C#"} />
                        </div>
                        <div className="Skill_Grid_Item">
                            <SkillItem Image={CSSLogo} Name={"CSS"} />
                        </div>
                        <div className="Skill_Grid_Item">
                            <SkillItem Image={DotNetLogo} Name={".net"} />
                        </div>
                        <div className="Skill_Grid_Item">
                            <SkillItem Image={GitLogo} Name={"Git"} />
                        </div>
                        <div className="Skill_Grid_Item">
                            <SkillItem Image={HTMLLogo} Name={"HTML"} />
                        </div>
                        <div className="Skill_Grid_Item">
                            <SkillItem Image={PHPLogo} Name={"PHP"} />
                        </div>
                        <div className="Skill_Grid_Item">
                            <SkillItem Image={ReactLogo} Name={"React"} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;