import { useEffect, useState } from "react";
import "../styles/timer.scss";

interface TimerProps {
  onTimeUp: () => void;
}

export default function Timer({ onTimeUp }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(900);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timerId);
    } else {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="timer">
      <p>Kalan Süre: {formatTime(timeLeft)}</p>
    </div>
  );
}
