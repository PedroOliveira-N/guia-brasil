import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";
import logo from "../../assets/logo.png";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.titleBox}>
        <img src={logo} alt="Logo" />
        <h1 className={styles.titulo}>
          Guia<br />Brasil
        </h1>
      </div>

      <div className={styles.icones}>
        <FaHome className={styles.icone} />
        <IoAirplane className={styles.icone} />
        <IoMdPerson className={styles.icone} />
      </div>
    </div>
  );
}