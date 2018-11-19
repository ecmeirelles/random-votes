import React, { Component } from "react";
import "../styles/App.css";
import moment from "moment";
import { Grid, Card } from "semantic-ui-react";
import fetchQuestions from "../services/fetchQuestions";

class App extends Component {
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
    const numberChoices = (question) => `${ question.choices.length } choices`;
    return (
      <div style={{ padding: "1em" }}>
        <h1 style={{ textAlign: "center", marginTop: "1em", marginBottom: "2em" }}>
          Questions
        </h1>
        <Grid doubling columns={4}>
          { questions && questions.map(question => (
          <Grid.Column key={ Math.random() }>
            <Card
              href="#card-example-link-card"
              header={ question.question }
              meta={ moment(question.published_at).format("MM-DD-YYYY") }
              description={ numberChoices(question) }
            />
          </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
