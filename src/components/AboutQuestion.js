import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Message } from "semantic-ui-react";
import HeaderWithBack from "./shared/HeaderWithBack";
import Loading from "./shared/Loading";
import Details from "./Details";
import { fetchQuestionByID, voteOnChoice } from "../redux/actions";
import "../styles/questions.css";

class AboutQuestion extends Component {
  componentDidMount() {
    const { fetchQuestionD, match } = this.props;
    fetchQuestionD(match.params.id);
  }

  saveVote = () => {
    const { voteQuestionD, choiceSelected, match } = this.props;
    voteQuestionD({
      questionId: match.params.id,
      choiceId: choiceSelected
    });
  };

  render() {
    const { question, voteSuccess } = this.props;
    return (
      <div className="container">
        <HeaderWithBack backTo="/" pageTitle="Question Details"/>
        { question == null ?
          <Loading/>
            :
          <div className="details-container" >
            <h3>Question: { question.question }</h3>
            <Message positive hidden={!voteSuccess}>
              <p>Your vote was successfully registered.</p>
            </Message>
            <Details />
            <Button primary className="button--vote" onClick={this.saveVote}>
              Save vote
            </Button>
          </div>
        }
      </div>
    );
  }
}

export default connect(
    (state) => ({
      question: state.question.question,
      choiceSelected: state.question.choiceSelected,
      voteSuccess: state.question.voteSuccess
    }),
    (dispatch) => ({
      fetchQuestionD: (id) => dispatch(fetchQuestionByID(id)),
      voteQuestionD: ({ questionId, choiceId }) => dispatch(voteOnChoice({ questionId, choiceId }))
    })
)(AboutQuestion);
