import styles from "./DiceSelect.module.css";

const DiceSelect = ({ bag, setBag }) => {

    const handleAddDice = (val) => {
        const newBag = {...bag};
        newBag[val] = newBag[val] ? newBag[val] + 1 : 1;
        setBag(newBag);
    };

    return (
        <div className={styles.container}>
            <ul className={styles.diceList}>
                <li 
                    className={styles.dice}
                    onClick={() => handleAddDice('d2')}
                >
                    <span>d2</span>
                </li>
                <li 
                    className={styles.dice}
                    onClick={() => handleAddDice('d4')}
                >
                    <span>d4</span>
                </li>
                <li 
                    className={styles.dice}
                    onClick={() => handleAddDice('d6')}
                >
                    <span>d6</span>
                </li>
                <li 
                    className={styles.dice}
                    onClick={() => handleAddDice('d8')}
                >
                    <span>d8</span>
                </li>
                <li 
                    className={styles.dice}
                    onClick={() => handleAddDice('d10')}
                >
                    <span>d10</span>
                </li>
                <li 
                    className={styles.dice}
                    onClick={() => handleAddDice('d12')}
                >
                    <span>d12</span>
                </li>
                <li 
                    className={styles.dice}
                    onClick={() => handleAddDice('d20')}
                >
                    <span>d20</span>
                </li>
            </ul>
        </div>
    )

};

export default DiceSelect;