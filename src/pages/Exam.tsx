import "../styles/exam.scss";
import SideBar from "../components/SideBar";
import Question from "../components/Question";
import QuestionSelect from "../components/QuestionSelect";
import Timer from "../components/Timer";
import ResultModal from "../components/ResultModal";
import {
  goToNextQuestion,
  goToPreviousQuestion,
  toggleShowAnswers,
} from "../store/slices/questionSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useState } from "react";

const Exam = () => {
  const dispatch = useDispatch<AppDispatch>();

  const questions = useSelector((state: RootState) => state.question.questions);
  const selectedOption = useSelector(
    (state: RootState) => state.question.selectedOption
  );

  const [modalOpen, setModalOpen] = useState(false);

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

  const handleEndTest = () => {
    const results = calculateResults();
    setModalOpen(true);
  };

  return (
    <div className="exam-main">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="exam">
        <div className="menu">
          <img src="/icons/arrow-left.svg" alt="Arrow left" />
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
              <button className="examEnd" onClick={handleEndTest}>
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

      <ResultModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        results={calculateResults()}
      />
    </div>
  );
};

export default Exam;
