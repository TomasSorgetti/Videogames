import React from "react";
import styles from "./Card.module.css"
import { Link } from "react-router-dom";

function Card({game}) {
  const {background_image, name, rating, genres, id, Genres, parent_platforms} =
    game;
  // console.log(parent_platforms);
  return (
    <Link
      to={`/home/${id}`}
      className={`${styles.cardCont} ${styles.cardContBe}`}
    >
      <div className={`${styles.cardImgCont} ${styles.cardImgCont2}`}>
        <img
          className={styles.cardImg}
          src={`${background_image}`}
          alt="game"
        />
      </div>
      <div className={styles.cardText}>
        <h2 className={styles.cardTitle}>{name}</h2>
        <div className={styles.genresCont}>
          {genres && !Genres
            ? genres?.map((gen) => (
                <p className={styles.genres} key={gen.id}>
                  {gen.name}
                </p>
              ))
            : Genres?.map((gen) => (
                <p className={styles.genres} key={gen.name}>
                  {gen.name}
                </p>
              ))}
        </div>
        {/* <div>
          {parent_platforms?.map((plat) => (
            <p key={plat.platform.id}>{plat.platform.name}</p>
          ))}
        </div> */}
        <p className={styles.cardrating}>{rating}</p>
      </div>
    </Link>
  );
}

export default Card;
