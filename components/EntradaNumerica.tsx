import styles from "../styles/EntradaNumerica.module.css"

interface EntradaNumericaProps {
    text: string;
    value: number;
    onChange: (newValue: number) => void;
}
export default function EntradaNumerica(props: EntradaNumericaProps) {
    const decremento = ()=> props.onChange(props.value-1);
    const incremento = ()=> props.onChange(props.value+1);
    return (
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>
                {props.text}
            </span>
            <span className={styles.value}>
                {props.value}
            </span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={decremento}>-</button>
                <button className={styles.btn} onClick={incremento}>+</button>

            </div>
        </div>
    )
}