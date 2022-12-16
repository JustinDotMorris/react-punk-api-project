import "./BeerCard.scss";

const BeerCard = (props) => {
  // console.log(props.name);
  return (
    <div className="card">
      <img src="" alt="" />
      <h2>{props.name}</h2>
      <p>{props.abv}</p>
      <p>{props.first_brewed}</p>
      <p>{props.ph}</p>
    </div>
  );
};

export default BeerCard;
