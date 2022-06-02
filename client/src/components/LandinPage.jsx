import React from "react";
import { Link } from "react-router-dom";
import stylelanding from "./LandingPage.module.css";
function LandinPage() {
  return (
    <div className={stylelanding.container}>
      <div className={stylelanding.containerdiv}>
        <h1>PI COUNTRIES</h1>
        <Link to={"/countries"}>
          <button className={`${stylelanding.button} ${stylelanding.button1}`}>
            Ingresar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandinPage;
