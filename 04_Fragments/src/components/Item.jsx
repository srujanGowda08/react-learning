const Item = ({ gameItem }) => {
  return (
    <li className="list-group-item me-item">
      <span className="me-text">{gameItem}</span>
    </li>
  );
};

export default Item;
