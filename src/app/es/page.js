import Apps from "../components/apps";
import Bots from "../components/bots";
import ContactForm from "../components/contact";
import StickyHeader from "../components/header";
import Hero from "../components/hero";
import Home from "../components/Home";
import ModeluesDev from "../components/modulesdev";
import PartnersGrid from "../components/partners";
import Websites from "../components/websites";
import styles from "../custom.css";
import engtran from '../locales/en.json'; // Импортируем JSON как объект

export default function Page() {
  return (
    <div className={styles.page}>
      <Home/>
    </div>
  );
}
