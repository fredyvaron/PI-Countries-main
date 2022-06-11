import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter_by_activity, filter_by_continent, get_activity, get_all_countries, get_country_filter_menor, order_by_name, order_by_population} from "../redux/actions";
import styleCountry from "./Country.module.css"
import Search from "./Search/Search"
import Paginado from "./Paginado";
import CardCountry from "./CardCountry";
function Country() {

  const dispatch = useDispatch();
  
  const [order, setOrder] = useState()
  const country = useSelector((state) => state.country);
  const activitys = useSelector((state)=> state.activity)
 const [currentPage, setCurrentPage] = useState(1);
 const [countryPage, setCountryPage] = useState(10);


 const indexOfLastCountry = currentPage ===1 ? 9:currentPage * countryPage -1
 console.log(indexOfLastCountry)
 const indexOfFirstCountry = currentPage===1?0:indexOfLastCountry - countryPage
 console.log(indexOfFirstCountry)
 const currentCountry = country.slice(indexOfFirstCountry, indexOfLastCountry)

 const paginate = pageNumber =>{
   setCurrentPage(pageNumber)
 }

  useEffect(() => {
    dispatch(get_all_countries())
    dispatch(get_activity())
  }, [dispatch])

  function handlecontinent (e){
    e.preventDefault();
    dispatch(filter_by_continent(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)

  }
  function handleActivity (e){
    e.preventDefault();
    dispatch(filter_by_activity(e.target.value))
    setCurrentPage(1)
  
  }
  function handlesorname(e){
    e.preventDefault();
    dispatch(order_by_name(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)
  }
  function handlesortpopulation(e){
    e.preventDefault();
    dispatch(order_by_population(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)
  }
  function handleButton (e){
    e.preventDefault();
    dispatch(get_country_filter_menor())
    setCurrentPage(1);
    setOrder()
  }

  return (
    <div>
      <Search  setCurrentPage={setCurrentPage}/>
      
      <div className={styleCountry.containerselect}>
      {/* <button onClick={handleButton}> Menor</button> */}
        <select onChange={e=>handlesortpopulation(e)}>
          <option hidden >Populatation</option>
          <option value="Asc">Ascendente</option>
          <option value="Desc">Descendente</option>
        </select>
        <select onChange={e=>handlesorname(e)} >
          <option hidden value="Order">Order Name</option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>
        <select  onChange={e=>handlecontinent(e)}>
        <option hidden value="Continent" >Content</option>
        <option value="All">All</option>
        <option value="Asia">Asia</option>
        <option value="Antarctic">Antarctica</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Americas">Americas</option>
        </select>
        <select onChange={e=>handleActivity(e)}>
          <option value="All">All</option>
          {activitys.length && activitys.map((a)=>{
            return (
              <option value={a.name} key={a.id}>
                {a.name}
              </option>
            )
          })}
        </select>


      </div>
      <div >
      <Paginado 
      countryPorPage={countryPage}
      country={country.length}
      paginado={paginate}
      pagina={currentPage}
      />
      </div>
      <div className={styleCountry.card_container}>

      {currentCountry.length && currentCountry.map((e) => 
          (
           <CardCountry
           key={e.id}
           id={e.id}
           flagimage={e.flagimage}
           name={e.name}
           continent={e.continent}


           />

           
          )
         
        )}
    </div>

    </div>
 
    
   
  );
}
export default Country;


