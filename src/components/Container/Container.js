import { useState } from "react";
import useStickyState from "../../utils/useStickyState";
import Bag from "../Bag/Bag";
import Menu from '../Menu/Menu';
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
    const [savedBags, setSavedBags] = useStickyState({}, 'bags');
    const [name, setName] = useState('Bag');
    const [result, setResult] = useState({});

    return (
        <div className={styles.container}>
            <div className={`header ${styles.menuWrapper}`}>
                <Menu
                    setName={setName}
                    savedBags={savedBags}
                    setBag={setBag}
                />
            </div>
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
                    name={name}
                    setName={setName}
                    bag={bag}
                    setBag={setBag}
                    savedBags={savedBags}
                    setSavedBags={setSavedBags}
                    setResult={setResult}
                />
            </div>
        </div>
    )
};

export default Container;