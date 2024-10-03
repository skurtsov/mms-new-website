import Apps from "./components/apps";
import Bots from "./components/bots";
import ContactForm from "./components/contact";
import StickyHeader from "./components/header";
import Hero from "./components/hero";
import ModeluesDev from "./components/modulesdev";
import PartnersGrid from "./components/partners";
import Websites from "./components/websites";
import styles from "./custom.css";


export default function Home() {
  return (


    <div className={styles.page}>

      <StickyHeader/> 
      <Hero/>
      <Websites/>
      <Apps/>
      <Bots/>
      <ModeluesDev/>
    <PartnersGrid/>
    <ContactForm/>
    </div>
  );
}
