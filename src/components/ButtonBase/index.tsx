
import styles from './ButtonBase.module.css'

interface Props {
    label: string
}

function ButtonBase({label}: Props) {
    return (
        <>
        <button className={styles.botaoBase} >{label}</button>
        </>
    )
}

export default ButtonBase