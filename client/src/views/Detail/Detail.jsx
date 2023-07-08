import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGamesById } from "../../redux/actions";

import styles from "./Detail.module.css"

function Detail() {
  const params=useParams()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getGamesById(params.id))
  },[])


  let idGame = useSelector(state => state.idVideoGame)

  // viene Genres en vez de genres en las bdd
  console.log(idGame)


  
  // viene el genre undefined!!!!!

  // console.log("name",idGame)
  // console.log("genre", idGame.genres)
  // console.log("genreBdd", idGame.Genres.name)

  let genres
  let genre
  if (idGame.genres && !idGame.Genres) {
    genres = idGame.genres?.map(gen => gen.name)
    genre = genres?.join(", ")
  }
  let genresBdd
  let genreBdd
  if (!idGame.genres && idGame.Genres) {
    genresBdd = idGame.Genres.map(gen => gen.name)
    genreBdd = genresBdd?.join(", ")
  }
    // console.log(genre);
    let allPlatforms;
    let gamePlatfomr;

    if (idGame.platforms && !idGame.platform) {
      allPlatforms = idGame.platform?.map(plat => plat.platform)
      gamePlatfomr = (allPlatforms?.map(pl => pl.name))?.join(", ")
    }

    return (
      <div className={styles.detailCont}>
        <Navbar />
        <div className={styles.contData}>
          <div>
            <div className={styles.imgCont}>
              <img
                className={styles.gameImg}
                src={idGame.background_image}
                alt="image_background"
              />
            </div>
            <div className={styles.text}>
              <div className={styles.gameData}>
                <h1>{idGame.name}</h1>
                <p>ID: {idGame.id}</p>
                <p>Date: {idGame.released}</p>
                <p>Rating: {idGame.rating}</p>

                {idGame.platforms && !idGame.platform ? (
                  <p>Platforms: {gamePlatfomr}</p>
                ) : (
                  <p>Platforms: {idGame.platform}</p>
                )}

                {idGame.genres && !idGame.Genres ? (
                  <p>Genres: {genre}</p>
                ) : (
                  <p>Genres: {genreBdd}</p>
                )}
              </div>
              <div>
                {idGame.description_raw ? (
                  <p className={styles.description}>{idGame.description_raw}</p>
                ) : (
                  <p className={styles.description}>{idGame.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Detail;
