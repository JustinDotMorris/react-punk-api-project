import "./BeerCard.scss";

const BeerCard = (props) => {
  // console.log(props.name);
  return (
    <div className="card">
      <img className="card--image" src={props.imageUrl} alt="" />
      <div className="card__text">
        <h2>{props.name}</h2>
        <p>First Brewed: {props.first_brewed}</p>
        <p>ABV: {props.abv}</p>
        <p>PH: {props.ph}</p>
      </div>
    </div>
  );
};

export default BeerCard;
