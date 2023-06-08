import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <nav className={styles.nav}>

      </nav>
      <section className={styles.section}>
      <div className={styles.content}>
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="Mario Kojima"
            width={600}
            height={160}
            priority
          />
          <div className={styles.heroBox}>
            Profissional de TI,{" "}
            <span className={styles.highlight}>multifuncional</span>, apaixonado
            por tecnologia. Ajudo empresas a desenvolver as melhores soluções
            para seu negócio.
          </div>
        </div>
      </section>
      <section className={styles.section}>
        teste 1
      </section>      
      <section className={styles.section}>
        teste 2
      </section>   
    </div>
  );
}
