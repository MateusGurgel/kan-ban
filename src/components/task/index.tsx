import styles from "./styles.module.css"


interface TaskProps{
    text: string;
}

export function Task({text} : TaskProps) {
    return(
        <div className={styles.task}>
            <p>{text}</p>
        </div>
    )
}