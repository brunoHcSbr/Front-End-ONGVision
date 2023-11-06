import Layout from "../../components/Layout";
import styles from './Home.module.css'


export default function Home() {

  return (
    <>
    <Layout>
      <div className={styles.backgroundHome}>
      <div className={styles.bemVindoBackground}>
        <div className={styles.backgroundNotice}>
            <p className={styles.brand}> ONG's | Instituições</p>
            <h1 className={styles.bemVindo}> Seja Bem-Vindo</h1>
            <p className={styles.notice}>Esse é um site para procura de ONG's, juntando vários tipos. <br></br>
            Faça sua doação!</p>
          </div>
        <div className={styles.buttonHomeDiv}>
          <a href="perfil">
          <button className={styles.buttonHome}>Meu perfil</button>
          </a>
        </div>
      </div>
      <div className={styles.imageBackground}>
          <img className={styles.imageHome} src="https://i.imgur.com/ZseN9CD.png" alt="Error image home" />
      </div>
      </div>
    </Layout>
    </>
  );
}
