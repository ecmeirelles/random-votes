import {
  QUESTION_VOTED,
  QUESTION_CREATED,
  QUESTION_FETCHED, 
  CHOICE_SELECTED
} from "../actions/types";
import { initialState } from "./index";

const updateChoiceOfQuestion = (state, data) => {
  let { question } = state;
  const choiceIndexChanged = question.choices.findIndex(choice => choice.url === data.url);
  question.choices[choiceIndexChanged] = data;
  return question;
};

export const question = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION_FETCHED:
      return {
        ...state,
        question: action.data
      };
    case QUESTION_CREATED:
      return {
        ...state,
        newQuestion: action.data
      };
    case QUESTION_VOTED:
      return {
        ...state,
        voteSuccess: true,
        choiceSelected: undefined,
        question: updateChoiceOfQuestion(state, action.data)
      };
    case CHOICE_SELECTED:
      return {
        ...state,
        choiceSelected: action.data
      };
    default:
      return state;
  }
};
