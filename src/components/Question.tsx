import "../styles/question.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { selectOption } from "../store/slices/questionSlice";

export default function Question() {
  const dispatch = useDispatch<AppDispatch>();

  const selectedQuestion = useSelector(
    (state: RootState) => state.question.selectedQuestion
  );
  const selectedOption = useSelector(
    (state: RootState) =>
      state.question.selectedOption[selectedQuestion?.id || 0]
  );
  const showAnswers = useSelector(
    (state: RootState) => state.question.showAnswers
  );

  if (!selectedQuestion) return <p>Henüz soru seçilmedi.</p>;

  return (
    <div className="question-main">
      <div key={selectedQuestion.id}>
        <div className="header">
          <div className="header-title">
            <p>Soru: Türkçe #{selectedQuestion.id}</p>
          </div>
          <div className="header-icons">
            <img src="/icons/question/brush.svg" alt="Brush icon" />
            <img src="/icons/question/zoom-in.svg" alt="Zoom in icon" />
            <img src="/icons/question/zoom-out.svg" alt="Zoom out icon" />
            <img src="/icons/question/alert.svg" alt="Alert icon" />
          </div>
        </div>
        <div className="questions">
          <p>{selectedQuestion.text}</p>
          {selectedQuestion.options.map((option) => (
            <label
              key={option.id}
              className={
                showAnswers && option.isCorrect
                  ? "correct"
                  : showAnswers &&
                    selectedOption === option.id &&
                    !option.isCorrect
                  ? "incorrect"
                  : ""
              }
            >
              <input
                type="radio"
                name={`question-${selectedQuestion.id}`}
                id={`option-${option.id}`}
                checked={selectedOption === option.id}
                onChange={() =>
                  dispatch(
                    selectOption({
                      questionId: selectedQuestion.id,
                      optionId: option.id,
                    })
                  )
                }
              />
              <p className="option-text">{option.text}</p>
              {showAnswers && option.isCorrect && (
                <button className="solution-button">
                  <img src="/icons/correct-arrow.svg" alt="Correct Arrow" />
                  Çözüm Videosu
                </button>
              )}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
