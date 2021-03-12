import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
// import PropTypes from "prop-types";


// function Food({name, image, rating}) {
//   return (
//     <div>
//       I like {name} ({image}) / Rating: {rating}
//     </div>
//   )
// }

// // Props check
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   rating: PropTypes.number // number OR undefined
// }



// const foodILike = [
//   {
//     id:1,
//     name:"Kim1",
//     image:"image1.png",
//     rating: 5
//   },
//   {
//     id:2,
//     name:"Kim2",
//     image:"image2.png",
//     rating: 3.3
//   }
// ]



// function App() {
//   return (
//     <div className="App">
//       asdf
//       {foodILike.map(food => <Food key={food.id} name={food.name} image={food.image} rating={food.rating} /> )}
//     </div>
     
//   );
// }


class App extends React.Component {
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
            return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
          })}
        </div>
      )}
      </section>
    )
  }

  getMovies = async() => {
    //const movies = await axios.get("http://yts-proxy.now.sh/list_movies.json");
    // movies.data.data.movies => NOT SEXY

    const {data: { data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); 
    // console.log(movies)

    // this.state.setState({ movies: movies}) NOT SEXY
    this.setState({ movies, isLoading:false })
    
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState( {isLoading: false})
    // }, 6000)

    this.getMovies();
    //
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


export default App;
