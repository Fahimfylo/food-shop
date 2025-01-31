import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="mt-16">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid w-3/4 mt-16 mx-auto md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn text-black bg-slate-100 w-52 justify-center flex mx-auto border-0 hover:bg-orange-400 btn-outline border-b-2 mt-10 ">
          Order Your Favourite Food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
