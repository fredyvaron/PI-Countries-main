import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_all_countries} from "../redux/actions";
import styleCountry from "./Country.module.css"
import Search from "./Search/Search"
import Paginado from "./Paginado";
function Country() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
 const [currentPage, setCurrentPage] = useState(1);
 const [countryPage, setCountryPage] = useState(10);


 const indexOfLastCountry = currentPage * countryPage
 const indexOfFirstCountry = indexOfLastCountry - countryPage
 const currentCountry = country.slice(indexOfFirstCountry, indexOfLastCountry)

 const paginate = pageNumber =>{
  
   setCurrentPage(pageNumber)
   console.log(currentPage)
 }

  useEffect(() => {
    dispatch(get_all_countries())
  }, [dispatch])



  return (
    <div>
      <Search pagina={paginate}/>
      <h1>Paises</h1>
      <Paginado 
      countryPorPage={countryPage}
      country={country.length}
      paginado={paginate}
      pagina={currentPage}
      />
      <div className={styleCountry.card_container}>

      {currentCountry.length && currentCountry.map((e) => {
          return (
           
              <div key={e.id}>
              <img src={e.flagimage} alt="" className={styleCountry.imgflag}/>
            
              <Link to={`/countries/${e.id}`}>
                <h3>{e.name}</h3>
                {e.continent}
              </Link>  
            </div>
           
          );
         
        })}
    </div>
    </div>
 
    
   
  );
}
export default Country;
