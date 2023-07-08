const {Genres} = require("../db");
const axios = require("axios");
require("dotenv").config();
const {API_KEY} = process.env;

const getGenres = async () => {
  const bddAdd = [];
  const apiGenres = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  apiGenres.data.results.forEach((gen) => bddAdd.push({name: gen.name}));
  await Genres.bulkCreate(bddAdd);
  return bddAdd;
};
const getGenresToFront = async () => {
  const genresFront = await Genres.findAll();
  return genresFront
};
module.exports = {getGenres, getGenresToFront};
