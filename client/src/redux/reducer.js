import {GET_ALL_GAMES} from "./actions";
import {GET_GAMES_NAME} from "./actions";
import {GET_GAMES_ID} from "./actions";
import {GET_GENRES} from "./actions";

import {FILTER_GENRE} from "./actions";
import {API_OR_BDD} from "./actions";
import {SORT} from "./actions";


const initialState = {
  allVideoGames: [],
  allVideoGamesCopy: [],
  idVideoGame: {},
  genres: [],

  filtred: [],

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        allVideoGames: action.payload,
        filtred: action.payload,
        allVideoGamesCopy: action.payload,
      };
    case GET_GAMES_NAME:

      if (action.payload.length != 0) {
        return {
          ...state,
          allVideoGames: action.payload,
        };
      }
      else {
        return {
          ...state
        }
      }

    case GET_GAMES_ID:
      return {
        ...state,
        idVideoGame: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    //*********** Genre Filtre ***********/
    case FILTER_GENRE:
      if (action.payload === "allGenres") {
        return {
          ...state,
          allVideoGames: state.allVideoGamesCopy,
        };
      }
      else {
        return {
          ...state,
          allVideoGames: state.allVideoGamesCopy.filter(game => {

            return game.genres.some((genre) => genre.name === action.payload);
          })
        }
      }

      
    //********* API or BDD Filter ***********/
    case API_OR_BDD:
      if (action.payload === "allgames") {
        return {
          ...state,
          allVideoGames: state.allVideoGamesCopy,
        };
      }
      if (action.payload === "api") {
        const apiFilter = state.filtred.filter(
          (game) => typeof game.id === "number"
        );
        return {
          ...state,
          allVideoGames: apiFilter,
        };
      }
      if (action.payload === "bdd") {
        const apiFilter = state.filtred.filter(
          (game) => typeof game.id === "string"
        );
        return {
          ...state,
          allVideoGames: apiFilter,
        };
      }
      return {
        ...state,
      };

    //************ Sort Order **************/
    case SORT:
      if (action.payload === "rating") {
        let sortedGames = state.allVideoGames.sort(function (a, b) {
          if (a.rating > b.rating) return -1;
          if (a.rating < b.rating) return 1;
          return 0;
        });
        return {...state, allVideoGames: sortedGames};
      } else {
        let sortedGames =
          action.payload === "ascend"
            ? state.allVideoGames.sort(function (a, b) {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
              })
            : state.allVideoGames.sort(function (a, b) {
                if (a.rating > b.rating) return -1;
                if (a.rating < b.rating) return 1;
                return 0;
              });
        return {...state, allVideoGames: sortedGames};
      }
    default:
      return {...state};
  }
}

export default rootReducer;
