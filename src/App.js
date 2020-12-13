import logo from './logo.svg';
import './App.css';
import {
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <a
          className="App-link"
          href={`${ process.env.PUBLIC_URL }/dom-manipulate.html`}
        >
          DOM Manipulation
          </a>
        <a
          className="App-link"
          href={`${ process.env.PUBLIC_URL }/template-render.html`}
        >
          Template Rendering
          </a>

        <Link className="App-link" to="/todos">React App</Link>
      </header>
    </div>
  );
}

export default App;
