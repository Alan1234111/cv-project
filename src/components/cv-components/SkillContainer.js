import React, {Component} from "react";

class SkillContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skill">
        <p className="skill-name">{this.props.skill}</p>
        <img className="rating-img" src={this.props.rating} alt="" />
      </div>
    );
  }
}

export default SkillContainer;
