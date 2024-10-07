import React from "react";
import "../styles/resultModal.scss";

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  results: {
    correct: number;
    incorrect: number;
    unanswered: number;
  };
}

const ResultModal: React.FC<ResultModalProps> = ({
  isOpen,
  onClose,
  results,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Test Sonuçları</h2>
        <p className="correct">Doğru Cevaplar: {results.correct}</p>
        <p className="incorrect">Yanlış Cevaplar: {results.incorrect}</p>
        <p className="unanswered">Boş Sorular: {results.unanswered}</p>
        <button onClick={onClose} className="modal-button">
          Kapat
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
