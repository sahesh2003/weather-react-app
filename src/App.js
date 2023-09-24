import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <br />
        <Search />
      </header>
      <p className="weather-app link mt-0 pt-0" id="endNote">
        <a href="https://github.com/sahesh2003/weather-react-app">
          Open-source code,
        </a>
        by Saideh Heshmati
      </p>
    </div>
  );
}

export default App;
