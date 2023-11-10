import Layout from "../../components/Layout"
import Topo from "../../components/Topo"
import styles from "../../pages/perfil/Perfil.module.css"

export default function Perfil(){
    return(
     
        <>
        <Topo></Topo>
            <div className={styles.body}>
      <div className={styles.profileInfo}>
        <div className={styles.form}>
          <div className={styles.birthdateLocation}>

          <div className={styles.div2}>
              <div className={styles.input2}>
                <div className={styles.divWrapper}>
                  <input placeholder="Dia" className={styles.textWrapper3}></input>
                </div>
                <div className={styles.input3}>
                  <input placeholder="Mês"className={styles.textWrapper4}></input>
                </div>
                <div className={styles.input4}>
                  <input placeholder="Ano" className={styles.textWrapper3}></input>
                </div>
              </div>
              <div className={styles.textWrapper5}>DATA DE NASCIMENTO*</div>
            </div>

            <div className={styles.div}>
              <div className={styles.input}>
                <input placeholder="Ex:13569-697"className={styles.textWrapper}></input>
              </div>
              <div className={styles.textWrapper2}>CEP*</div>
              </div><div>
              </div><div>
              </div><div>
            </div>
           
          </div>
          <div className={styles.usernameEmail}>
            <div className={styles.email}>
              <div className={styles.div3}>
                <div className={styles.textWrapper2}>EMAIL*</div>
                <div className={styles.textWrapper6}>Verificar email</div>
              </div>
              <input className={styles.input5} placeholder="hello@gmail.com" type="email" />
            </div>
            <div className={styles.div2}>
              <div className={styles.input6}>
                <input placeholder="Ex:User4569" className={styles.textWrapper}></input>
              </div>
              <div className={styles.textWrapper5}>NOME DE USUARIO*</div>
            </div>
          </div>
          <div className={styles.firstLastName}>
            <div className={styles.div}>
              <div className={styles.input7}>
                <input placeholder="Ex:Carlos" className={styles.textWrapper}></input>
              </div>
              <div className={styles.textWrapper5}>SOBRENOME*</div>
            </div>
            <div className={styles.div2}>
              <div className={styles.input8}>
                <input placeholder="Ex:José" className={styles.textWrapper}></input>
              </div>
              <div className={styles.textWrapper5}>NOME*</div>
            </div>
          </div>
          <div className={styles.obrigatorio}>*OBRIGATORIO</div>

          
          <button className={styles.button}>
            <button className={styles.salvar}>SALVAR</button>
          </button>
          <div className={styles.changePassword}>
            <div className={styles.form2}>
              <button className={styles.button}>
                <button className={styles.salvar}>SALVAR</button>
              </button>
              <div className={styles.newPassword}>
                <div className={styles.div}>
                  <input  type="password" placeholder="" className={styles.input9}></input>
                  <div className={styles.textWrapper5}>CONFIRMAR SENHA</div>
                </div>
                <div className={styles.div2}>
                  <input type="password" placeholder="" className={styles.input9}></input>
                  <div className={styles.textWrapper5}>NOVA SENHA</div>
                </div>
              </div>
              <div className={styles.currentPassword}>
                <input type="password" placeholder="" className={styles.input9}></input> 
                <div className={styles.textWrapper5}>SENHA ATUAL</div>
              </div>
            </div>
            <div className={styles.textWrapper7}>Mudar Senha</div>
          </div>
        </div>
        <div className={styles.textWrapper8}>Perfil</div>
      </div>
    </div>
    
        </>
        
    )
}
