import "./App.scss";
import "./assets/_reset.scss";
import Nav from "./containers/Nav/Nav";
import BeerCard from "./components/BeerCard/BeerCard";
import { useEffect, useState } from "react";
import Main from "./containers/Main/Main";

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

  const beerFilters = () => {
    let filteredBeerArray = beers.filter((beer) => {
      if (beer.name.toLowerCase().includes(searchInput.toLowerCase())) {
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
        imageUrl={oneBeer.image_url}
        abv={oneBeer.abv}
        first_brewed={oneBeer.first_brewed}
        ph={oneBeer.ph}
      />
    );
  });

  return (
    <div className="App">
      <header className="app__header">
        <img
          className="app__header--banner"
          src="https://xari.dev/static/99481cb559ac9d699c298ef882289605/8cdda/punk_api.png"
          alt=""
        />
      </header>
      <div className="pageContent">
        <div>
          {/* setSearchInput state as the value of the search input prop */}
          <Nav highABVProp={handleFilterABV} searchInputProp={setSearchInput} />
        </div>
        <div>{/* <Main beerFilters={beerFilters} /> */}</div>
        <div className="app__beers">{beersJsx}</div>
      </div>
    </div>
  );
};

export default App;
