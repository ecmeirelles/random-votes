import React, { Component } from "react";
import fetchQuestionById from "../services/fetchQuestionById";
import { Button } from "semantic-ui-react";
import HeaderWithBack from "./HeaderWithBack";
import Details from "./Details";
import Loading from "./Loading";

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
      <div style={{ padding: '1em' }}>
        <HeaderWithBack backTo="/" pageTitle="Question Details"/>
        { question == null ?
          <Loading/>
            :
          <div style={{ width: '50vw', margin: 'auto' }}>
            <h3>Question: { question.question }</h3>
            <Details question={question}/>
            <Button primary style={{ float: 'right', marginBottom: '1em' }}>Save vote</Button>
          </div>
        }
      </div>
    );
  }
}

export default AboutQuestion;
