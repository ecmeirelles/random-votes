import React, { Component } from "react";
import HeaderWithBack from "./HeaderWithBack";

class CreateQuestion extends Component {
  render() {
    return (
      <div>
        <HeaderWithBack backTo="/" pageTitle="Create Question"/>
      </div>
    );
  }
}

export default CreateQuestion;
