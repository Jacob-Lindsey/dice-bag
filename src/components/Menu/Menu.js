import { useState } from "react";
import { GiSwapBag } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./Menu.module.css";

const Menu = ({ setName, savedBags, setBag }) => {
    
    const [open, setOpen] = useState(false);

    const handleClick = (name, bag) => {
        setName(name)
        setBag(bag);
        setOpen(false);
    };

    return (
        <div className={styles.container}>
            {
                open ? 
                    <div className={styles.bagPanel}>
                        {
                            savedBags ?
                                Object.entries(savedBags).map(([k,v], index) =>
                                <div 
                                    className={styles.bagItem}
                                    key={`${k}${index}`}
                                    onClick={() => handleClick(k,v)}
                                >
                                    {k}
                                </div>
                                )
                            : <span>You don't have any bags saved currently</span>
                        }
                    </div>
                : null
            }
            <ul className={styles.menuList}>
                <li 
                    className={styles.menuItem}
                    onClick={() => setOpen(!open)}
                >
                    <IoMdArrowDropdown className={styles.arrow} />
                    <GiSwapBag className={styles.bag} />
                    {/* <span className={styles.menuLabel}>DICE BAGS</span> */}
                </li>
            </ul>
            <div className={styles.menuPanel}>

            </div>
        </div>
    )

};

export default Menu;