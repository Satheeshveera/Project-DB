import React, { Component } from "react";
import Appbar from "../Modules/appbar";
import Drawer1 from "../Modules/Drawer1";

export default class home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Drawer1 name="dhome" />
        <Appbar name="home" props={this.props} />
      </div>
    );
  }
}
