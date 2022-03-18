import logo from './logo.svg';
import './App.css';
import FetchPokemonAxios from './components/FetchPokemonAxios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FetchPokemonAxios/>
      </header>
    </div>
  );
}

export default App;
