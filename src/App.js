import React, { Component } from "react";
import Header from "./components/Header/index";
import InputSearch from "./components/InputSearch/index";
import Movies from "./components/Movies/index";
import Pagination from "./components/Pagination/index";
import MovieInfo from "./components/MovieInfo/MovieInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genres: [],
      movie: "",
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=415cf44867fda717d3a05fafa42dadb1&language=pt-BR&query=${this.state.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
        });
      });
  };

  listGenres = (e) => {
    e.preventDefault();
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=415cf44867fda717d3a05fafa42dadb1&language=pt-BR"
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({
          genres: [...data.results],
          totalResults: data.total_results,
        });
      });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  nextPage = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=415cf44867fda717d3a05fafa42dadb1&language=pt-BR&query=${this.state.searchTerm}&page=${pageNumber}`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      });
  };

  viewMovie = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=415cf44867fda717d3a05fafa42dadb1&language=pt-BR`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          movie: data,
        });
      });
  };

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter((movie) => movie.id === id);

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    console.log(newCurrentMovie);
    this.setState({ currentMovie: newCurrentMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div>
        <Header closeMovieInfo={this.closeMovieInfo} />
        {this.state.currentMovie == null ? (
          <div>
            <InputSearch
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <Movies
              viewMovieInfo={this.viewMovieInfo}
              viewMovie={this.viewMovie}
              movies={this.state.movies}
              genres={this.state.genres}
            />
            {this.state.totalResults > 5 ? (
              <Pagination
                pages={numberPages}
                nextPage={this.nextPage}
                currentPage={this.state.currentPage}
              />
            ) : (
              ""
            )}
          </div>
        ) : (
          <MovieInfo currentMovie={this.state.currentMovie} />
        )}
      </div>
    );
  }
}

export default App;
