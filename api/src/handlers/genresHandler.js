const {getGenres} = require ('../controllers/getGenres')
const {getGenresToFront} = require ('../controllers/getGenres')
//! Obtiene un array con todos los generos existentes de la API
//! cuando la BDD este vacía debe guardar todos los generos de la API 

const getGenresHandler = async(req,res)=>{
    try {
        const result = await getGenres()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getGenresFront = async (req, res) => {
    try {
        const result = await getGenresToFront()    
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
module.exports = {getGenresHandler, getGenresFront};