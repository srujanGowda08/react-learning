import AppName from "./components/AppName";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";
import "./App.css";

function App() {
  return (
    <center>
      <div className="container">
        <AppName />
        <div className="item">
          <Item1 />
          <Item2 />
        </div>
      </div>
    </center>
  );
}

export default App;
