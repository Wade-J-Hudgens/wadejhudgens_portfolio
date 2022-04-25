import React from "react";
import "./Navbar_Mobile.css";

import SelfImage from "./WadeHudgensImage.jpg";

class Navbar_Mobile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Opened: false
        }

        this.ToggleOpenClose = this.ToggleOpenClose.bind(this);
    }

    OpenedMenu = {
        maxWidth: "90%",
        borderRight: "solid 1px rgb(255, 255, 255)",
        transition: "all 1s"
    }
    ClosedMenu = {
        maxWidth: "0%",
        borderRight: "none 1px rgb(255, 255, 255)",
        transition: "all 1s"
    }
    OpenedMenu_Button = {
        transform: "rotate(90deg)",
        transition: "all 0.2s"
    }
    ClosedMenu_Button = {
        transform: "rotate(0deg)",
        transition: "all 0.2s"
    }
    ToggleOpenClose() {
        this.setState({
            Opened: !this.state.Opened
        });
    }

    render() {
        return(
            <div id="NAVBAR_MOBILE">
                <div id="NAVBAR_MOBILE_CONTENT_BACK">
                    <div id="NAVBAR_MOBILE_CONTENT" style={this.state.Opened ? this.OpenedMenu : this.ClosedMenu}>
                        <h1 className="Navbar_Mobile_Header">Wade J. Hudgens</h1>
                        <div id="NAVBAR_MOBILE_CONTACT_INFO">
                            <p className="Navbar_Mobile_Contact">1-(661)-304-0916</p>
                            <p className="Navbar_Mobile_Contact">wade.j.hudgens@gmail.com</p>
                        </div>
                        
                        <div id="NAVBAR_MOBILE_BUTTONS">
                            <div class="Navbar_Mobile_Button" onClick={() => {this.props.handleButtonClick(0); this.ToggleOpenClose()}}>Portfolio</div>
                            <div class="Navbar_Mobile_Button" onClick={() => {this.props.handleButtonClick(1); this.ToggleOpenClose()}}>Skills</div>
                            <div class="Navbar_Mobile_Button" onClick={() => {this.props.handleButtonClick(2); this.ToggleOpenClose()}}>Resume</div>
                            <div class="Navbar_Mobile_Button" onClick={() => {this.props.handleButtonClick(3); this.ToggleOpenClose()}}>Contact</div>
                        </div>
                        
                    </div>
                </div>
                <div id="NAVBAR_MOBILE_OPENCLOSE" style={this.state.Opened ? this.OpenedMenu_Button : this.ClosedMenu_Button} onClick={this.ToggleOpenClose}>
                    <div id="NAVBAR_MOBILE_OPENCLOSE_PIC"></div>
                </div>
            </div>
        );
    }
}

export default Navbar_Mobile;