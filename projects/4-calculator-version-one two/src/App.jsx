import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (item) => {
    if (item === "C") {
      setCalVal("");
    } else if (item === "RES") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + item;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <center className={styles.divBox}>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </center>
  );
}

export default App;
