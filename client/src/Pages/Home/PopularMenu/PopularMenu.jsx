import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === 'popular')

  return (
    <div className="mb-20">
      <SectionTitle
        heading={"from our menu"}
        subHeading={"--Check it out---"}
      ></SectionTitle>
      <div className="grid w-3/4 mx-auto md:grid-cols-2 gap-10">
        {popular.map(item => 
          <MenuItem key={item._id} item={item}></MenuItem>
        )}
      </div>
    </div>
  );
};

export default PopularMenu;
