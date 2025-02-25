import { Helmet } from "react-helmet-async";

import Cover from "../../Shared/Cover/Cover";
import menuBg  from '../../../assets/menu/menu-bg.jpg'
import desertBg  from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg  from '../../../assets/menu/pizza-bg.jpg'
import soupBg  from '../../../assets/menu/soup-bg.jpg'
import saladBg  from '../../../assets/menu/salad-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
  const [menu] = useMenu()
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')

  return (
    <div>
      <Helmet>
        <title>Burgs | Menu</title>
      </Helmet>
      <Cover img={menuBg} title='our menu'></Cover>
      {/* main cover */}
      <SectionTitle heading="Today's Offer" subHeading="---Don't Miss---"> </SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert menu items  */}  
      <MenuCategory items={dessert} img={desertBg } title='Dessert'></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory items={pizza} title='pizza' img={pizzaBg}></MenuCategory>
      <MenuCategory items={salad} title='salad' img={saladBg}></MenuCategory>
      <MenuCategory items={soup} title='soup' img={soupBg}></MenuCategory>
      {/*  */}
      </div>
  );
};

export default Menu;
 