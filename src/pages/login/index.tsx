import ButtonBase from "../../components/ButtonBase"
import Input from "../../components/Input"
import styles from "./Login.module.css"
 
 
export default function Login(){
   /* const container = () => {
        document.getElementById('container');
      }    
      const signUpButton = () => {
         container.classList.add('right-panel-active');
      };  
      const signInButton = () => {
         container.classList.remove('right-panel-active');
      };*/
    return(
        <>
        <div className={styles.bodyBackground}>
            <div className={styles.container}>
                <div className={styles.formContainerSignUp}>
                    <form>
                        <h1>Criar Conta</h1>
                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.icon}><image></image></a>
                        </div>
                        <span>Ou use o seu e-mail para registrar-se</span>
                        <Input type="text" placeholder="Nome"></Input>
                        <Input type="email" placeholder="Email"></Input>
                        <Input type="password" placeholder="Senha"></Input>
                        <ButtonBase label="Cadastra-se"></ButtonBase>
                    </form>
                </div>
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
                <div className={styles.toggleContainer}>
                    <div className={styles.toggle}>
                         <div className={styles.PaineltoggleLeft}>
                             <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                             <button className={styles.hiddenLogin}>Sign In</button>
                </div>
                <div className={styles.PaineltoggleRight}>
                    <h1>Ola! é novo no nosso site?</h1>
                    <p>Registre-se clicando no botão abaixo</p>
                    <button  className={styles.hiddenCadastro}>Sign Up</button>
                </div>
            </div>
        </div>
            </div>
            </div>
        </>
    )
}