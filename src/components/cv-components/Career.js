import React, {Component} from "react";
import Heading from "./Heading";
import JobContainer from "./JobContainer";

class Career extends Component {
  render() {
    return (
      <div className="career">
        <Heading title="Career:" />
        <div className="career-container">
          <JobContainer duration="2010 - 2020" company="Company 1" position="Position 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </div>
      </div>
    );
  }
}

export default Career;
