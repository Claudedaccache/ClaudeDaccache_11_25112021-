import React from "react";
import Logo from "../Logo/Logo";
import styles from "../Footer/Footer.module.css"

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.Footer}>
        <Logo color="white" />
        <h3 className={styles.Rights}>© 2021 Kasa. All rights reserved</h3>{" "}
      </div>
    );
  }
}

export default Footer;
