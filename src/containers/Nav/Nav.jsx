import "./Nav.scss";

const Nav = ({ searchInputProp, highABVProp }) => {
  return (
    <div className="outerNav">
      <div className="outerNav__Search">
        <input
          // when the search value changes = set the prop to the new value
          onChange={(event) => searchInputProp(event.target.value)}
          id="beerSearchInput"
          placeholder="Search..."
          type="text"
        />
      </div>
      <div className="outerNav__Filters">
        <div className="outerNav__IndividualFilters">
          <label for="HighABVFilter">High ABV {">"} 6%</label>
          <input
            onClick={highABVProp}
            className="filterBox"
            type="checkbox"
            name=""
            id=""
          />
        </div>
        <div className="outerNav__IndividualFilters">
          <label for="ClassicRangeFilter">Classic Range</label>
          <input
            className="filterBox"
            type="checkbox"
            name=""
            id="ClassicRangeFilter"
          />
        </div>
        <div className="outerNav__IndividualFilters">
          <label for="AcidicFilter">(Acidic PH {"<"} 4)</label>
          <input
            className="filterBox"
            type="checkbox"
            name=""
            id="AcidicFilter"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
