import React from "react";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import "./Contact.css";

//  This component will display the contact section of the portfolio
class Contact extends React.Component {
     render() {
         return (
            <div id="CONTACT">
                <Element name="contact"></Element>
                <h1 className="Page_Header">Contact</h1>
                <h2 className="Contact_Item">1-(661)-437-1966</h2>
                <h2 className="Contact_Item">wade.j.hudgens@gmail.com</h2>
            </div>
         )
     };
}

export default Contact;