import React, { useState, useEffect, useCallback } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const navigate = useNavigate();

  // Set initial tab index based on URL parameter, default to first tab if invalid
  const initialIndex =
    categories.indexOf(category) !== -1 ? categories.indexOf(category) : 0;
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  const handleTabChange = useCallback(
    (index) => {
      setTabIndex(index);
      // Update the URL only if it's different
      if (categories[index] !== category) {
        navigate(`/order/${categories[index]}`);
      }
    },
    [category, categories, navigate]
  );

  useEffect(() => {
    // Update the tabIndex when the category param changes
    const newIndex = categories.indexOf(category);
    if (newIndex !== -1) {
      setTabIndex(newIndex);
    } else {
      setTabIndex(0); // Default to the first tab if category is invalid
    }
  }, [category, categories]);

  return (
    <div>
      <Helmet>
        <title>Burgs | Orders</title>
      </Helmet>
      <Cover img={orderCover} title="Order Food"></Cover>
      <div className="w-3/4 mx-auto my-20">
        <Tabs selectedIndex={tabIndex} onSelect={handleTabChange}>
          <TabList className="flex justify-center my-10">
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
