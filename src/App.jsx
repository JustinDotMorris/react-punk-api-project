import "./App.scss";
import "./assets/_reset.scss";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";
import BeerCard from "./components/BeerCard/BeerCard";
import { useEffect, useState } from "react";

const App = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    getBeer();
  }, []);

  //i need to get the input from a  search box

  //set search input to = searchbox.target.value
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  const getBeer = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data = await response.json();
    setBeers(data);
  };
  console.log(beers);

  const beersJsx = beers.map((item) => {
    //return a new BeerCard for each item in the array
    return (
      <BeerCard
        name={item.name}
        abv={item.abv}
        first_brewed={item.first_brewed}
        ph={item.ph}
      />
    );
  });

  return (
    <div className="App">
      <header>
        <h1>Punk Api React Project</h1>
      </header>
      <div className="pageContent">
        <div>
          <Nav />
        </div>
        <div>{beersJsx}</div>
      </div>
    </div>
  );
};

export default App;
