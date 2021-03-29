import React from "react";
import "./App.css";
import unirest from "unirest";
import Search from "./components/Search.jsx";
import Movie from "./components/Movie.jsx";

class App extends React.Component {
  state = {
    movies: [],
  };
  sendRequest = (title) => {
    const req = unirest(
      "GET",
      "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/%7Bquery%7D"
    );

    req.query({
      page: "1",
      r: "json",
      s: title,
    });

    req.headers({
      "x-rapidapi-key": "865cddfcedmsh3d5ef6811e51047p164b80jsnf7e801f179b0",
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      useQueryString: true,
    });

    req.end((res) => {
      if (res.error) throw new Error(res.error);
      const movies = res.body.Search;
      this.setState({ movies });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.movies.map((movie) => {
            return <Movie {...movie} />
          })}
          <Search handleSendRequest={this.sendRequest} />
        </header>
      </div>
    );
  }
}

export default App;
