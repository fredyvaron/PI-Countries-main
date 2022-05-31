import {
  GET_ALL_CONTRIES,
  GET_DETAIL_CONTRY,
  GET_COUNTRY_BY_NAME,
  GET_ACTIVITY,
  FILTER_CONTINENT,
  FILTER_BY_ACTIVITY,
  ORDER_NAME,
  ORDER_POPULATION,
  CREATE_ACTIVIY_COUNTRY,
} from "./actions";

const initialState = {
  country: [],
  allcountry: [],
  country_detail: [],
  activity: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CONTRIES:
      return {
        ...state,
        country: payload,
        allcountry: payload,
      };
    case GET_DETAIL_CONTRY:
      return {
        ...state,
        country_detail: payload,
      };
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        country: payload,
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activity: payload,
      };
    case FILTER_CONTINENT:
      const allCountries = state.allcountry;
      const continentFilter =
        payload === "All"
          ? allCountries
          : allCountries.filter((e) => e.continent === payload);
      console.log(continentFilter);
      return {
        ...state,
        country: continentFilter,
      };
    case FILTER_BY_ACTIVITY:
      return {
        ...state,
        country: state.allcountry.filter(  (e) => e.activities && e.activities.map((m) => m.name).includes(payload)),
      };
    case ORDER_NAME:
      const ordername =
        payload === "asc"
          ? state.allcountry.sort((a, b) => a.name.localeCompare(b.name))
          : state.allcountry.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        country: ordername,
      };
    case ORDER_POPULATION:
      const orderpopulation =
        payload === "Asc"
          ? state.allcountry.sort((a, b) => a.population - b.population)
          : state.allcountry.sort((a, b) => b.population - a.population);
      return {
        ...state,
        country: orderpopulation,
      };

    //const allCountriese = state.allcountry;
    // if(payload==="All"){
    //     return {
    //         ...state,
    //         country: allCountriese
    //     }
    // }else{
    // return{
    // ...state, country: allCountriese.filter((e)=> e.activity && e.activity.map(m=> m.name.includes(payload)))
    // }
    //
    // }
    // return{

    // }

    default:
      return state;
  }
};

export default rootReducer;
