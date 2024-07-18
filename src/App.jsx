import { useState } from "react";
import GamePage from "./components/GamePage";
import Home from "./components/Home";

function App() {
  let [isGameStarted, setisGameStarted] = useState(false);
  const startGame = () => {
    setisGameStarted((prev) => !prev);
  };
  return <>{isGameStarted ? <GamePage /> : <Home startGame={startGame} />}</>;
}

export default App;
