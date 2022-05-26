import React from 'react'
import stylenav from "./Nav.module.css"

function Nav() {

  return (
    <div className={stylenav.menu}>
      
        <div className={stylenav.logo}>
        <img src="" alt="Logo" />
        <h2 className={stylenav.name}>PI COUNTRIES</h2>
        </div>
      <nav>
        
       
        {/* <a href="" className={stylenav.nav_link}>Inicio</a>
        <a href="" className={stylenav.nav_link}>Sobre nosotros</a>
        <a href="" className={stylenav.nav_link}></a> */}
      </nav>
    </div>
  )
}

export default Nav