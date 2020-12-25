import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div
        style={{
          fontSize: 50,
          color: "#fafafa",
          letterSpacing: "20px",
          fontWeight: "bold"
        }}
      >
        JOYFUL
      </div>
    </div>
  );
}
