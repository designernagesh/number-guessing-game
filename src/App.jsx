import { useState } from "react";

function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [randomNumber, setRandomNumber] = useState("");
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [guessedNumbers, setGuessedNumbers] = useState([]);

  let minNumber = 1;
  let maxNumber = 10;

  const inputHandler = (e) => {
    setInputNumber(e.target.value);
  };

  const buttonHandler = () => {
    if (/^[0-9]+$/.test(inputNumber) && inputNumber) {
      let randomNumber =
        Math.floor(Math.random() * (maxNumber - minNumber) + 1) + minNumber;
      setRandomNumber(randomNumber);

      setCount((prevCount) => prevCount + 1);

      setGuessedNumbers((prevGuess) => [...prevGuess, inputNumber]);

      setInputNumber("");
      
      if (inputNumber === randomNumber) {
        setMessage("Yippie You WIN!");
      } else if (inputNumber < randomNumber) {
        setMessage("Your Guess is LOW!");
      } else if (inputNumber > randomNumber) {
        setMessage("Your Guess is HIGH!");
      }
    } else {
      alert("Please enter a valid number");
      setInputNumber("");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <h2 className="title">Number Guessing Game</h2>
        <p className="sub-title">
          I am thinking of a Number between 1 - 10! 😊
        </p>
        <div className="wrapper">
          <form onSubmit={submitHandler}>
            <input
              placeholder="Guess the No."
              type="text"
              value={inputNumber}
              onChange={inputHandler}
            />
            <button type="submit" onClick={buttonHandler}>
              Guess the Number
            </button>
          </form>
        </div>
        <p className="message">{message}</p>
        <div className="two-cols">
          <p>
            The number was: <strong>{randomNumber}</strong>
          </p>
          <p>
            No. of Guesses: <strong>{count}</strong>
          </p>
        </div>
        <p>
          Guessed numbers are: <strong>{guessedNumbers.join(", ")}</strong>
        </p>
      </div>
    </>
  );
}

export default App;
