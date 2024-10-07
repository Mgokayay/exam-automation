import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import "../styles/questionSelect.scss";
import { selectQuestion } from "../store/slices/questionSlice";

export default function QuestionSelect() {
  const dispatch = useDispatch<AppDispatch>();

  const questions = useSelector((state: RootState) => state.question.questions);
  const selectedOption = useSelector(
    (state: RootState) => state.question.selectedOption
  );

  const optionLabels = ["A", "B", "C", "D", "E"];

  return (
    <div className="questionSelect-main">
      <div className="header">
        <img src="/icons/questionSelect/ders.svg" alt="Ders Icon" />
        <div>
          <p>Türkçe</p>
          <p>{questions.length} Soru</p>
        </div>
      </div>
      {questions.map((question) => (
        <button
          key={question.id}
          onClick={() => dispatch(selectQuestion(question.id))}
          className="questions"
        >
          <div className="questionOrder">{question.id}.Soru</div>

          <div className="options">
            {question.options.map((option, index) => (
              <div
                key={option.id}
                className={`option ${
                  selectedOption[question.id] === option.id ? "selected" : ""
                }`}
              >
                <p>{optionLabels[index]}</p>
              </div>
            ))}
          </div>
        </button>
      ))}
    </div>
  );
}
