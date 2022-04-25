import React from "react";
import Portfolio_Item from "./components/Portfolio_Item";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import NeuralNetwork from "./assets/NeuralNetwork.png";
import NeuralNetwork0 from "./assets/NeuralNetwork0.jpg";
import Dog from "./assets/Dog.jpg";
import SLLI from "./assets/StarluxLashesImage.png"
import LucidKodeImage from "./assets/LucidKodeImage.jpg";
import "./Portfolio.css";

//This component will display the projects part of the portfolio
class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="PORTFOLIO">
                <Element name="portfolio"></Element>
                <h1 className="Page_Header">Portfolio</h1>
                <Portfolio_Item 
                    Name={"EasyNN"} 
                    Image={NeuralNetwork} 
                    AlignLeft={false} 
                    Description={
                        "In C#, I developed a Neural Network Framework. It makes creating Artificial Neural Networks simple and easy. It currently supports " +
                        "feedworward, reccurant, and recursive neural networks."
                    }    
                    TryItOutLink={"https://wadejhudgens.com/EasyNN"}
                    TryItOutA={false}
                    GithubLink={"https://github.com/Wade-J-Hudgens/EasyNN"}
                />
                <Portfolio_Item 
                    Name={"StarluxLashes E-commerce Website"} 
                    Image={SLLI} 
                    AlignLeft={true}
                    Description={
                        "Utilizing react.js, I created an e-commerce website for a friends buissness."
                    }
                    TryItOutLink={"StarluxLashes/index.html"}
                    TryItOutA={true}
                    GithubLink={"https://github.com/Wade-J-Hudgens/StarluxLashes"}    
                />
                <Portfolio_Item 
                    Name={"LucidKode.com"} 
                    Image={LucidKodeImage} 
                    AlignLeft={false} 
                    Description={
                        "Using React.js, I created a website for my freelancing buissness."
                    }
                    TryItOutLink={"LucidKode/index.html"}
                    TryItOutA={true}
                    GithubLink={"https://github.com/Wade-J-Hudgens/lucidkode"}    
                />
            </div>
        );
    }
}

export default Portfolio;