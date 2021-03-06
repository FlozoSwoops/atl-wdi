import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: example
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = async() => {
    console.log("Search by Title");
    axios.get(`http:www.omdbapi.com/?apikey=31f1a94&t=${title}`)
    await((response)=> {
      this.setState({
        movie: response.data
      })
    })
  }

  _searchById = () => {
    console.log("Search by ID");
    axios.get(`http:www.omdbapi.com/?apikey=31f1a94&t=${title}`)
    await((response)=> {
      this.setState({
        movie: response.data
      })
    })

  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search _searchById={this._searchById} _searchByTitle={this._searchByTitle} />

        <Movie movie={this.state.movie} />
      </div>
    );
  }
}

export default App;
