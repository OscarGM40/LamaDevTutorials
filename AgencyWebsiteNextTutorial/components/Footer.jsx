


import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardLarge}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" >
            <span className={styles.linkText}>WORK WIHT US</span>
            </a>
            <Image
              src="/img/link.png"
              width={40}
              height={40}
            ></Image>
        </h1>
      </div>
      <div className={styles.cardSmall}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@LAMA.DEV <br />213 456 7890
        </div>
      </div>
      <div className={styles.cardSmall}>
        <div className={styles.cardItem}>
          FOLLOW US <br />__FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
       &copy;   2022 LAMA INTERACTIVE, <br />ALL RIGHTS RESERVED
        </div>
      </div>
    </div >
  )
}

export default Footer
