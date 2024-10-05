import Apps from "./apps";
import Bots from "./bots";
import ContactForm from "./contact";
import StickyHeader from "./header";
import Hero from "./hero";
import ModeluesDev from "./modulesdev";
import PartnersGrid from "./partners";
import Websites from "./websites";
import styles from "../custom.css";

export default function Home({lang}) {

    


  return (
 
    <div className={styles.page}>
        
      <StickyHeader lang={lang} />
      <Hero lang={lang} />
      <Websites  lang={lang}/> 
      <Apps lang={lang} />
      <Bots lang={lang} />
      <ModeluesDev lang={lang} />
      <PartnersGrid lang={lang} />
      <ContactForm lang={lang} />
    </div>
  );
}
