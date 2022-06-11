import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delete_activity, get_show_detail, reset_detail } from "../redux/actions";
import styledetails from "./Detalle.module.css";
import NotFound from "./NotFound";
function Detalle(props) {
  const dispatch = useDispatch();

  
  const country_detail = useSelector((state) => state.country_detail);
  const id = props.match.params.id;
  const len = country_detail.length

  useEffect(() => {
    dispatch(get_show_detail(id));

   
  }, [dispatch]);

  const handleDelete = (e)=>{
    e.preventDefault();
    dispatch(delete_activity({id_activity: e.target.value, id_country: id }))
  }
  if(len===0){
    return(
<NotFound/>
    )

  }else{
  return (
    <div className={styledetails.container}>
      <div className={styledetails.countrys}>
      <Link to="/countries"><button>Back</button></Link>
        <img src={country_detail.flagimage} alt="" />
        <h3>{country_detail.name}</h3>
        <h3>Continente: {country_detail.continent}</h3>
        <h4>Poblacion: {country_detail.population}</h4>
        <h4>Capital: {country_detail.capital}</h4>
        <h4>SubRegion: {country_detail.subregion}</h4>
        <h4>Area: {country_detail.area}</h4>
      </div>

      <div className={styledetails.activitys}>
        <h2 className={styledetails.titulo_activity}>Activity</h2>
      
        <div className={styledetails.card_activity}>
          {country_detail.activities &&
            country_detail.activities.map((e, id) => {
              return (
                <div key={e.id} className={styledetails.card_body}>
                  <h2>{e.name}</h2>
                  <p>Difficulty: {e.difficulty}</p>
                  <p>Duration: {e.duration}</p>
                  <p>Season: {e.season}</p>
                  <button name="id_activity" value={e.id} onClick={e => handleDelete(e)}>X</button>
                </div>
              );
            })}
        </div>
      </div>
      {console.log(country_detail)}
    </div>
 
  );

}
}

export default Detalle;
