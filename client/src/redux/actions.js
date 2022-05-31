import axios from "axios";

export const GET_ALL_CONTRIES = "GET_ALL_CONTRIES";
export const GET_DETAIL_CONTRY = "GET_DETAIL_COUNTRY";
export const CREATE_ACTIVIY_COUNTRY = "CREATE_ACTIVITY_COUNTRY";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_POPULATION = "ORDER_POPULATION";

export const get_all_countries = ()=>{
    return async(dispatch)=>{
        const json = await axios.get("http://localhost:3001/countries");
        dispatch({ type: GET_ALL_CONTRIES, payload: json.data });
    }

}
export const get_show_detail = (id)=>{
    return async(dispatch)=>{
        const json = await axios.get(`http://localhost:3001/countries/${id}`);
        dispatch({ type: GET_DETAIL_CONTRY, payload: json.data });
    }
    
}
export const get_country_by_name = (name) => {
    return (dispatch) => {
      return axios(`http://localhost:3001/countries?name=${name}`)
        .then(res => dispatch({ type: GET_COUNTRY_BY_NAME, payload: res.data }))
        .catch(e => console.log(e))
    }
}
export const post_activity = (payload)=>{
    return async (dispatch)=>{
        const json = await axios.post("http://localhost:3001/activity", payload)
        console.log(json)  
        return json;
        } 
}
export const get_activity = () =>{
    return async(dispatch)=>{
        const json = await axios.get("http://localhost:3001/activity");
        dispatch({type:GET_ACTIVITY, payload: json.data })
    }
}
export const filter_by_continent = (payload)=>{
    return {
        type: FILTER_CONTINENT, payload
    }
}
export const filter_by_activity = (payload)=>{
    return {
        type: FILTER_BY_ACTIVITY, payload
    }
}
export const order_by_name = (payload)=>{
    return {
        type: ORDER_NAME, payload
    }
}
export const order_by_population = (payload)=>{
    return {
        type: ORDER_POPULATION, payload
    }
}
// export const get_country_by_name = (name)=>{
//     // return async(dispatch)=>{
//     //     try {
//     //         console.log(name)
//     //         const json = axios.get(`http://localhost:3001/countries?name=${name}`);
//     //         dispatch({ type: GET_COUNTRY_BY_NAME, payload: json.data});            
//     //     } catch (error) {
//     //         console.log(error)
//     //     }

//     // }
// }

