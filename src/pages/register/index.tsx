import ButtonBase from "../../components/ButtonBase"
import Input from "../../components/Input"
import LogoImage from "../../components/LogoImage"
import styles from "./Register.module.css"
 
 
export default function Register(){
    
   
    return(
        
        <>
        <div className={styles.bodyBackground}>
        <LogoImage></LogoImage>
            <div className={styles.container} id={styles.container}>
                <div className={styles.loginCadastro}>
                <div className={styles.formContainerSignUp}>
                    <form>
                        <h1>Criar Conta</h1>
                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.icon}><image></image></a>
                        </div>
                        <span>Ou use o seu e-mail para registrar-se</span>
                        <Input type="text" placeholder="Nome"></Input>
                        <Input type="text" placeholder="CEP"></Input>
                        <Input type="date" placeholder="Data de nascimento"></Input>
                        <Input type="email" placeholder="Email"></Input>
                        <Input type="password" placeholder="Senha"></Input>
                        <a href="/">
                        <ButtonBase label="Cadastra-se"></ButtonBase>
                        </a>
                    </form>
                </div>
                <div className={styles.formContainerSignIn}>
                </div>
                </div>
                <div  className={styles.toggleContainer}>
                    <div className={styles.toggle}>
                <div className={styles.PaineltoggleRight}>
                    <h1>Olá! Já tem um cadastro no nosso site?</h1>
                    <p>Realize o login clicando no botão abaixo</p>
                    <a href="/">
                    <ButtonBase label="Login"></ButtonBase>
                    </a>
                </div>
            </div>
        </div>
            </div>
            </div>
        </>
    )
}