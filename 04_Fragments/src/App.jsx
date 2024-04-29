import Games from "./components/Games";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import GameInput from "./components/GameInput";
import { useState } from "react";

function App() {
  //let games = [];
  // let games = [
  //   "VolleyBall",
  //   "FootBall",
  //   "Kabbadi",
  //   "ThrowBall",
  //   "Kho-Kho",
  //   "Hockey",
  // ];

  //by using if conditional rendering.
  // if (games.length === 0) {
  //   return <h2>Go Play some games.... </h2>;
  // }

  // let textStateArr = useState("Games Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  let [textToShow, setTextState] = useState();
  let [games, setGames] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let newGame = e.target.value;
      e.target.value = "";
      let newGameItem = [...games, newGame];
      setGames(newGameItem);
      console.log(newGame);
    }
  };
  return (
    <>
      <Container>
        <h1 className="game-heading">Outdoor Games</h1>
        {/* using ternary operator */}
        {/* {games.length === 0 ? <h2>Go Play some games.... </h2> : null} */}

        {/* using logical conditional rendering */}
        <GameInput handleKeyDown={handleKeyDown} />
        <ErrorMessage items={games} />
        <Games items={games} />
      </Container>

      <Container>
        <p>We need play this games regulary.It makes our body strength</p>
      </Container>
    </>
  );
}

export default App;
