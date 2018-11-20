import { combineReducers } from "redux";
import { questions } from "./questions";
import { question } from "./question";

export const initialState = {
  questions: null,
  question: null,
  newQuestion: null,
  voteSuccess: false,
  choiceSelected: undefined
};

export const Reducers = combineReducers({
  questions,
  question
});
