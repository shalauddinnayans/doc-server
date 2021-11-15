import React from "react";
import Footer from "../Shared/Footer/Footer";

import Navigation from "../Shared/Navigation/Navigation";

import HomeCategory from "./HomeCategory/HomeCategory";
import Reviews from "./Reviews/Reviews";
import TopProduct from "./TopProduct/TopProduct";

const Home = () => {
  return (
    <div>
      <Navigation />
      <HomeCategory></HomeCategory>
      <TopProduct></TopProduct>
      <Reviews></Reviews>
      <Footer />
    </div>
  );
};

export default Home;
