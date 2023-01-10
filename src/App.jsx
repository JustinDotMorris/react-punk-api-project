import "./App.scss";
import "./assets/_reset.scss";
import Nav from "./containers/Nav/Nav";
import BeerCard from "./components/BeerCard/BeerCard";
import { useEffect, useState } from "react";

const App = () => {
  //set states:
  const [beers, setBeers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [highABVState, setHighABVState] = useState(false);

  //prevents a endless loop by running once
  useEffect(() => {
    getBeer([]);
  }, []);

  //api url
  let apiUrl = "https://api.punkapi.com/v2/beers?";

  //fetch the beers data
  const getBeer = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setBeers(data);
  };

  const handleFilterABV = () => {
    setHighABVState(!highABVState);
  };

  console.log(searchInput);
  const beerFilters = () => {
    let filteredBeerArray = beers.filter((beer) => {
      if (beer.name.includes(searchInput)) {
        console.log(beer);
        return beer;
      }
    });

    filteredBeerArray = filteredBeerArray.filter((beer) => {
      if (highABVState === true && beer.abv > 6) {
        return beer;
      } else if (highABVState === false) {
        return beer;
      }
    });
    return filteredBeerArray;
  };

  const beersJsx = beerFilters().map((oneBeer) => {
    return (
      <BeerCard
        key={oneBeer.id}
        name={oneBeer.name}
        abv={oneBeer.abv}
        first_brewed={oneBeer.first_brewed}
        ph={oneBeer.ph}
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
          {/* setSearchInput state as the value of the search input prop */}
          <Nav highABVProp={handleFilterABV} searchInputProp={setSearchInput} />
        </div>
        <div>{beersJsx}</div>
      </div>
    </div>
  );
};

export default App;
