const RestaurantCard = (props) => {
  const resData = props.resData;
  const { name, cuisine, rating, image } = resData;
  return (
    <div className="res-card">
      {" "}
      <img className="res-logo" src={image} alt={name} /> <h3>{name}</h3>{" "}
      <h4>{cuisine}</h4> <h4>⭐ {rating}</h4>{" "}
    </div>
  );
};
export default RestaurantCard;
