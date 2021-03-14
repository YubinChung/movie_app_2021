import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres, backgroundImage, largePoster}){
  return (
    <Link 
      to={{
        pathname:`/movie/${id}`,
        state: {id, year, title, summary, poster, genres, backgroundImage, largePoster}
      }}
    >
    <div className="movie">
      <img src={poster} alt={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
    </Link>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Movie;