import axios from 'axios'
export const FETCH_ANIME_START = 'FETCH_ANIME_START'
export const FETCH_ANIME_SUCCESS = 'FETCH_ANIME_SUCCESS'
export const FETCH_ANIME_ERROR = "FETCH_ANIME_ERROR"

export const fetchAnime = () => (dispatch) => {
    dispatch({ type: FETCH_ANIME_START })
    axios.get('https://api.jikan.moe/v3/search/anime?q=bleach')
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_ANIME_SUCCESS, payload: res.data.results})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: FETCH_ANIME_ERROR, payload: err})
    })
}