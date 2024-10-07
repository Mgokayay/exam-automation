import { useNavigate } from "react-router-dom";
import "../styles/home.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate("/exam");
  };

  return (
    <div className="home-container">
      <h1>Hoşgeldiniz!</h1>
      <p>
        Test otomasyonu uygulamasına hoş geldiniz. Hazır olduğunuzda testi
        başlatabilirsiniz.
      </p>
      <button onClick={handleStartTest} className="start-test-btn">
        Testi Başlat
      </button>
    </div>
  );
};

export default Home;
