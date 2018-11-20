import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class HeaderWithBack extends Component {
  render() {
    const { backTo, pageTitle } = this.props;
    return (
      <div>
        <Link to={backTo}>🢐 Back</Link>
        <h1>{ pageTitle }</h1>
      </div>
    );
  }
}

HeaderWithBack.propTypes = {
  backTo: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired
};

export default HeaderWithBack;
