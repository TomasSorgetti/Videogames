import React from "react";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";


import {getGenres} from "../../redux/actions";

import {filterGenre, ApiOrBdd, sorted} from "../../redux/actions";

import styles from "./OrderBy.module.css";

function OrderBy({orderBy, restartPage}) {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  function handleGenre(e) {
    e.preventDefault();
    dispatch(filterGenre(e.target.value));
    orderBy(e.target.value);
    restartPage()
  }

  function handleApiOrBdd(e) {
    dispatch(ApiOrBdd(e.target.value));
    orderBy(e.target.value);
    restartPage();
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(sorted(e.target.value));
    orderBy(e.target.value);
    restartPage();
  }

  return (
    <div className={styles.orderBy}>
      <select onChange={(e) => handleGenre(e)}>
        <option value="allGenres">all genres</option>
        {allGenres?.sort().map((gen) => (
          <option key={gen.id} name={gen.name} value={gen.name}>
            {gen.name}
          </option>
        ))}
      </select>
      
      <select onChange={(e) => handleApiOrBdd(e)}>
        <option value="allgames">All Videogames</option>
        <option value="api">API Videogames</option>
        <option value="bdd">BDD Videogames</option>
      </select>

      <select onChange={(e) => handleSort(e)} onBlur={(e) => handleSort(e)}>
        <option value="">Select order</option>
        <option value="rating">Rating</option>
        <option value="ascend">A - Z</option>
        <option value="descend">Z - A</option>
      </select>
    </div>
  );
}
export default OrderBy;
