import axios from "axios";
import {setIsFetching, setTimezones} from "../reducers/timezonesReducer";

const timezonesArr = []

export const getTimezones = () => {
     return async (dispatch) => {
         dispatch(setIsFetching(true))
         const timezones = await axios.get('https://api.npoint.io/6583cef96150a424800e')
         timezones.data.map(item => {
             let obj = new Object()
             obj.value = item.timezone
             obj.label = item.name
             timezonesArr.push(obj)
         })
         dispatch(setTimezones(timezonesArr))
     }
}

