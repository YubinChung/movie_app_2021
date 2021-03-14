import React from "react";
import './Details.css';

class Details extends React.Component{
  componentDidMount(){
    const { location, history } = this.props;

    // Redirect
    if(location.state === undefined) {
      history.push("/");
    }
  }
  render(){
    const { location } = this.props;
    return (
      <div className="movie__details_wrap">
        <div>
          <img src={location.state.largePoster} alt={location.state.title} />
          <div className="movie__data">
            <h3 className="movie__title">{location.state.title}</h3>
            <h5 className="movie__year">{location.state.year}</h5>
            <ul className="movie__genres">
              {location.state.genres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
            <p>{location.state.summary}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Details;