import Games from "./components/Games";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import GameInput from "./components/GameInput";

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
  const handleOnchange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="game-heading">Outdoor Games</h1>
        {/* using ternary operator */}
        {/* {games.length === 0 ? <h2>Go Play some games.... </h2> : null} */}

        {/* using logical conditional rendering */}
        <ErrorMessage items={games} />
        <GameInput handleOnchange={handleOnchange} />
        <Games items={games} />
      </Container>

      <Container>
        <p>We need play this games regulary.It makes our body strength</p>
      </Container>
    </>
  );
}

export default App;
