import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";
import BeerCard from "./components/BeerCard/BeerCard";

const App = () => {
  const getBeer = async () => {
    const response = await fetch("https://api.punkapi.com/v2/");
    const data = await response.json();
  };
  return (
    <div className="App">
      <header>
        <h1>Punk Api React Project</h1>
      </header>
      <div className="pageContent">
        <div>
          <Nav />
        </div>
        <div>
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
