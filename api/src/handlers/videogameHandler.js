const {getGameByName, getAllGames, getVideogameById, createVideogame} = require('../controllers/getVideogames')

//********** GET Handlers ***********/

//! Obtiene un array de objetos de videojuegos con su info
//! Debe de obtener los primeros 15 juegos con el nombre buscado, 
//! no importa si sean Mayúsculas o minusculas,
//! Debe buscar en la API y en la BDD
const getVideogameHandler = async (req,res)=>{
    const {name}= req.query
    try {
        if(name){
            const searchName = await getGameByName(name) 
            res.status(200).json(searchName)
        }else{
            const result = await getAllGames()
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//! Obtiene el Detail del juego pasado por id
//! Tiene que incluir los datos del género del juego asociado
//! Debe funcionar para los datos de API como de la BDD
const getDetailHandler = async (req,res)=>{
    const {idVideogame} = req.params
    const search = isNaN(idVideogame) ? "bdd" : "api"

    try {
        const response = await getVideogameById(idVideogame, search)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//********* POST Handlers ************/
//! recive todos los datos para crear un videojuego y relacionarlo con sus generos solicitados
//! Debe recivir la info por body
//! Debe crear un videojuego en la BDD y estar relacionado con sus generos indicados
const postVideogameHandler = async (req,res)=>{
    const {
      name,
      description,
      background_image,
      released,
      rating,
      platform,
      genres,
    } = req.body;
    
    console.log("1 acaaaaaaaaaaa");
    console.log(req.body);
    console.log(genres);
    try {
        const gameCreate = await createVideogame(
          name,
          description,
          background_image,
          released,
          rating,
          platform,
          genres
        );
        res.status(200).json(gameCreate)      
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getVideogameHandler,
    getDetailHandler,
    postVideogameHandler
}