import styles from "./Die.module.css";

const Die = ({ sides }) => {

    const shape = 
        sides === 2
            ? 'd2'
        : sides === 4 
            ? 'd4'
        : sides === 6
            ? 'd6'
        : sides === 8
            ? 'd8'
        : sides === 10
            ? 'd10'
        : sides === 12
            ? 'd12'
        : sides === 20
            ? 'd20'
        : null;


    return (
        <h1>{shape}</h1>
    )

};

export default Die;

