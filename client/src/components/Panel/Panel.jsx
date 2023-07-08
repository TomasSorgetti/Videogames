import React from "react";
import styles from "./Panel.module.css"

import { useState } from "react";

function Panel({allVideoGames}){
    const videogames = allVideoGames.sort(function (a, b) {
      if (a.rating > b.rating) return -1;
      if (a.rating < b.rating) return 1;
      return 0;
    });
    const panelGames = []
    videogames?.map(game=>{
        panelGames.push(game)
    })
    panelGames.length = 6
    

    //******* Active Toggle *******/
    const [index, setIndex] = useState(0)

    const handleNextClick = (e, i) => {
        e.preventDefault()
        setIndex(i)
    }

    return (
      <div className={`${styles.carrouselCont} ${styles.carrouselBorder}`}>
        <div className={styles.panelCont}>
          {panelGames.map((game, i) => (
            <div className={`${styles.panel} ${i===index? styles.active : ""}`} key={game.id}>
              <div
                className={styles.imgCont}
                onClick={e => handleNextClick(e, i)}
              >
                <img
                  className={styles.panelImg}
                  src={`${game.background_image}`}
                  alt=""
                />
              </div>
              <h6 className={styles.panelName}>{game.name}</h6>
            </div>
          ))}
        </div>
      </div>
    );
}
export default Panel
