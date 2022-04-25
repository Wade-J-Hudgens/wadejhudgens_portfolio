import React from "react";
import Navbar_Mobile from "./Navbar_Mobile/Navbar_Mobile";
import Navbar_Desktop from "./Navbar_Desktop/Navbar_Desktop";

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Opened: false
        }
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
        let NAVBAR;
        if (this.isMobile()) {
            NAVBAR = <Navbar_Mobile handleButtonClick={this.props.handleButtonClick}/>;
        }
        else {
            NAVBAR = <Navbar_Desktop handleButtonClick={this.props.handleButtonClick}/>;
        }
        return(
            <div>
                <Navbar_Desktop handleButtonClick={this.props.handleButtonClick}/>
                <Navbar_Mobile handleButtonClick={this.props.handleButtonClick}/>
            </div>
        );
    }

    isMobile() {
        let w = window.innerWidth;

        if (w <= 500) {
            return true;
        }
        else {
            return false;
        }
    }
}

export default Navbar;