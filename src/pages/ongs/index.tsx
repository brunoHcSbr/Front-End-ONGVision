import { Container } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import styles from './Ongs.module.css'
import DivOngs from "../../components/DivOngs";


export default function Ongs() {

  return (
    <>
    <Layout>
      <div className={styles.Background}>
    
        <div className={styles.divOngsBackground}>
          <a target="_blank" href="https://www.google.com/maps/place/ONG+SISNI/data=!4m7!3m6!1s0x94cf4cdc71b06039:0x8c299bac3310370b!8m2!3d-23.1209728!4d-47.2463886!16s%2Fg%2F11cn69th31!19sChIJOWCwcdxMz5QRCzcQM6ybKYw?authuser=0&hl=pt-BR&rclk=1">
        <DivOngs titleOng="ONG SISNI" linkImage="https://observatorio3setor.org.br/wp-content/uploads/2020/09/316844-P8VCX3-12.jpg" Address="1401, R. Antônio Cantelli, 1279 - Jardim Morada do Sol, Indaiatuba - SP, 13348-383"></DivOngs>
        </a>        
        </div>
        <div className={styles.divOngsBackground}>
        <a target="_blank" href="https://maps.app.goo.gl/GUZUTGe9cJJXcH8Z7">
        <DivOngs titleOng="Organização Assistencial Bolha de Sabão" linkImage="https://vilainternacional.org.br/wp-content/uploads/2022/02/ONGs.png" Address="R. José da Silva Maciel, 217 - Jardim Morada do Sol, Indaiatuba - SP, 13346-410"></DivOngs>
        </a>
        </div>
        <div className={styles.divOngsBackground}>
        <DivOngs titleOng="Instituto Harpia Harpyia" linkImage="https://istoe.com.br/wp-content/uploads/2020/04/ajuda-ongs.jpg?x55394" Address="R. Alemanha, 288 - Chácara do Trevo, Indaiatuba - SP, 13340-501"></DivOngs>
        </div>
        <div className={styles.divOngsBackground}>
        <DivOngs titleOng="Instituto GABRIEL" linkImage="https://impactosocial.esolidar.com/wp-content/uploads/2020/05/ONG-confiavel-como-transmitir-a-sua-mensagem.png" Address="R. dos Andradas, 969 - Cidade Nova I, Indaiatuba - SP, 13334-020"></DivOngs>
        </div>
        <div className={styles.divOngsBackground}>
        <DivOngs titleOng="Associação Beneficente ABID" linkImage="https://classic.exame.com/wp-content/uploads/2021/07/GettyImages-1305990827.jpg?quality=70&strip=info&w=699" Address="Av. Presidente Kennedy, 1386 - Conj 39 Sala 1 - Cidade Nova I, Indaiatuba - SP, 13334-170"></DivOngs>
        </div>
        <div className={styles.divOngsBackground}>
        <DivOngs titleOng="Ressignificar" linkImage="https://tempodepolitica.com.br/wp-content/uploads/2020/05/sh_ong_111901871.jpg" Address="1401, R. Antônio Cantelli, 1279 - Jardim Morada do Sol, Indaiatuba - SP, 13348-383"></DivOngs>
        </div>
        <div className={styles.divOngsBackground}>
        <DivOngs titleOng="ASSOCIAÇÃO HUMANITÁRIA CASA ESPERANÇA" linkImage="https://ajudou.org/wp-content/uploads/2021/10/ONGS-E-ESG.jpg" Address="R. Genaro França, 464 - Jardim Morada do Sol, Indaiatuba - SP, 13346-480"></DivOngs>
        </div>
        <div className={styles.divOngsBackground}>
        <DivOngs titleOng="Manaem Obras Sociais e Educacionais" linkImage="https://istoe.com.br/wp-content/uploads/2020/04/ajuda-ongs.jpg?x55394" Address="R. Irineu Pistoni, 122 - Jardim Tancredo Neves, Indaiatuba - SP, 13346-170"></DivOngs>
        </div>
        <div className={styles.divOngsBackground}>
        <DivOngs titleOng="Associação Filantrópica Assistencial São Francisco de Assis" linkImage="https://vilainternacional.org.br/wp-content/uploads/2022/02/ONGs.png" Address="R. Lídia Stein Batisti, 133 - Jardim California, Indaiatuba - SP, 13344-360"></DivOngs>
        </div>
        <div className={styles.divOngsBackground}>
        <DivOngs titleOng="Focinho Amigo Indaiatuba" linkImage="https://observatorio3setor.org.br/wp-content/uploads/2020/09/316844-P8VCX3-12.jpg" Address="R. Primo José Mattioni, 750 - Vila Brizzola, Indaiatuba - SP, 13330-290"></DivOngs>
        </div>
        

        </div>
    </Layout>
    </>
  );
}
