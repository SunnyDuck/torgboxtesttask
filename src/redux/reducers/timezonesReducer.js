const SET_TIMEZONES = 'SET_TIMEZONES'
const SET_SELECTED_TIMEZONE = 'SET_SELECTED_TIMEZONE'
const SET_IF_FETCHING = 'SET_IF_FETCHING'
const SET_NEW_TIME = 'SET_NEW_TIME'

const defaultState = {
    items: [],
    isFetching: true,
    selectedItem: [],
    time: new Date()
}

export default function timezonesReducer(state = defaultState, action){
    switch (action.type){
        case SET_TIMEZONES:
            return {
                ...state,
                items: action.payload,
                isFetching: false
            }
        case SET_SELECTED_TIMEZONE:
                return {
                    ...state,
                    selectedItem: action.payload
                }
        case SET_IF_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_NEW_TIME:
            return {
                ...state,
                time: new Date()
            }
        default:
            return state
    }
}

export const setTimezones = (timezones) => (
    {type:  SET_TIMEZONES, payload: timezones}
)

export const setIsFetching  = (bool) => (
    {type:  SET_IF_FETCHING, payload: bool}
)

export const setSelectedTimezone  = (timezone) => (
    {type:  SET_SELECTED_TIMEZONE, payload: timezone}
)

export const setNewTime  = () => (
    {type:  SET_NEW_TIME}
)
