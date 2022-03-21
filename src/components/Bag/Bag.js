import { useState } from "react";
import { GiRollingDices } from "react-icons/gi";
import { MdModeEdit } from "react-icons/md";
import { TiMinus, TiPlus } from "react-icons/ti";
import styles from "./Bag.module.css";

const Bag = ({ bag, setBag }) => {

    const [name, setName] = useState();
    const [editing, setEditing] = useState(false);

    const handleDecrement = (die) => {
        const newBag = {...bag};
        if (newBag[die] === 0) {
            return;
        }
        newBag[die] = newBag[die] - 1;
        setBag(newBag);
    };

    const handleIncrement = (die) => {
        const newBag = {...bag};
        newBag[die] = newBag[die] + 1;
        setBag(newBag);
    };
    
    
    return (
        <div className={styles.container}>

            { editing ? 
                <div className={styles.formContainer}>
                    <div className={styles.formWindow}>
                        <p className={styles.formInfo}>Change the name of the current bag.</p>
                        <div>
                            <input 
                                className={styles.formInput}
                                value={name} 
                            />
                            <div className={styles.buttonContainer}>
                                <button className={styles.saveButton}>Save Changes</button>
                                <button 
                                    className={styles.cancelButton}
                                    onClick={() => setEditing(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null 
            }

            <span className={styles.title}>
                Bag
                <MdModeEdit 
                    className={styles.titleIcon}
                    onClick={() => setEditing(true)}
                />
            </span>
            <ul className={styles.bagList}>
                {
                    Object.entries(bag).map(([key, value]) =>
                        <li 
                            className={styles.bagItem}
                            key={key}
                        >
                            <span className={styles.dieLabel}>{key}</span>
                            <TiMinus className={styles.minusIcon} 
                                onClick={() => handleDecrement(key)}
                            />
                            <span className={styles.dieCount}>{value}</span>
                            <TiPlus className={styles.plusIcon} 
                                onClick={() => handleIncrement(key)}
                            />
                        </li>
                    )
                }
                <button 
                    className={styles.rollButton}
                >
                    <GiRollingDices className={styles.buttonIcon} />
                    <span className={styles.buttonText}>Roll Dice</span>
                </button>
            </ul>
        </div>
    )
};

export default Bag;