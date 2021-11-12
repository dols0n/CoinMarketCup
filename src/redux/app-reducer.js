import {API} from "../api";

const SET_COINS_DATA = 'app-reducer/SET_COINS_DATA'

const initialState = {
    coinsArray: []
}


const appReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_COINS_DATA:
            return {...state, coinsArray: action.coinsArray}

        default:
            return state
    }
}

const setCoinsData = (coinsArray) => ({
    type: SET_COINS_DATA, coinsArray
})


export const getCoinsData = () => {
    return async (dispatch) => {
        let response = await API.getCoinData()
        dispatch(setCoinsData(response))
    }
}

export default appReducer