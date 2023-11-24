import styles from "./LogoImage.module.css"

  export default function LogoImage(){
    
    return(
        
        <>
        <div className={styles.divLogo}>
            <img className={styles.imageLogo} src="https://i.ibb.co/7CtFKMf/logo.png" alt="" />
            </div>
        </>
    )
}