import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <Search defaultCity="Tehran" />
        </div>
      </div>
      <p className="weather-app link pt-0" id="endNote">
        <a href="https://github.com/sahesh2003/weather-react-app">
          Open-source code,
        </a>
        by Saideh Heshmati and hosted on{" "}
        <a href="https://euphonious-cocada-6dd8df.netlify.app/">Netlify</a>
      </p>
    </div>
  );
}

export default App;
