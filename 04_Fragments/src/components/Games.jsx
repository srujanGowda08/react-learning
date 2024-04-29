import { useState } from "react";
import Item from "./Item";

const Games = ({ items }) => {
  // let games = ["VolleyBall", "FootBall", "Kabbadi", "ThrowBall", "Kho-Kho"];

  let [activeGames, setActiveGames] = useState([]);

  let onPlayButton = (item) => {
    let newGame = [...activeGames, item];
    setActiveGames(newGame);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          gameItem={item}
          play={() => onPlayButton(item)}
          played={activeGames.includes(item)}
        ></Item>
      ))}
    </ul>
  );
};

export default Games;
