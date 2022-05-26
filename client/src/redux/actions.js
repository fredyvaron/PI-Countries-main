import axios from "axios";

export const GET_ALL_CONTRIES = "GET_ALL_CONTRIES";
export const GET_DETAIL_CONTRY = "GET_DETAIL_COUNTRY";
export const CREATE_ACTIVIY_COUNTRY = "CREATE_ACTIVITY_COUNTRY";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const POST_CREATE_ACTIVITY = " POST_CREATE_ACTIVITY";

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
export const post_activity = (payload)=>{
    return async(dispatch)=>{
        try {
            const json = axios.post("http://localhost:3001/activities", payload);
            dispatch({type: CREATE_ACTIVIY_COUNTRY, payload: json.data})
        } catch (error) {
            console.log(error)
        }
      
    }
}
