import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react'
import MovieDetails from './components/MovieDetails/index.jsx'
import Genrebar from './components/genBar/index.js'
import MoviesDisplay from './components/MoviesDisplay/index.jsx'
import Header from './components/header';
import CreateMovie from './components/admin/CreateMovie.js';
import Admin from './components/admin/Movies.js';
import EditMovie from './components/admin/EditMovie.js';
import Footer from './components/footer/index.js';
import './App.css';
import MoviesList from './components/movies/MoviesList.jsx';
import About from './components/about/About.jsx';

const router = createBrowserRouter ([
  {path:'/', element:<main><Genrebar/><MoviesDisplay/></main>},               // Página principal
  {path:'/movies/:id', element: <MovieDetails></MovieDetails>},               // Detalles de una película
  {path:'/admin', element: <Admin></Admin>},                                  // Listado para administración de películas
  {path:'/admin/movies/create', element:<CreateMovie></CreateMovie>},         // Creación de películas nuevas
  {path:'/admin/movies/:id', element:<EditMovie></EditMovie>},                // Edición de las películas
  {path:'/about-us', element: <About></About>},                                  // About US
  {path:'/movies/admin', element: <MoviesList></MoviesList>},                 // Module example api connection
]);

function App() {
  return (
    <div className="App">
      {Header()}
      <RouterProvider router={router}></RouterProvider>
      {Footer()} 
    </div>
  );
}

export default App;