import { useEffect, useState } from "react";
import styles from "./RollResult.module.css";

const RollResult = ({ result }) => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        setResults(prevResults => [...prevResults, result]);
    }, [result]);

    return (
        <div className={styles.container}>
            <span className={styles.title}>Rolls</span>
            <div className={styles.list}>
                {
                    results ? results.map((res, index) => (
                        <div className={styles.item} key={index}>
                            {
                                Object.entries(res).map(([k,v]) => 
                                    <div className={styles.dieSection} key={k}>
                                        <div className={styles.sectionTitle}>{k}</div>
                                        <div className={`${styles.sectionValue} ${v === 0 ? styles.dim : null}`}>{v}</div>
                                    </div>
                                )
                            }
                        </div>
                    ))
                    :
                    null
                }
            </div>
        </div>
    )
};

export default RollResult;