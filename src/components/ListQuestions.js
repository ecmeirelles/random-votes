import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Button } from "semantic-ui-react";
import EachQuestion from "./EachQuestion";
import Loading from "./shared/Loading";
import NoResults from "./shared/NoResults";
import { fetchAllQuestions } from "../redux/actions";

class ListQuestions extends Component {
  componentDidMount() {
    const { fetchQuestionsD } = this.props;
    fetchQuestionsD();
  };

  render() {
    return (
      <div className="container">
        <h1>Questions</h1>
        <div className="button--new">
          <Button primary href="/new">+ Question</Button>
        </div>
        { this.list() }
      </div>
    );
  }

  list() {
    const { questions } = this.props;
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

export default connect(
  (state) => ({
    questions: state.questions.questions
  }),
  (dispatch) => ({
    fetchQuestionsD: () => dispatch(fetchAllQuestions())
  })
)(ListQuestions);
