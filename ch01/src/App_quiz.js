import './App.css';
import { useState } from 'react'; 



const quizData = [
  { question: "지구는 태양을 돈다.", answer: "O" },
  { question: "1 + 1 = 3 이다.", answer: "X" },
  { question: "코끼리는 날 수 있다.", answer: "X" },
  { question: "물은 얼면 부피가 줄어든다.", answer: "X" },
];


function App() {
 const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);


  const handleAnswer = (userAnswer) => {
    if (userAnswer === quizData[currentIndex].answer) {
      setScore(score + 1);
      alert("정답입니다! ✅");
    } else {
      alert("틀렸습니다! ❌");
    }


    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };


  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>OX 퀴즈 게임 🏆</h1>


      {!showResult ? (
        <>
          <h2>{quizData[currentIndex].question}</h2>
          <button
            onClick={() => handleAnswer("O")}
            style={{ marginRight: "10px", padding: "10px 20px", fontSize: "18px" }}
          >
            O
          </button>
          <button
            onClick={() => handleAnswer("X")}
            style={{ padding: "10px 20px", fontSize: "18px" }}
          >
            X
          </button>
        </>
      ) : (
        <div>
          <h2>게임 종료!</h2>
          <p>당신의 점수: {score} / {quizData.length}</p>
          <button onClick={() => { setCurrentIndex(0); setScore(0); setShowResult(false); }}>
            다시 시작 🔄
          </button>
        </div>
      )}
    </div>
  );
}


export default App;
