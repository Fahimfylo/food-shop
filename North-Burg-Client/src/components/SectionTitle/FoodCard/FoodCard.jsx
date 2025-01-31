const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div>
      <div className="card text-center rounded-none bg-base-100 lg:w-72 shadow-2xl">
        <figure>
          <img src={image} alt="foods" />
        </figure>
        <p className="bg-slate-900 right-0 mr-4 mt-4 px-3 py-2 text-white absolute">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <button className="btn text-yellow-700 bg-slate-100 w-32 mx-auto border-0 border-orange-400 hover:bg-gray-700 btn-outline border-b-2 mt-10 ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
