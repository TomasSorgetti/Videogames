import React from "react";
import { Link } from 'react-router-dom';
import styles from './Landing.module.css'


function Landing() {
  return (
    <div className={styles.landingCont}>
        <div className={styles.neon_title}>
          <h1 className={styles.neon_title}>
            <span className={styles.span1}>V</span>
            <span className={styles.span2}>i</span>
            <span className={styles.span3}>d</span>
            <span className={styles.span4}>e</span>
            <span className={styles.span5}>o</span>
            <span className={styles.span6}>G</span>
            <span className={styles.span7}>a</span>
            <span className={styles.span8}>m</span>
            <span className={styles.span9}>e</span>
            <span className={styles.span10}>s</span>
          </h1>
        </div> 
      <Link className={styles.landingButton} to="/home">Go Main</Link>
    </div>
  );
}

export default Landing;
