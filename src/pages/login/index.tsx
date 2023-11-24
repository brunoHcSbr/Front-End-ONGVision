import ButtonBase from "../../components/ButtonBase"
import Input from "../../components/Input"
import LogoImage from "../../components/LogoImage"
import styles from "./Login.module.css"
 
 
export default function Login(){
    

        
 
     

    
    

    

   
   
   
    return(
        
        <>
        <div className={styles.bodyBackground}>
        <LogoImage></LogoImage>
            <div className={styles.container} id={styles.container}>
                <div className={styles.loginCadastro}>
                    
                <div className={styles.formContainerSignIn}>
                    
                <form>
                    
                        <h1>Realize o Login</h1>
                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.icon}><image></image></a>
                        </div>
                        <span>Ou use seu email e senha</span>
                        <Input type="email" placeholder="Email"></Input>
                        <Input type="password" placeholder="Senha"></Input>
                        
                        <ButtonBase label="Login"></ButtonBase>
                    </form>
                </div>
                </div>
                <div  className={styles.toggleContainer}>
                    <div className={styles.toggle}>

                <div className={styles.PaineltoggleRight}>
                    <h1>Ola! é novo no nosso site?</h1>
                    <p>Registre-se clicando no botão abaixo</p>
                    <a href="/cadastro">
                    <ButtonBase label="Cadastra-se"></ButtonBase>
                    </a>
                </div>
            </div>
        </div>
            </div>
            </div>
        </>
    )
}