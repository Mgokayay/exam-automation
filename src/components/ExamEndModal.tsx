import React from "react";
import "../styles/examEndModal.scss"; // Stilleri bu dosyada tanımlayabilirsin.

interface ExamEndModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmExit: () => void;
}

const ExamEndModal: React.FC<ExamEndModalProps> = ({
  isOpen,
  onClose,
  onConfirmExit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <img src="/icons/alert-circle.svg" alt="Alert Circle" />
        </div>
        <div className="modal-body">
          <h2>Ayrılmak istediğine emin misin?</h2>
          <p className="modal-p">
            Testi yarıda bırakıyorsun. İstediğin zaman kaldığın sorudan devam
            edebilirsin.
          </p>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Vazgeç
          </button>
          <button className="btn-confirm" onClick={onConfirmExit}>
            Testten Çık
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamEndModal;
