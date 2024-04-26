import Item from "./Item";

const Games = ({ items }) => {
  // let games = ["VolleyBall", "FootBall", "Kabbadi", "ThrowBall", "Kho-Kho"];

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} gameItem={item}></Item>
      ))}
    </ul>
  );
};

export default Games;
