import React, { Component } from "react";
import fetchQuestionById from "../services/fetchQuestionById";
import { Button } from "semantic-ui-react";
import HeaderWithBack from "./shared/HeaderWithBack";
import Details from "./Details";
import Loading from "./shared/Loading";

import "../styles/questions.css";

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
    return (
      <div className="container">
        <HeaderWithBack backTo="/" pageTitle="Question Details"/>
        { question == null ?
          <Loading/>
            :
          <div className="details-container" >
            <h3>Question: { question.question }</h3>
            <Details question={question}/>
            <Button primary className="button--vote">Save vote</Button>
          </div>
        }
      </div>
    );
  }
}

export default AboutQuestion;
