import Layout from "../../components/Layout";
import ButtonFatec from "../../components/ButtonBase";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <Layout>
      <div className={styles.FormattingAndButton}>
        <div className={styles.divFormatting}>
          <h3>Sobre o site</h3>
          <h1>ONGVision</h1>
          <p>
            Bem-vindos à ONGVision um site solidário, uma organização dedicada a
            criar um impacto positivo nas vidas das pessoas e nas comunidades
            que atendemos. Fundada em 2023, nosso site tem trabalhado
            incansavelmente para promover mudanças significativas em
            áreas-chave, como educação, saúde, sustentabilidade e
            desenvolvimento social.
          </p>
        </div>
        <div className={styles.ButtonContact}>
          <a href="mailto:ongvision@gmail.com?subject=Usu%C3%A1rio%20do%20site%20ONGVision&body=Ol%C3%A1%2C%20me%20chamo...">
            <ButtonFatec label={"Entre em contato"}></ButtonFatec>
          </a>
        </div>
      </div>
    </Layout>
  );
}
