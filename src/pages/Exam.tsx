import "../styles/exam.scss";
import SideBar from "../components/SideBar";

const Exam = () => {
  return (
    <div className="exam-main">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="exam">Exam</div>
    </div>
  );
};

export default Exam;
