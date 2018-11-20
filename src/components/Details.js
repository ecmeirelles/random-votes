import React, { Component } from "react";
import { Table, Radio, Progress } from "semantic-ui-react";
import PropTypes from "prop-types";

class Details extends Component {
  render() {
    const { question } = this.props;
    const totalVotes = question && question.choices.map(item => item.votes).reduce((prev, next) => prev + next);
    const votesPercentage = (amount) => (amount/totalVotes * 100).toFixed(2);
    return (
      <Table unstackable>
        <Table.Body>
          { question.choices.map(choice => (
            <Table.Row key={Math.random()} style={{ flexDirection: 'column' }}>
              <Table.Cell><Radio label={ choice.choice } /></Table.Cell>
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

export default Details;
