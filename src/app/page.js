import Apps from "./components/apps";
import Bots from "./components/bots";
import ContactForm from "./components/contact";
import StickyHeader from "./components/header";
import Hero from "./components/hero";
import ModeluesDev from "./components/modulesdev";
import PartnersGrid from "./components/partners";
import Second from "./components/second";
import styles from "./custom.css";


export default function Home() {
  return (


    <div className={styles.page}>

      {/* <StickyHeader/> */}
      <Hero/>
      <Second/>
      <Apps/>
      <Bots/>
      <ModeluesDev/>
    <PartnersGrid/>
    <ContactForm/>
    </div>
  );
}
