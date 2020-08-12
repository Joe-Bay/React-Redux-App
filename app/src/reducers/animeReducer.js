import {FETCH_ANIME_START, FETCH_ANIME_SUCCESS, FETCH_ANIME_ERROR} from '../actions/animeAction'
const initialState = {
    anime: [],
    loading: true,
    error: '',
}
 const animeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ANIME_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case FETCH_ANIME_SUCCESS:
            return {
                ...state,
                anime: action.payload,
                loading: false,
                error: ''
            }
        case FETCH_ANIME_ERROR:
            return {
                ...state,
                anime: [],
                loading: false,
                error: action.payload
            }
        default: 
        return state
    }
}
export default animeReducer