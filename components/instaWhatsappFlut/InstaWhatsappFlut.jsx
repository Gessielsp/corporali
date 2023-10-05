import Image from "next/image";

import styles from "./instaWhatsappFlut.module.scss";

const whatsappFlutuante = require('../../public/corporali/icons/whatsapp_flutuante.png');
const instagramFlutuante = require('../../public/corporali/icons/instagram_flutuante.png')

export default function InstaWhatsappFlut() {
  return (
    <div id={styles.boxInstagramWhatsapp}>
        <a id={styles.whatsappFlut} href="https://api.whatsapp.com/send?phone=55061981993099&text=Ol%C3%A1%2C%20vim%20do%20site%20de%20voc%C3%AAs%2C%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">
            <Image src={whatsappFlutuante} alt='Whatsapp' width={50} height={50}/>
        </a>
        <a id={styles.instagramFlut} href="https://www.instagram.com/drmarcelomoreiraa/" target="_blank">
            <Image src={instagramFlutuante} alt='Instagram' width={50} height={50}/>
        </a>
    </div>
  )
}
