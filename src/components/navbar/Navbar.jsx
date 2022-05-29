import { ArrowDropDown, Search, Notifications } from "@material-ui/icons";
import { React, useState } from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="NetflixLogo"
            className={styles.logoImg}
          />
          <span className={styles.navItem}> Home </span>
          <span className={styles.navItem}> Movie </span>
          <span className={styles.navItem}> Series </span>
          <span className={styles.navItem}> {"TV Shows"} </span>
        </div>
        <div className={styles.right}>
          <Search className={styles.icon} />
          <Notifications className={styles.icon} />
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
            className={styles.userImg}
          />
          <div className={styles.profile}>
            <ArrowDropDown className={styles.icon} />
            <div className={styles.options}>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
