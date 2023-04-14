import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react'
import MovieDetails from './components/MovieDetails.js'
import Genrebar from './components/GenreBar.js'
import MoviesDisplay from './components/MoviesDisplay.js'
import Header from './components/header';
import CreateMovie from './components/admin/CreateMovie.js';
import Admin from './components/admin/Movies.js';
import EditMovie from './components/admin/EditMovie.js';
import './App.css';

const router = createBrowserRouter ([
  {path:'/', element:<main><Genrebar/><MoviesDisplay/></main>},               // Página principal
  {path:'/movies/:id', element: <MovieDetails></MovieDetails>},               // Detalles de una película
  {path:'/admin', element: <Admin></Admin>},                                  // Listado para administración de películas
  {path:'/admin/movies/create', element:<CreateMovie></CreateMovie>},         // Creación de películas nuevas
  {path:'/admin/movies/:id', element:<EditMovie></EditMovie>},                // Edición de las películas
]);

function App() {
  return (
    <div className="App">
      {Header()}
      <RouterProvider router={router}></RouterProvider>      
    </div>
    // <div className="App">
    //   <div className="content"></div>
    //   <HeaderBar />
    //   <main>
    //   <MovieDetails />
    //   <Genrebar/>
    //   <Filter/>
    //   <MoviesDisplay />
    //   </main>
    // </div>
  );
}

export default App;
