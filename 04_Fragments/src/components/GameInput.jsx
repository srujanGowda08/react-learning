import styles from "./GameInput.module.css";
const GameInput = ({ handleOnchange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter games Here!!"
        className={styles.gameInput}
        onChange={handleOnchange}
      />
      {/* <button className="btn btn-danger">ADD</button> */}
    </div>
  );
};

export default GameInput;
