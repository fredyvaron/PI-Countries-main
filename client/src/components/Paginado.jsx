import React, { useState } from "react";
import style from "./Paginado.module.css";

function Paginado({ countryPorPage, country, paginado, cantidadprimero }) {
  const [status, setStatus] = useState(1);

  // const maximo = country / countryPorPage
  const pageNumber = [];
  const handleclick = (number) => {
    setStatus(number);
    paginado(number);
  }; 
  const data = country +1
  for (let i = 1; i <= Math.ceil(data / countryPorPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav className={style.containerpaginado}>
      <ul id="ul_pagina" className={style.paginado}>
        {pageNumber?.map((number) => (
          <li key={number} id="pagina">
            <button
              className={status === number ? style.active : style.btn1}
              onClick={() => handleclick(number)}
            >
              {number}{" "}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Paginado;
