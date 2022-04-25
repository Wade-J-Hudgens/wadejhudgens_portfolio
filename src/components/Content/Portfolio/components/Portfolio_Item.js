import React from "react";
import "./Portfolio_Item.css";

//  This component is a project in the portfolio section
class Portfolio_Item extends React.Component {
    constructor(props) {
        super(props);
    }

    Left = {
        float: "left"
    }
    Right = {
        float: "right"
    }
    TextL = {
        textAlign: "left"
    }
    TextR = {
        textAlign: "right"
    }
    render() {
        let tio = <a className="Portfolio_Item_TryItOut" style={this.props.AlignLeft ? this.Left : this.Right} href={this.props.TryItOutLink}>Try It Out</a>

        if (!this.props.TryItOutA) {
            tio = <a className="Portfolio_Item_TryItOut_INACTIVE" style={this.props.AlignLeft ? this.Left : this.Right}><del>Try It Out</del></a>
        }
        return(
            <div className="Portfolio_Item" style={this.props.AlignLeft ? this.Left : this.Right}>
                <h2 className="Portfolio_Item_Header">{this.props.Name}</h2>
                <div className="Portfolio_Item_Content_Div">
                    <img src={this.props.Image} className="Portfolio_Item_Content_Image" style={this.props.AlignLeft ? this.Left : this.Right} alt="Can't load image"></img>
                    <p className="Portfolio_Item_Content_P" style={this.props.AlignLeft ? this.TextL : this.TextR}>
                        {this.props.Description}
                        
                    </p>
                    {tio}
                    <a className="Portfolio_Item_Github" style={this.props.AlignLeft ? this.Left : this.Right} href={this.props.GithubLink}>See Code (Github)</a>
                </div>
            </div>
        );
    }
}

export default Portfolio_Item;