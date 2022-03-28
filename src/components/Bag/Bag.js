import { useCallback, useEffect, useState } from "react";
import { GiRollingDices } from "react-icons/gi";
import { IoSaveSharp } from "react-icons/io5";
import { TiDelete, TiMinus, TiPlus } from "react-icons/ti";
import rollDice from "../../utils/rollDice";
import styles from "./Bag.module.css";

const Bag = ({ name, setName, bag, setBag, savedBags, setSavedBags, setResult }) => {

    const [newName, setNewName] = useState(name);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyboardShortcut, false);
        return () => { 
            window.removeEventListener('keydown', handleKeyboardShortcut, false) 
        };
    });

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

    const handleSetToZero = (die) => {
        const newBag = {...bag};
        newBag[die] = 0;
        setBag(newBag);
    };

    const convertToDiceNotation = () => {
        let result = {'total':0};
        for (const [key, val] of Object.entries(bag)) {
            // Builds a slug of die notation (2d10 or 4d20)
            let slug = val.toString() + key;
            if (val === 0) {
                result[slug] = 0;
            }
            // Adds to the running total for each ground of die rolls, as well as the grand total
            for (let i=0; i<val; i++) {
                let newRoll = rollDice(key);
                result[slug] = result[slug] ? result[slug] + newRoll : newRoll;
                result['total'] = result['total'] + newRoll;
            }
        }
        setResult(result);  
    };

    const handleSaveBag = (e) => {
        if (name !== '') {
            setName(newName);
            let newSavedBags = {...savedBags};
            newSavedBags[newName] = bag;
            setSavedBags(newSavedBags);
            setSaving(false);
        }
    };

    const handleKeyboardShortcut = useCallback((event) => {
        if (event.key === 'Escape') {
            setSaving(false);
        }
    }, [])
    
    return (
        <div className={styles.container}>

            { saving ? 
                <div className={styles.formContainer}>
                    <div className={styles.formWindow}>
                        <p className={styles.formInfo}>Change the name of the current bag.</p>
                        <div>
                            <input 
                                className={styles.formInput}
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                name="bagName"
                                autoComplete="off"
                            />
                            <div className={styles.buttonContainer}>
                                <button
                                    className={styles.saveButton}
                                    onClick={handleSaveBag}
                                >
                                    Save Changes
                                </button>
                                <button 
                                    className={styles.cancelButton}
                                    onClick={() => setSaving(false)}
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

            <div className={styles.title}>
                <span className={styles.titleText}>{name}</span>
                <div 
                    className={styles.saveWrapper}
                    onClick={() => setSaving(true)}
                >
                    <IoSaveSharp className={styles.titleIcon} />
                    <span className={styles.save}>SAVE BAG</span>
                </div>
            </div>
            <ul className={styles.bagList}>
                {
                    Object.entries(bag).map(([key, value]) =>
                        <li 
                            className={styles.bagItem}
                            key={key}
                        >
                            <span className={styles.dieLabel}>{key}</span>
                            <TiMinus 
                                className={styles.minusIcon} 
                                onClick={() => handleDecrement(key)}
                            />
                            <span className={styles.dieCount}>{value}</span>
                            <TiPlus 
                                className={styles.plusIcon} 
                                onClick={() => handleIncrement(key)}
                            />
                            <TiDelete
                                className={styles.deleteIcon}
                                onClick={() => handleSetToZero(key)}
                            />
                        </li>
                    )
                }
                <button 
                    className={styles.rollButton}
                    onClick={convertToDiceNotation}
                >
                    <GiRollingDices className={styles.buttonIcon} />
                    <span className={styles.buttonText}>Roll Dice</span>
                </button>
            </ul>
        </div>
    )
};

export default Bag;