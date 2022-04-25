import React from "react";
import "./SkillItem.css";

class SkillItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="Skill_Item">
                <img src={this.props.Image} className="Skill_Item_Image"></img>
                <h2 className="Skill_Item_Name">{this.props.Name}</h2>
            </div>
        );
    }
}

export default SkillItem;