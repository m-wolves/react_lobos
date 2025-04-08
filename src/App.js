import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {useState} from 'react'
//import Home from './pages/Home'

function App() {
    const [contador, setContador] = useState(0);
    function increment() {
      setContador(contador+1)
    }
  return (
    <div className="App">
      <Header title="feliz pascoa lobos" />
        <header className="App-header">
          <button onClick={increment}>
                       <img src={logo} className="App-logo" alt="logo" />
          </button>
          <p>
            Um cara com <strong>fome</strong>
          </p>
          <p>
            
                    {contador} cliques
          </p>

        </header>
    </div>
  );
}

export default App;
