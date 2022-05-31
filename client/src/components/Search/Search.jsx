import React from 'react'
import { useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { get_country_by_name} from "../../redux/actions"
import stylesearch from "./Search.module.css"


const Search = ({setCurrentPage})=> {
  const dispatch = useDispatch()
    const [country, setCountry] = useState('');
    const countries = useSelector(state => state.allcountry)
    const handleChange = (e)=>{
      e.preventDefault();
        setCountry(e.target.value);

    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      if(!countries.find(c=> c.name.toLowerCase().includes(country.toLowerCase()))){
        console.log(countries)
        alert("pais Not Fount")
        setCountry('')
      }
      else {
      dispatch(get_country_by_name(country));
      setCurrentPage(1)
      setCountry('')
     
    }
    
    }
    

  return (
    <div className={stylesearch.container}>
<form onSubmit={handleSubmit}>
<input className={stylesearch.input} type="search" value={country} placeholder="Search" onChange={handleChange} />
<button type="submit" className={stylesearch.button}>🔍 Search</button>

</form>
      

    </div>
  )
}

export default Search