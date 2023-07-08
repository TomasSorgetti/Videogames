import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"

import { getGamesByName } from "../../redux/actions";


import styles from "./SearchBar.module.css"

function SearchBar({restartPage}) {
    const dispatch = useDispatch()


    //***********  SearchBar  ************/
    const [name, setName]=useState("")
    
    // const [restart,setRestart]=useState(false)
  
    function handleInputChange(e){
      e.preventDefault()
      setName(e.target.value)
      // if(e.target.value){
      //   if(restart===false){
      //     setRestart(true)
      //   }else setRestart(false)
      // }
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getGamesByName(name))
        setName("")
        //restartPage te resetea el paginado a la pagina 1 cuando buscas un juego por nombre
        // if(restart) restartPage()
    }

    return(
        <div className={styles.searchBar}>
            <input className={styles.input} onChange={(e)=> handleInputChange(e)} type="text" placeholder="Videogame Name" value={name}/>
            <button className={styles.searchButton} type="submit" onClick={(e)=> handleSubmit(e)}>Search</button>
        </div>
    )    
}
export default SearchBar