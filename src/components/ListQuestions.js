import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import fetchQuestions from "../services/fetchQuestions";
import EachQuestion from "./EachQuestion";
import Loading from "./Loading";
import NoResults from "./NoResults";

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
    return (
      <div style={{ padding: "1em" }}>
        <h1>Questions</h1>
        <div style={{ textAlign: 'right', marginTop: '-1em', marginBottom: '2em' }}>
          <Button primary href="/new">+ Question</Button>
        </div>
        { this.list() }
      </div>
    );
  }

  list() {
    const { questions } = this.state;
    if (questions == null) {
      return <Loading/>
    }
    else if (questions.length <= 0) {
      return <NoResults typeOfResult="questions"/>
    }
    else {
      return (
        <Grid doubling columns={4}>
          { questions && questions.map(question => (
            <Grid.Column key={ Math.random() }>
              <EachQuestion question={question} />
            </Grid.Column>
          ))}
        </Grid>
      )
    }
  }
}

export default ListQuestions;
