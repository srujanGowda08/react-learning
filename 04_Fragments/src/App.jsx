import Games from "./components/Games";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  //let games = [];
  let games = [
    "VolleyBall",
    "FootBall",
    "Kabbadi",
    "ThrowBall",
    "Kho-Kho",
    "Hockey",
  ];

  //by using if conditional rendering.
  // if (games.length === 0) {
  //   return <h2>Go Play some games.... </h2>;
  // }
  return (
    <>
      <h1 className="game-heading">Outdoor Games</h1>
      {/* using ternary operator */}
      {/* {games.length === 0 ? <h2>Go Play some games.... </h2> : null} */}

      {/* using logical conditional rendering */}
      <ErrorMessage items={games} />
      <Games items={games} />
    </>
  );
}

export default App;
