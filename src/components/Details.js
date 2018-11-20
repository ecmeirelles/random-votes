import React, { Component } from "react";
import { Table, Radio, Progress } from "semantic-ui-react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {selectAChoice} from "../redux/actions";

class Details extends Component {
  getChoiceIdFromUrl = (url) => {
    const tempId = url.split("choices/");
    return tempId[tempId.length-1];
  };

  handleChange = (choiceSelected) => {
    const { selectAChoiceD } = this.props;
    selectAChoiceD(this.getChoiceIdFromUrl(choiceSelected))
  };

  render() {
    const { question, choiceSelected } = this.props;
    const totalVotes = question && question.choices.map(item => item.votes).reduce((prev, next) => prev + next);
    const votesPercentage = (amount) => amount > 0 ? (amount/totalVotes * 100).toFixed(2) : amount;
    return (
      <Table unstackable>
        <Table.Body>
          { question.choices.map(choice => (
            <Table.Row key={this.getChoiceIdFromUrl(choice.url)} style={{ flexDirection: "column" }}>
              <Table.Cell>
                <Radio label={ choice.choice }
                       name="radioGroup"
                       value={choiceSelected}
                       checked={choiceSelected === this.getChoiceIdFromUrl(choice.url)}
                       onChange={() => this.handleChange(choice.url)}
                />
              </Table.Cell>
              <Table.Cell>{ choice.votes } votes</Table.Cell>
              <Table.Cell>
                { votesPercentage(choice.votes) }%
                <Progress percent={ votesPercentage(choice.votes) } />
              </Table.Cell>
            </Table.Row>
          )) }
        </Table.Body>
      </Table>
    )
  }
}

Details.propTypes = {
  question: PropTypes.object.isRequired
};

export default connect(
    (state) => ({
      question: state.question.question,
      choiceSelected: state.question.choiceSelected
    }),
    (dispatch) => ({
      selectAChoiceD: (id) => dispatch(selectAChoice(id))
    })
)(Details);
