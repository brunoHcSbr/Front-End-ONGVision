import styles from './DivOngs.module.css'


interface Props {
    linkImage: string
    titleOng: string
    Address: string
}

export default function DivOngs({linkImage, titleOng, Address}: Props) {

  return (
    <>
      
        <div className={styles.bodyBackground}>
            <h3>{titleOng}</h3>
            <img src={linkImage} width="300px" alt="image Ong Error"/>
            <p>{Address}</p>
        </div>
    </>
  );
}
