import React from 'react'
import { Link } from "react-router-dom";
import stylelanding from "./LandingPage.module.css"
function LandinPage() {
  return (
   <div className={stylelanding.container}>
    
      <Link to={'/countries'}>
      <button className={`${stylelanding.button} ${stylelanding.button1}`} >Ingresar</button>
      </Link>
   </div>
  )
}

export default LandinPage