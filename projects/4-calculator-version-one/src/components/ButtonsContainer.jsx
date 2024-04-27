import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonName = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "C",
    "RES",
    "+",
    "-",
    "*",
    "/",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonName.map((item) => (
        <button className={styles.button}>{item}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
