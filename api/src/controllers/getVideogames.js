const {Videogames, Genres} = require("../db");
const axios = require("axios")
require('dotenv').config();
const {API_KEY} = process.env;

// ******** GET all Videogames **********
const getAllGames = async ()=>{
  const bddGames = await Videogames.findAll(
    {
    include: {
      model: Genres,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
    }
  );

    const apiGames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)

    return [...bddGames, ...apiGames.data.results]
}

// ******** GET Videogame by Name **********
const getGameByName = async (name)=>{
    const bddGames = await Videogames.findAll({where: {name: name}})
    const apiGames = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
    return [...bddGames, ...apiGames.data.results]
}


// ******** GET Videogame by ID **********
const getVideogameById = async (idVideogame, search) => {
  const game =
    search === "api"
      ? (
          await axios.get(
            `https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`
          )
        ).data
      : await Videogames.findByPk(idVideogame, {
        include: 
          {
            model: Genres,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        });

  return game
}


// ******** Create Videogame **********
const createVideogame = async (
  name,
  description,
  background_image,
  released,
  rating,
  platform,
  genres
) => {

  const game = await Videogames.create({
    name,
    description,
    background_image,
    released,
    rating,
    platform,
    genres,
  });
  const gameGenres = await Genres.findAll({where: {name: genres}});
  game.addGenres(gameGenres);

  console.log(game)
  console.log(gameGenres)

};



module.exports={
    getAllGames,
    getGameByName,
    getVideogameById,
    createVideogame
}