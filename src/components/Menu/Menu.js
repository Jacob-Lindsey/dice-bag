import { useState } from "react";
import { GiSwapBag } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./Menu.module.css";

const Menu = () => {
    
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            {
                open ? 
                    <div className={styles.bagPanel}>
                        <div 
                            className={styles.bagItem}    
                            onClick={() => setOpen(false)}
                        >
                            BAG 1
                        </div>
                        <div 
                            className={styles.bagItem}    
                            onClick={() => setOpen(false)}
                        >
                            BAG 2
                        </div>
                        <div 
                            className={styles.bagItem}    
                            onClick={() => setOpen(false)}
                        >
                            BAG 3
                        </div>
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