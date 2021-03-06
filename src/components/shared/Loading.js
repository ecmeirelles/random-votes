import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import PropTypes from "prop-types";

class Loading extends Component {
  render() {
    const { containerStyle } = this.props;
    return (
      <div style={containerStyle}>
        <Loader active inline="centered" />
        <p className="loading">
          Loading
        </p>
      </div>
    )
  }
}

Loading.propTypes = {
  containerStyle: PropTypes.object
};

export default Loading;
