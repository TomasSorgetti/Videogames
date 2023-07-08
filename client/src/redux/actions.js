import axios from "axios";

// ******** Action Types ********//
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_GAMES_NAME = "GET_GAMES_NAME";
export const GET_GAMES_ID = "GET_GAMES_ID";
export const GET_GENRES = "GET_GENRES";

export const FILTER_GENRE = "FILTER_GENRE";
export const API_OR_BDD = "API_OR_BDD";
export const SORT = "SORT"





//********* Actions *********//

export function getAllGames() {
  return (dispatch) => {
    axios.get("http://localhost:3001/videogames").then((response) => {
      dispatch({
        type: GET_ALL_GAMES,
        payload: response.data,
      });
    });
  };
}

export function getGamesByName(name) {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/videogames?name=${name}`)
      .then((response) => {
          dispatch({
              type: GET_GAMES_NAME,
              payload: response.data,
            })
      });
  };
}
export function getGamesById(id) {
  return (dispatch) => {
    axios.get(`http://localhost:3001/videogames/${id}`).then((response) => {
      dispatch({
        type: GET_GAMES_ID,
        payload: response.data,
      });
    });
  };
}

export function getGenres() {
    return (dispatch) => {
      axios.get("http://localhost:3001/genres/getGenres").then((response) => {
        dispatch({
          type: GET_GENRES,
          payload: response.data,
        });
      });
  };
}

export function filterGenre(payload) {

  return {
    type: FILTER_GENRE,
    payload: payload,
  };
}

export function ApiOrBdd(payload) {

  return {
    type: API_OR_BDD,
    payload: payload,
  };
}

export function sorted(payload) {

  return {
    type: SORT,
    payload:payload
  };
}
