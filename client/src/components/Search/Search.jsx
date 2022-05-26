import React from 'react'
import { useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { get_country_by_name} from "../../redux/actions"


function Search(pagina) {
  const dispatch = useDispatch()
    const [country, setCountry] = useState('');
    const countries = useSelector(state => state.allcountry)
    const handleChange = (e)=>{
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
      
      setCountry('')
     
    }
    
    }
    

  return (
    <div>
<form onSubmit={handleSubmit}>
<input type="search" value={country} onChange={handleChange} />
<input type="submit"/>
</form>
      

    </div>
  )
}

export default Search