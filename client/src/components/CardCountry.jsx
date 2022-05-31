import React from 'react'
import { Link } from 'react-router-dom'
import stylecountry from './CardCountry.module.css'


function CardCountry(props) {
  return (
    
    <div className={stylecountry.card_body}>
                  <div key={props.id}>
              <img src={props.flagimage} alt="" className={stylecountry.imgflag}/>
            
              <Link to={`/countries/${props.id}`}>
                <h3>{props.name}</h3>
                {props.continent}
              </Link>  
            </div>
    </div>
  )
}

export default CardCountry