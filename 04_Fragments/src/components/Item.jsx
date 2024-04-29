const Item = ({ gameItem, played, play }) => {
  return (
    <li className={`list-group-item me-item ${played && "active"}`}>
      <span className="me-text">{gameItem}</span>
      <button className="btn btn-info float-end " onClick={play}>
        Play
      </button>
    </li>
  );
};

export default Item;
