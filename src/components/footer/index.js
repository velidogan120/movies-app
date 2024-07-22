import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://velidogan120.github.io/PersonalSite-SCSS/" target="_blank">
        VELİ DOĞAN
      </Link>
    </footer>
  );
}

export default Footer;