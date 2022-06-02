import React,{ useState} from "react";
import style from "./Paginado.module.css"

function Paginado({ countryPorPage, country, paginado, cantidadprimero }) {

  const [status, setStatus] = useState(1);

  const maximo = country / countryPorPage
  const pageNumber = [];

 

  const nexpage =() =>{
    paginado(status+1)
    setStatus(status+1)
 
}
const previuspage = ()=>{
  paginado(status-1)
  setStatus(status-1)

}
const handleclick = (number)=>{

  setStatus(number)

  paginado(number)
}

  for (let i = 1; i <= Math.ceil(country/countryPorPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav className={style.containerpaginado}>
      <ul id="ul_pagina" className={style.paginado}>
        <li>
        <button disabled={status===1||status<1} className={style.btn1}  onClick={previuspage}>Previus</button>
        </li>
        {pageNumber?.map((number) => (
          <li key={number} id="pagina">
              <button className={status === number ? style.active : style.btn} onClick={() => handleclick(number)}>{number} </button>
            
          </li>
        ))}
        <li>
          <button disabled={status===maximo||status>maximo} className={style.btn1} onClick={nexpage}>Next</button>
        </li>
      </ul>
    </nav>
  );
}

export default Paginado;
