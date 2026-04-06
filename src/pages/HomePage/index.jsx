import styles from "./styles.module.css";
import logo from "../../assets/logo.png";

export default function Homepage() {
  return (
    <div className={styles.HomePage}>
      <p>
        O <strong>Guia Brasil</strong> é uma plataforma digital dedicada a revelar a <strong>diversidade</strong> e a <strong>riqueza</strong> dos destinos turísticos brasileiros. <br />
        Mais do que um simples catálogo de locais, o projeto tem como proposta <strong>conectar pessoas a experiências autênticas</strong>, <br />
        reunindo desde <strong>pontos turísticos famosos</strong> até <strong>lugares pouco explorados</strong> que carregam <strong>histórias únicas</strong>.
      </p>

      <div className={styles.titleBox}>
        <img src={logo} alt="Logo" />
        <h1 className={styles.titulo}>
          Guia<br />Brasil
        </h1>
      </div>
    </div>
  );
}
