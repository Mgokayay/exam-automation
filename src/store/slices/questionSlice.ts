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
}

const initialState: QuestionsState = {
  questions: questionsData,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
});

export const {
  /** reducers */
} = questionSlice.actions;

export default questionSlice.reducer;
