import { useState } from "react";

function App() {

  const [inputNumber, setInputNumber] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [ guessedNumbers, setGuessedNumbers ] = useState([]);

  let minNumber = 1;
  let maxNumber = 10;

  const inputHandler = (e) => {
    setInputNumber(e.target.value);
  }
  
  const buttonHandler = () => {
    if(inputNumber) {
      let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + 1) + minNumber;
      setRandomNumber(randomNumber);
      
      setCount(prevCount => prevCount + 1);
      
      setGuessedNumbers( prevGuess => [
        ...prevGuess,
        inputNumber
      ])
      
      setInputNumber("");

      if (inputNumber === randomNumber) {
        setMessage('Yippie You WIN!');
      }
      else if (inputNumber < randomNumber) {
        setMessage('Your Guess is LOW!');
      }
      else if (inputNumber > randomNumber) {
        setMessage('Your Guess is HIGH!');
      }
    } else {
      alert("kk")
    }
  }
  return (
    <>
      <div className="container">
        <h2 className="title">Number Guessing Game</h2>
        <p className="sub-title">
          I am thinking of a Number between 1 - 10! 😊
        </p>
        <p>Can you guess it?</p>

        <input placeholder="Guess the No." type="text" value={inputNumber} onChange={inputHandler} />
        {message}
        The number was: {randomNumber}
        No. of Guesses: {count}
        Guessed numbers are: {guessedNumbers.join(", ")}
        <button onClick={buttonHandler}>Guess the Number</button>
      </div>
    </>
  );
}

export default App;
