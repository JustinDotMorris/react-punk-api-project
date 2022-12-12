import "./Nav.scss";

const Nav = () => {
  return (
    <div className="outerNav">
      <div className="outerNav__Search">
        <input type="text" />
      </div>
      <div className="outerNav__Filters">
        <div className="outerNav__IndividualFilters">
          <label for="HighABVFilter">High ABV {">"} 6%</label>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="outerNav__IndividualFilters">
          <label for="ClassicRangeFilter">Classic Range</label>
          <input type="checkbox" name="" id="ClassicRangeFilter" />
        </div>
        <div className="outerNav__IndividualFilters">
          <label for="AcidicFilter">(Acidic PH {"<"} 4)</label>
          <input type="checkbox" name="" id="AcidicFilter" />
        </div>
      </div>
    </div>
  );
};

export default Nav;