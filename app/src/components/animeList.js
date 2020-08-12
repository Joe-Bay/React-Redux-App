import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAnime } from '../actions/animeAction'

const AnimeList = (props) => {

useEffect(() => {
props.fetchAnime()
}, [])
const filterArray = props.anime.filter(item => item.title.includes('Bleach'))
    return (
        <section>
            <h1>Bleach Releases</h1>
            {props.loading ? <h4>Loading the information.. Please wait a moment.</h4> : null}
            {props.error ? <h4>There was an error: {props.error}</h4> : null}
            {props.anime.length  > 0 ? (
            <div className='cards-container'>
                {filterArray.map(item => (
                        <div className='card'>
                            <img src={item.image_url} alt={item.title} />
                            <h2>{item.title}</h2>
                            <h4>{item.type}</h4>
                            <p>{item.synopsis}</p>
                        </div>
                        ))}
            </div>
            ) : null}

        </section>
    )
}

const mapStateToProps = (state) => {
    return {
    anime: state.anime,
    loading: state.loading,
    error: state.error
    }
}

export default connect(mapStateToProps, {fetchAnime})(AnimeList)

