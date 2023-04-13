import './App.css';
import Header from './components/header';
import PeliculaDetalles from './components/peliculaDetalles';

function App() {
  return (
    <div>
      {Header()};
      {PeliculaDetalles()}
    </div>
  );
}

export default App;
