import React,{ useState} from "react";
import style from "./Paginado.module.css"

function Paginado({ countryPorPage, country, paginado, cantidadprimero }) {
  console.table(paginado)
  console.table(countryPorPage)
  console.table(country)
  const [status, setStatus] = useState(1);
  const maximo = country / countryPorPage
  const pageNumber = [];



  const nexpage =() =>{
    paginado(status+1)
    setStatus(status+1)
    console.log("Estado para siguiente"+status+1)
}
const previuspage = ()=>{
  paginado(status-1)
  setStatus(status-1)
  console.log("estado para anterior"+status-1)
}
const handleclick = (number)=>{
  console.log(number)
  setStatus(number)
  paginado(number)
}

  for (let i = 1; i <= Math.ceil(country/countryPorPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul id="ul_pagina" className={style.paginado}>
        <button disabled={status===1||status<1} onClick={previuspage}>Previus</button>
        {pageNumber?.map((number) => (
          <li key={number} id="pagina">
              <button className={paginado === number ? style.active : style.btn} onClick={() => handleclick(number)}>{number} </button>
            
          </li>
        ))}
          <button disabled={status===maximo||status>maximo} onClick={nexpage}>Next</button>
      </ul>
    </nav>
  );
}

export default Paginado;
