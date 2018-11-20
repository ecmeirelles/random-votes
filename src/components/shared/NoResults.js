import React, { Component } from "react";
import PropTypes from "prop-types";

class NoResults extends Component {
  render() {
    const { containerStyle, typeOfResult } = this.props;
    return (
      <div style={containerStyle}>
        <p style={{ textAlign: 'center' }}>No {typeOfResult} to show
          <span role="img" aria-label="Sad face"> 😔</span>
        </p>
      </div>
    )
  }
}

NoResults.propTypes = {
  typeOfResult: PropTypes.string.isRequired,
  containerStyle: PropTypes.object
};

export default NoResults;
