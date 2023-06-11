import React, {Component} from "react";

class Information extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.listInformations);
  }

  render() {
    return (
      <ul>
        {this.props.listInformations.map((listInformation) => {
          if (listInformation.text === "") {
            return;
          }
          return (
            <li>
              <span>{`${listInformation.information}: ${listInformation.text}`}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Information;
