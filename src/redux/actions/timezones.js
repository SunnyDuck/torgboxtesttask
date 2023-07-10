import axios from "axios";
import {setIsFetching, setTimezones} from "../reducers/timezonesReducer";

const timezonesArr = []

export const getTimezones = () => {
     return async (dispatch) => {
         dispatch(setIsFetching(true))
         const { data } = await axios.get(
             "https://api.npoint.io/6583cef96150a424800e"
         );
         const timezones = data.map(({ timezone, name }) => ({
             value: timezone,
             label: name,
         }));
         dispatch(setTimezones(timezones))
     }
}

