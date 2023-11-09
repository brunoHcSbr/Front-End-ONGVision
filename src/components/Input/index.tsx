import styles from './Input.module.css'

interface Props {
    type: 'text' | 'email' | 'password'
    placeholder: string
}

function Input({type,placeholder}: Props) {
    return (
        <>
        <input className={styles.Input} type={type} placeholder={placeholder} />
        </>
    )
}

export default Input