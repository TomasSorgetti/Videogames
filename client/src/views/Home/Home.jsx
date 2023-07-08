import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination";
import Panel from "../../components/Panel/Panel"
import SearchBar from "../../components/SearchBar/SearchBar"
import OrderBy from "../../components/OrderBy/OrderBy";
import Footer from "../../components/Footer/Footer";


import styles from "./Home.module.css"

import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import { useState } from "react";
import {getAllGames} from "../../redux/actions"


function Home() {
  const dispatch = useDispatch()
  const allVideoGames = useSelector((state)=>state.allVideoGames)


  useEffect(()=>{
    dispatch(getAllGames())
  },[dispatch])  

  //**********Pagination ************/
  const [page, setPage] = useState(1)

  // cardsPage has to be in 15
  const [cardsPage] = useState(15)
  
  
  const [order, setOrder] = useState("");


  const lastCard = page * cardsPage;
  

  
  const firstCard = lastCard - cardsPage;
 
  let cards = allVideoGames.slice(firstCard, lastCard)
  
  const paginate = (pag)=>{
    setPage(pag)
  }

  const previousChange = ()=>{
    if(page>1)setPage(page-1)        
  }
  const nextChange = ()=>{
    if(allVideoGames.length>lastCard)setPage(page+1)
  }

//************* Restart pages when searching game ***************/
  const restartPage = ()=>{
    setPage(1)
  }
  const orderBy = (val) => {
    setOrder(val)
  }

  return (
    <div className={styles.homeCont}>
      <Navbar />
      <div className={styles.Main}>
        <Panel allVideoGames={allVideoGames} />
        <SearchBar restartPage={restartPage} />
        <OrderBy orderBy={orderBy} restartPage={restartPage} />
        <Pagination
          cardsPage={cardsPage}
          paginate={paginate}
          page={page}
          allCards={allVideoGames.length}
          nextChange={nextChange}
          previousChange={previousChange}
        />
        <Cards cards={cards} />
        <Pagination
          cardsPage={cardsPage}
          paginate={paginate}
          page={page}
          allCards={allVideoGames.length}
          nextChange={nextChange}
          previousChange={previousChange}
        />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

