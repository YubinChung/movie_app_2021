import React from "react";
import axios from "axios";
import Movie from "../../componants/Movie/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  render(){
    const {isLoading, movies} = this.state; // 비구조화할당 이라는 것 
    return (
      <section className="container">
        {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => {
            return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} backgroundImage={movie.background_image_original} largePoster={movie.large_cover_image} />
          })}
        </div>
      )}
      </section>
    )
  }

  getMovies = async() => {
    // movies.data.data.movies ::: NOT SEXY
    const {data: { data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); 
    
    // this.state.setState({ movies: movies}) NOT SEXY
    this.setState({ movies, isLoading:false })
    
  }
  componentDidMount() {
    this.getMovies();
  }

  // state = {
  //   count: 0
  // }

  // add = () => {
  //   // this.setState({count: this.state.count + 1}) // 추천하지 않는 코드 
  //   this.setState( current => ({
  //     count: current.count + 1
  //   }))
  // }
  // minus = () => {
  //   this.setState({count: this.state.count - 1})
  // }

  // render(){
  //   return (<div>
  //       <h1>The number is {this.state.count}</h1>
  //       <button onClick={this.add}>Add</button>
  //       <button onClick={this.minus}>Minus</button>
  //     </div>)
  // }
}


export default Home;
