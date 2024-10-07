import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import questionsData from "../../questions.json";

interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface QuestionsState {
  questions: Question[];
  selectedQuestion: Question | null;
  selectedOption: { [key: number]: number | null };
  showAnswers: boolean;
}

const initialState: QuestionsState = {
  questions: questionsData,
  selectedQuestion: questionsData.length > 0 ? questionsData[0] : null,
  selectedOption: {},
  showAnswers: false,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    selectQuestion: (state, action: PayloadAction<number>) => {
      state.selectedQuestion =
        state.questions.find((q) => q.id === action.payload) || null;
    },
    selectOption: (
      state,
      action: PayloadAction<{ questionId: number; optionId: number }>
    ) => {
      state.selectedOption[action.payload.questionId] = action.payload.optionId;
    },
    goToNextQuestion: (state) => {
      if (state.selectedQuestion) {
        const currentIndex = state.questions.findIndex(
          (q) => q.id === state.selectedQuestion?.id
        );
        const nextQuestion = state.questions[currentIndex + 1];
        if (nextQuestion) {
          state.selectedQuestion = nextQuestion;
        }
      }
    },
    goToPreviousQuestion: (state) => {
      if (state.selectedQuestion) {
        const currentIndex = state.questions.findIndex(
          (q) => q.id === state.selectedQuestion?.id
        );
        const previousQuestion = state.questions[currentIndex - 1];
        if (previousQuestion) {
          state.selectedQuestion = previousQuestion;
        }
      }
    },
    toggleShowAnswers: (state) => {
      state.showAnswers = !state.showAnswers;
    },
  },
});

export const {
  selectQuestion,
  selectOption,
  goToNextQuestion,
  goToPreviousQuestion,
  toggleShowAnswers,
} = questionSlice.actions;

export default questionSlice.reducer;
