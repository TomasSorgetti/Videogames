import React from "react";
import Card from "../Card/Card";

import styles from "./Cards.module.css"


function Cards({cards}) {

  return (
    <div className={styles.cardsCont}>
      {cards?.map(game => {
        return (
          <Card game={game} key={game.id} />
        )
      })}
    </div>
  );
}

export default Cards;
