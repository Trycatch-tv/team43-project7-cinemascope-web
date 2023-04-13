import React from 'react'
import HeaderBar from './components/HeaderBar.js'
import MovieDetails from './components/MovieDetails.js'
import Filter from './components/Filter.js'
function App() {
  return (
    <div className="App">
      <div className="content"></div>
      <HeaderBar />
      <main>
      <MovieDetails />
        <section>
          <ul>
            <li>Favoritas</li>
            <li>Populares</li>
            <li>Accion</li>
            <li>Aventura</li>
            <li>Comedia</li>
            <li>Ciencia ficción</li>
            <li>Fantasía</li>
          </ul>
        </section>
        <Filter/>
      </main>
    </div>
  );
}

export default App;
