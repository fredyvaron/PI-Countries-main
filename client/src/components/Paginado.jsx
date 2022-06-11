import React, { useState } from "react";
import style from "./Paginado.module.css";

function Paginado({ countryPorPage, country, paginado, cantidadprimero }) {
  const [status, setStatus] = useState(1);

  // const maximo = country / countryPorPage
  const pageNumber = [];
  const handleClick = (number) => {
    setStatus(number);
    paginado(number);
  };

  const handleNext = ()=>{
    paginado(status+1)
    setStatus(status +1)
  }
  const handlePrevius = ()=>{
    paginado(status-1)
    setStatus(status-1)
  }
  const data = country + 1;
  const max = Math.ceil(data / countryPorPage);
  console.log(max, "max")
  for (let i = 1; i <=max; i++) {
    pageNumber.push(i);
  }
  return (
    <nav className={style.containerpaginado}>
      <ul id="ul_pagina" className={style.paginado}>
        <li>
          <button disabled={status === 1} className={style.btn1} onClick={handlePrevius}>
            Previus
          </button>
        </li>
        {pageNumber?.map((number) => (
          <li key={number} id="pagina">
            <button
              className={status === number ? style.active : style.btn1}
              onClick={() => handleClick(number)}
            >
              {number}{" "}
            </button>
          </li>
        ))}
        <li>
          <button disabled={status === max} className={style.btn1} onClick={handleNext}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Paginado;
