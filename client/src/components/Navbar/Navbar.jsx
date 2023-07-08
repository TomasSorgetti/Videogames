import React from "react";
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';


function Navbar() {


  return (
    <div className={styles.navbar}>
      <Link className={styles.logo} to="/home">Videogames</Link>
      <div className={styles.searchCont}>
        <ul className={styles.navLinks}>
        <Link className={styles.navLink} to="/home">Home</Link>
        <Link className={styles.navLink} to="/creategame">Create Videogame</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
