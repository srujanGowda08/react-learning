import styles from "./GameInput.module.css";
const GameInput = ({ handleKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter games Here!!"
        className={styles.gameInput}
        onKeyDown={handleKeyDown}
      />
      {/* <button className="btn btn-danger">ADD</button> */}
    </div>
  );
};

export default GameInput;
