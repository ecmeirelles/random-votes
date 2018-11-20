import { QUESTIONS_FETCHED } from "../actions/types";
import { initialState } from "./index";

export const questions = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_FETCHED:
      return {
        ...state,
        questions: action.data
      };
    default:
      return state;
  }
};
