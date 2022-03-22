import { useState } from "react";
import Bag from "../Bag/Bag";
import DiceSelect from "../DiceSelect/DiceSelect";
import RollResult from "../RollResult/RollResult";
import styles from "./Container.module.css";

const Container = () => {
    const [bag, setBag] = useState({
        d2: 0,
        d4: 0,
        d6: 0,
        d8: 0,
        d10: 0,
        d12: 0,
        d20: 0,
    });
    const [result, setResult] = useState({});

    return (
        <div className={styles.container}>
            <div className={`dice-select ${styles.diceSelect}`}>
                <DiceSelect
                    bag={bag}
                    setBag={setBag}
                />
            </div>
            <div className={`roll-result ${styles.rollResult}`}>
                <RollResult result={result} />
            </div>
            <div className={`dice-bag ${styles.diceBag}`}>
                <Bag 
                    bag={bag}
                    setBag={setBag}
                    setResult={setResult}
                />
            </div>
        </div>
    )
};

export default Container;