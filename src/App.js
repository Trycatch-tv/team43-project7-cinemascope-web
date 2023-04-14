import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CrearCategoria from './components/crearCategoria';
import CrearPelicula from './components/crearPelicula';
import Header from './components/header';
import PeliculaDetalles from './components/peliculaDetalles';

const router = createBrowserRouter ([
  {path:'/', element:<PeliculaDetalles></PeliculaDetalles>,},
  {path:'/inicio', element:<PeliculaDetalles></PeliculaDetalles>,},
  {path:'/crearpelicula', element:<CrearPelicula></CrearPelicula>},
  {path:'/crearcategoria', element:<CrearCategoria></CrearCategoria>}

]);

function App() {
  return (
    <div>
      {Header()};
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
