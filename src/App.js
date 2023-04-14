import React from 'react'
import HeaderBar from './components/HeaderBar.js'
import MovieDetails from './components/MovieDetails.js'
import Filter from './components/Filter.js'
import Genrebar from './components/GenreBar.js'
import MoviesDisplay from './components/MoviesDisplay.js'

function App() {
  return (
    <div className="App">
      <div className="content"></div>
      <HeaderBar />
      <main>
      <MovieDetails />
      <Genrebar/>
      <Filter/>
      <MoviesDisplay />
      </main>
    </div>
  );
}

export default App;
