import React from "react";
import "./Navbar_Desktop.css";

class Navbar_Desktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="NAVBAR_DESKTOP">
                <div id="NAVBAR_DESKTOP_CONTENT">
                    <h1 className="Navbar_Desktop_Header">Wade J. Hudgens</h1>
                    <div id="NAVBAR_DESKTOP_CONTACT_INFO">
                        <p className="Navbar_Desktop_Contact">1-(661)-304-0916</p>
                        <p className="Navbar_Desktop_Contact">wade.j.hudgens@gmail.com</p>
                    </div>
                    
                    <div id="NAVBAR_DESKTOP_BUTTONS">
                        <div class="Navbar_Desktop_Button" onClick={() => {this.props.handleButtonClick(0)}}>Portfolio</div>
                        <div class="Navbar_Desktop_Button" onClick={() => {this.props.handleButtonClick(1)}}>Skills</div>
                        <div class="Navbar_Desktop_Button" onClick={() => {this.props.handleButtonClick(2)}}>Resume</div>
                        <div class="Navbar_Desktop_Button" onClick={() => {this.props.handleButtonClick(3)}}>Contact</div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Navbar_Desktop;