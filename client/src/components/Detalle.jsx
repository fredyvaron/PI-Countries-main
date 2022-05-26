import React from "react";
import { useEffect } from 'react'
import { useSelector , useDispatch } from "react-redux";
import { get_show_detail} from "../redux/actions";
function Detalle(props) {
    const dispatch = useDispatch()
    const country_detail = useSelector(state=>state.country_detail);
    const id= props.match.params.id
   
    useEffect(()=>{
dispatch(get_show_detail(id))
    },[dispatch])
  return (
    <div>
             <img src={country_detail.flagimage} alt="" />
              <h3>{country_detail.name}</h3>
              <h3>Continente: {country_detail.continent}</h3>
              <h4>Poblacion: {country_detail.population}</h4>
              <h4>Capital: {country_detail.capital}</h4>
              <h4>SubRegion: {country_detail.subregion}</h4>
              <h4>Area: {country_detail.area}</h4>

              Actividades
              {console.log(country_detail)}
              {country_detail.activities&&country_detail.activities.map((e, id)=>{
                  return(
                      <div key={e.id+1}>
                          <p>{e.name}</p>

                      </div>
                  )
              })}
              {console.log(country_detail)}
         
  </div>
  )
  }

export default Detalle