import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import HeaderWithBack from "./shared/HeaderWithBack";
import { connect } from "react-redux";
import { createAQuestion } from "../redux/actions";

class CreateQuestion extends Component {
  state = {
    choices: [""],
    title: ""
  };

  componentWillReceiveProps(nexProps) {
    const { newQuestion, history } = this.props;
    if (newQuestion !== nexProps.newQuestion) {
      history.push('/');
    }
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleChoiceChange = (index) => (event) => {
    const { choices } = this.state;
    const newChoices = choices.map((choice, sIndex) => {
      if (index !== sIndex) return choice;
      return event.target.value;
    });
    this.setState({ choices: newChoices });
  };

  handleSubmit = (event) => {
    const { createQuestionD } = this.props;
    let { title, choices } = this.state;
    choices = choices.filter(choice => choice !== "");
    const data = { question: title, choices };
    createQuestionD(data);
  };

  handleAddChoice = () => {
    const { choices } = this.state;
    this.setState({ choices: choices.concat([""]) });
  };

  handleRemoveChoice = (index) => () => {
    const { choices } = this.state;
    this.setState({ choices: choices.filter((s, sIndex) => index !== sIndex) });
  };

  render() {
    const { title } = this.state;
    return (
      <div className="container">
        <HeaderWithBack backTo="/" pageTitle="Create Question"/>
        <Form className="details-container" onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <input
                type="text"
                name="title"
                id="title"
                value={title}
                placeholder="Title"
                onChange={this.handleTitleChange}
            />
          </Form.Field>
          <Form.Field style={{ display: "flex" }}>
            <label style={{ flex: 1 }}>Choices</label>
            <Button type="button" onClick={this.handleAddChoice}>
              +
            </Button>
          </Form.Field>
          { this.choiceInputs() }
          <Button type="submit">Create</Button>
        </Form>
      </div>
    )
  }

  choiceInputs() {
    const { choices } = this.state;
    return (
      choices.map((choice, index) => (
        <Form.Field key={index} style={{ display: "flex" }}>
          <input
              type="text"
              placeholder={`Choice #${index + 1}`}
              value={choice}
              onChange={this.handleChoiceChange(index)}
              style={{ flex: 1 }}
          />
          <Button
              type="button"
              onClick={this.handleRemoveChoice(index)}
              style={{ marginLeft: 5 }}
          >
            -
          </Button>
        </Form.Field>
      ))
    )
  }
}

export default connect(
    (state) => ({
      newQuestion: state.question.newQuestion
    }),
    (dispatch) => ({
      createQuestionD: (data) => dispatch(createAQuestion(data))
    })
)(CreateQuestion);
