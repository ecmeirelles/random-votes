import React, { Component } from "react";
import moment from "moment";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";

class EachQuestion extends Component {
  render() {
    const { question } = this.props;
    const numberChoices = (question) => `${ question.choices.length } choices`;
    return (
        <Card
          href={ question.url }
          header={ question.question }
          meta={ moment(question.published_at).format("MM-DD-YYYY") }
          description={ numberChoices(question) }
        />
    );
  }
}

EachQuestion.propTypes = {
  question: PropTypes.object.isRequired
};

export default EachQuestion;
