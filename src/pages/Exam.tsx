import "../styles/exam.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import SideBar from "../components/SideBar";
import Question from "../components/Question";
import QuestionSelect from "../components/QuestionSelect";
import Timer from "../components/Timer";
import ResultModal from "../components/ResultModal";
import ExamEndModal from "../components/ExamEndModal";
import {
  goToNextQuestion,
  goToPreviousQuestion,
  toggleShowAnswers,
} from "../store/slices/questionSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Exam = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const questions = useSelector((state: RootState) => state.question.questions);
  const selectedOption = useSelector(
    (state: RootState) => state.question.selectedOption
  );

  const [resultModalOpen, setResultModalOpen] = useState(false);
  const [exitModalOpen, setExitModalOpen] = useState(false);

  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    questions.forEach((question) => {
      const answer = selectedOption[question.id] || null;

      if (answer === null) {
        unanswered++;
      } else if (
        question.options.find(
          (option) => option.id === answer && option.isCorrect
        )
      ) {
        correct++;
      } else {
        incorrect++;
      }
    });

    return { correct, incorrect, unanswered };
  };

  const handleExitTest = () => {
    setExitModalOpen(true);
  };

  const handleConfirmExit = () => {
    setExitModalOpen(false);
    setResultModalOpen(true);
  };

  const handleEndTest = () => {
    setResultModalOpen(true);
  };

  return (
    <div className="exam-main">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="exam">
        <div className="menu">
          <div className="navigate-img">
            <img
              src="/icons/arrow-left.svg"
              alt="Arrow left"
              onClick={() => navigate("/")}
            />
          </div>

          <div className="menu-options">
            <div className="leftMenu">
              <p>Konu Tarama Testi #1</p>
              <Timer onTimeUp={handleEndTest} />
            </div>
            <div className="rightMenu">
              <div className="showAnswers">
                Cevapları Göster
                <input
                  type="checkbox"
                  onChange={() => dispatch(toggleShowAnswers())}
                />
              </div>
              <button className="examEnd" onClick={handleExitTest}>
                <img src="/icons/on-off.svg" alt="End Test Icon" />
                Testi Bitir
              </button>
            </div>
          </div>
        </div>

        <div className="question">
          <div className="questionSection">
            <div>
              <Question />
            </div>
            <div className="buttons">
              <button onClick={() => dispatch(goToPreviousQuestion())}>
                Önceki Soru
              </button>
              <button onClick={() => dispatch(goToNextQuestion())}>
                Sonraki Soru
              </button>
            </div>
          </div>
          <div className="questionSelect">
            <QuestionSelect />
          </div>
        </div>
      </div>

      <ExamEndModal
        isOpen={exitModalOpen}
        onClose={() => setExitModalOpen(false)}
        onConfirmExit={handleConfirmExit}
      />

      <ResultModal
        isOpen={resultModalOpen}
        onClose={() => setResultModalOpen(false)}
        results={calculateResults()}
      />
    </div>
  );
};

export default Exam;
