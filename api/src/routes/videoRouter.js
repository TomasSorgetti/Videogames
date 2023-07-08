const { Router } = require('express');
const videoRouter = Router();
const {getVideogameHandler,getDetailHandler, postVideogameHandler} = require ('../handlers/videogameHandler')
//*********** GET Videogame *************/
videoRouter.get("/", getVideogameHandler)
videoRouter.get("/:idVideogame", getDetailHandler)

//******** POST Videogame ***********/
videoRouter.post("/", postVideogameHandler)


module.exports = videoRouter