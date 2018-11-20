import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import fetchQuestions from "../services/fetchQuestions";
import EachQuestion from "./EachQuestion";

class ListQuestions extends Component {
  state = {
    questions: null
  };

  componentDidMount() {
    fetchQuestions().then((questions) => {
      this.setState({ questions });
    });
  };

  render() {
    const { questions } = this.state;
    return (
      <div style={{ padding: '1em' }}>
        <h1>Questions</h1>
        <Grid doubling columns={4}>
          { questions && questions.map(question => (
            <Grid.Column key={ Math.random() }>
              <EachQuestion question={question} />
            </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}

export default ListQuestions;
