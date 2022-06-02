import React from "react";
import { Link } from "react-router-dom";
import style from "./NotFound.module.css";
export default function NotFound() {
  return (
    <div className={style.container}>
      <div className={style.containercontext}>
        <h1>Not Fount</h1>
        <p>there was an error country not found</p>
        <div className={style.containerbutton}>
          <Link to="/countries">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
