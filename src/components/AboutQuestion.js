import React, { Component } from "react";
import fetchQuestionById from "../services/fetchQuestionById";
import { Table, Radio, Progress, Button } from "semantic-ui-react";
import HeaderWithBack from "./HeaderWithBack";

class AboutQuestion extends Component {
  state = {
    question: null
  };

  componentDidMount() {
    fetchQuestionById(this.props.match.params.id).then(question => {
      this.setState({ question });
    })
  }
  render() {
    const { question } = this.state;
    const totalVotes = question && question.choices.map(item => item.votes).reduce((prev, next) => prev + next);
    const votesPercentage = (amount) => (amount/totalVotes * 100).toFixed(2);
    return (
        <div style={{ padding: '1em' }}>
          <HeaderWithBack backTo="/" pageTitle="Question Details"/>
          { !!question &&
            <div style={{ width: '50vw', margin: 'auto' }}>
              <h3>Question: { question.question }</h3>
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
              <Button primary style={{ float: 'right', marginBottom: '1em' }}>Save vote</Button>
            </div>
          }
        </div>
    );
  }
}

export default AboutQuestion;
