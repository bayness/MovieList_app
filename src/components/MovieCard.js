import React from 'react'
import Startrating from './StartRating';
const MovieCard = ({card}) => {
  return (
    <div className="movie-card">
     <Startrating rate={card.rating}/>
    <img src={card.image}/>
    <p>{card.name}</p>
    <p>{card.date}</p>
    </div>
  )
}
export default MovieCard;