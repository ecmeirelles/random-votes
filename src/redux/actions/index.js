import {
  QUESTIONS_FETCH,
  QUESTIONS_FETCHED,
  QUESTION_FETCH,
  QUESTION_FETCHED,
  QUESTION_VOTE,
  QUESTION_VOTED,
  QUESTION_CREATE,
  QUESTION_CREATED,
  CHOICE_SELECTED,
  CHANGE_VOTE_SUCCESS
} from "./types";
import fetchQuestions from "../../services/fetchQuestions";
import fetchQuestionById from "../../services/fetchQuestionById";
import voteChoice from "../../services/voteChoice";
import createQuestion from "../../services/createQuestion";

export function fetchAllQuestions() {
  return (dispatch) => {
    dispatch({ type: QUESTIONS_FETCH });
    fetchQuestions().then((data) => {
      dispatch({
        type: QUESTIONS_FETCHED,
        data
      });
    });
  }
};

export function fetchQuestionByID(id) {
  return (dispatch) => {
    dispatch({ type: QUESTION_FETCH });
    fetchQuestionById(id).then((data) => {
      dispatch({
        type: QUESTION_FETCHED,
        data
      });
    });
  }
};

export function createAQuestion(question) {
  return (dispatch) => {
    dispatch({ type: QUESTION_CREATE });
    createQuestion(question).then((data) => {
      dispatch({
        type: QUESTION_CREATED,
        data
      });
    });
  }
};

export function voteOnChoice({ questionId, choiceId }) {
  return (dispatch) => {
    dispatch({ type: QUESTION_VOTE });
    voteChoice({ questionId, choiceId }).then((data) => {
      dispatch({
        type: QUESTION_VOTED,
        data
      });
    });
  }
};

export function selectAChoice(id) {
  return (dispatch) => {
    dispatch({
      type: CHOICE_SELECTED,
      data: id
    });
  }
};

export function changeMessageVisibility() {
  return (dispatch) => {
    dispatch({
      type: CHANGE_VOTE_SUCCESS
    });
  }
};
