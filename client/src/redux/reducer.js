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
  get_country_filter_menor,
  Filter_Menor,
  RESET_DETAIL,
  DELETE_ACTIVITY,
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

      return {
        ...state,
        country: continentFilter,
      };
    case FILTER_BY_ACTIVITY:
      const allcountryactivity = state.allcountry
      const activityFilter = 
      payload === "All"
      ?allcountryactivity.filter(m => m.activities.length)
      :allcountryactivity.filter((e) => e.activities && e.activities.map((m) => m.name).includes(payload))
      return {
        ...state,
        country: activityFilter,
      };
    case ORDER_NAME:
      const ordername =
        payload === "asc"
          ? state.country.sort((a, b) => a.name.localeCompare(b.name))
          : state.country.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        country: ordername,
      };
    case ORDER_POPULATION:
      const orderpopulation =
        payload === "Asc"
          ? state.country.sort((a, b) => a.population - b.population)
          : state.country.sort((a, b) => b.population - a.population);
      return {
        ...state,
        country: orderpopulation,
      };

      case Filter_Menor: 
      return{
        ...state,
        country: state.allcountry.filter(a => a.population<30000000)
      }
      case RESET_DETAIL:
        return{
          ...state,
          country_detail: []
          
        }
      case DELETE_ACTIVITY:
        return{
          ...state,
          country_detail: payload
        }
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
