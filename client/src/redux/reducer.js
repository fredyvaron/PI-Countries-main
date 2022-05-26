import { GET_ALL_CONTRIES, GET_DETAIL_CONTRY, GET_COUNTRY_BY_NAME, POST_CREATE_ACTIVITY } from "./actions";

const initialState = {
    
    country: [],
    allcountry: [],
    country_detail: [],
   

}

const rootReducer = (state= initialState, {type, payload})=>{
    switch (type) {
        case GET_ALL_CONTRIES:
            return{
                ...state,
                country: payload,
                allcountry: payload
            }
        case GET_DETAIL_CONTRY:
            return {
                ...state,
                country_detail: payload}
        case GET_COUNTRY_BY_NAME:
            return {
               ...state,
               country: payload
               
            }
        case POST_CREATE_ACTIVITY:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default rootReducer;