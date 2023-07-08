const { Router } = require('express');
const {getGenresHandler} = require ("../handlers/genresHandler")
const {getGenresFront} = require("../handlers/genresHandler");
const genresRouter = Router();



genresRouter.get("/", getGenresHandler)
genresRouter.get("/getGenres", getGenresFront)


module.exports = genresRouter