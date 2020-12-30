import "../styles/globals.css";
import styles from "../styles/App.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
