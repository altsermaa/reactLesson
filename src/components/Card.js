import styles from "./Card.module.css"

export const Card = (props) => {
    return (
        <div className={styles.container}>
            <h1>{props.title}</h1>

            <p>{props.desc} </p>
        </div>
    );
};