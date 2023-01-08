import "./App.scss";
import "./assets/_reset.scss";
import Nav from "./containers/Nav/Nav";
import BeerCard from "./components/BeerCard/BeerCard";
import { useEffect, useState } from "react";

const App = () => {
  //set states:
  //set beers state to an empty array
  const [beers, setBeers] = useState([]);
  //set search input state to an empty string
  const [searchInput, setSearchInput] = useState("");
  //set search highABV state to boolean for togggle
  const [highABVState, setHighABVState] = useState(false);

  //api url
  let apiUrl = "https://api.punkapi.com/v2/beers?";

  //useEffect calls the get beer function/prevents infinite loop

  console.log(searchInput);

  //fetch the beers data
  const getBeer = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    //set the set beers state as the data
    setBeers(data);
  };
  // console.log(beers);

  const handleFilterABV = () => {
    setHighABVState(!highABVState);
    if (highABVState === true) {
      // apiUrl += "abv_gt=6&";
      const abvBeers = beers.filter((item) => item.abv > 6);
      abvBeers.map((item) => {
        //return a new BeerCard for each item in the array
        return (
          <BeerCard
            key={item.id}
            name={item.name}
            abv={item.abv}
            first_brewed={item.first_brewed}
            ph={item.ph}
          />
        );
      });
    } else {
      // apiUrl = "https://api.punkapi.com/v2/beers?";
    }
  };
  useEffect(() => {
    getBeer();
  }, []);
  const beersJsx = beers
    //filter the array to only show anything that includes the search inputs current state.
    .filter((item) => item.name.includes(searchInput))
    .map((item) => {
      //return a new BeerCard for each item in the array
      return (
        <BeerCard
          key={item.id}
          name={item.name}
          abv={item.abv}
          first_brewed={item.first_brewed}
          ph={item.ph}
        />
      );
    });
  console.log(apiUrl);
  console.log(highABVState);

  return (
    <div className="App">
      <header>
        <h1>Punk Api React Project</h1>
      </header>
      <div className="pageContent">
        <div>
          <button onClick={handleFilterABV}>Hello</button>
          {/* setSearchInput state as the value of the search input */}
          <Nav highABVProp={handleFilterABV} searchInputProp={setSearchInput} />
        </div>
        <div>{beersJsx}</div>
      </div>
    </div>
  );
};

export default App;
