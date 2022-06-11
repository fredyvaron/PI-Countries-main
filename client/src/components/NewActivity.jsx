import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { get_all_countries, post_activity } from "../redux/actions";
import styleForm from "./NewActivity.module.css";

function validate(input) {
  let error = {};

  if (!input.name) {
    error.name = "name is required";
  } else if (input.name.length < 4) {
    error.name = "name cannot be less than 3 characters";
  }
  if (!input.difficulty) {
    error.difficulty = "difficulty is required";
  } else if (input.difficulty < 1 || input.difficulty > 5) {
    error.name = "difficulty must be between 1 and 5";
  }
  if (!input.duration) {
    error.duration = "duration is required";
  } else if (input.duration < 1 || input.duration > 5) {
    error.duration = "duration must be between 1 and 5";
  }
  if (!input.season) {
    error.season = "season is required";
  }

  return error;
}

function NewActivity() {
  const dispatch = useDispatch();
  const countrys = useSelector((state) => state.country);
  const history = useHistory();
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });
  useEffect(() => {
    dispatch(get_all_countries());
  }, [dispatch]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!input.name || !input.difficulty || !input.duration || !input.season) {
      alert("Error Data not Completed");
    } else if (
      error.name ||
      error.difficulty ||
      error.duration ||
      error.season
    ) {
      alert("Data error required");
    } else {
      dispatch(post_activity(input));
      alert("Activity Create");
      setInput({
        name: "",
        difficulty: 0,
        duration: 0,
        season: "",
        country: [],
      });
      history.push("/countries");
    }
  };
  const handlechange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(validate({ ...input, [e.target.name]: e.target.value }));
  };

  //
  const validateselect = (date) => {
    const p = [...input.country];
    return p.filter((e) => e === date);
  };

  const handleselect = (e) => {
    e.preventDefault();
    const date = e.target.value;
    if (validateselect(date).length > 0) {
      alert("EL pais solo se puede agregar una vez");
    } else {
      setInput({
        ...input,
        country: [...input.country, e.target.value],
      });
    }
  };

  const handledelete = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      country: input.country.filter((c) => c !== e.target.value),
    });
  };

  // * Inicio render
  return (
    <div >
      <Link to="countries">
        <button className={styleForm.button}>Back</button>
      </Link>
      <div className={styleForm.container}>
        <h2>Create one Activity</h2>

        <form onSubmit={(e) => handlesubmit(e)}>
          <label htmlFor="name">Name : </label>
          <br />
          <input
            type="text"
            className={styleForm.input}
            name="name"
            id="name"
            onChange={(e) => handlechange(e)}
          />
          <br></br>
          <div className={styleForm.error}>
            {error.name && <p className={styleForm.danger}>{error.name}</p>}
          </div>
          <br></br>
          <label>Dificulty</label>
          <br></br>
          <input
            type="radio"
            value="1"
            name="difficulty"
            id="1"
            onChange={(e) => handlechange(e)}
          />
          <label htmlFor="1">1</label>
          <br></br>
          <input
            type="radio"
            value="2"
            name="difficulty"
            id="2"
            onChange={(e) => handlechange(e)}
          />
          <label htmlFor="2">2</label>
          <br></br>
          <input
            type="radio"
            value="3"
            name="difficulty"
            id="3"
            onChange={(e) => handlechange(e)}
          />
          <label htmlFor="3">3</label>
          <br></br>
          <input
            type="radio"
            value="4"
            name="difficulty"
            id="4"
            onChange={(e) => handlechange(e)}
          />
          <label htmlFor="4">4</label>
          <br></br>
          <input
            type="radio"
            value="5"
            name="difficulty"
            id="5"
            onChange={(e) => handlechange(e)}
          />
          <label htmlFor="5">5</label>
          <br></br>
          <div className={styleForm.error}>
            {error.difficulty && (
              <p className={styleForm.danger}>{error.difficulty}</p>
            )}
          </div>
          <label htmlFor="duration">Duration</label>
          <br></br>
          <input
            type="number"
            className={styleForm.input}
            name="duration"
            id="duration"
            onChange={(e) => handlechange(e)}
          />
          <div className={styleForm.error}>

          {error.duration && (
            <p className={styleForm.danger}>{error.duration}</p>
            )}
            </div>
          <br></br>
          <label>Season</label>
          <br></br>
          <input
            type="radio"
            value="Summer"
            name="season"
            id="Summer"
            onChange={(e) => handlechange(e)}
          />
          <label htmlFor="Summer">Summer</label>
          <br></br>
          <input
            type="radio"
            value="Autumn"
            name="season"
            id="Autumn"
            onChange={(e) => handlechange(e)}
          />
          <label htmlFor="Autumn">Autumn</label>
          <br></br>
          <input
            type="radio"
            value="Winter"
            name="season"
            id="Winter"
            onChange={(e) => handlechange(e)}
          />
          <label htmlFor="Winter">Winter</label>
          <br></br>
          <input
            type="radio"
            value="Spring"
            name="season"
            id="Spring"
            onChange={(e) => handlechange(e)}
          />
          <label htmlFor="Spring">Spring</label>
          <br></br>
          <div className={styleForm.error}>
          {error.season && <p className={styleForm.danger}>{error.season}</p>}
          </div>
          <div>
            <br></br>
            <label>Country: </label>
            <br></br>
            <select
              className={styleForm.select}
              onChange={(e) => handleselect(e)}
            >
              {countrys &&
                countrys.map((c) => (
                  <option value={c.name} key={c.id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>
          <div className={styleForm.containerlist}>
            <ul>
              {input.country.map((e) => (
                <li key={e} className={styleForm.orderlist}>
                  {e}
                  <button value={e} onClick={(e) => handledelete(e)}>
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className={styleForm.buttonsubmit} type="submit">
            Create Activity
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewActivity;
