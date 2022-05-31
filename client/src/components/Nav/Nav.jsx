import React from 'react'
import { NavLink } from 'react-router-dom'
import stylenav from "./Nav.module.css"

function Nav() {

  return (
    <div className={stylenav.menu}>
      
        <div className={stylenav.logo}>
        <img src="" alt="Logo" />
        <h2 className={stylenav.name}>PI COUNTRIES</h2>
        </div>
      <nav>
        
       <NavLink to="/countries" className={stylenav.nav_link}>
         Home
       </NavLink>
 
       <NavLink to="/activity" className={stylenav.nav_link} >
         Create Activity
       </NavLink>
       
      </nav>
    </div>
  )
}

export default Nav