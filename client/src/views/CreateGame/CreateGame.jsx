import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";

import styles from "./CreateGame.module.css"


function CreateGame() {
  return (
    <div className={styles.createCont}>
      <Navbar/>
      <h1>Create your own Videogame</h1>
      <Form/>
    </div>
  );
}

export default CreateGame;
