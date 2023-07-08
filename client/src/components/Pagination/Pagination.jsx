import React from "react";







import styles from "./Pagination.module.css"

function Pagination ({cardsPage, paginate, page, allCards, nextChange, previousChange}){

//************ Pagination **************/
    // si el total de cartas / la cant de cartas por pagina es menor la pagina donde estoy, setear pagination en 1
    const pages = Math.ceil(allCards / cardsPage)
    if (pages<page) paginate(1)
    
    let numberPages = []
    for (let i = 0; i <pages; i++) {
        numberPages.push(i+1)
    }

    return(
        <div className={styles.paginationCont}>
                <button className={styles.pageChange} onClick={()=>{previousChange()}}>Previous</button>
                <div className={styles.pageCont}>
                    {numberPages?.map((pag, i)=>
                    <button className={styles.pageNum} key={i} onClick={()=>paginate(pag)}>{pag}</button>       
                    )}
                </div>
                <button className={styles.pageChange} onClick={()=>{nextChange()}}>Next</button>
        </div>
    )
}


export default Pagination