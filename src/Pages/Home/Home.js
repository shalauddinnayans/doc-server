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
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-10-28-15-42-39-BABY-FW35-FY21-1028-Web-HP-Graphics-Banner-Toy-Shop-Desktop?$content$&wid=1280&hei=378"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://b3h2.scene7.com/is/image/BedBathandBeyond/MicrosoftTeams?$content$&wid=1280&hei=475"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-11-01-13-11-53-US_FW38_FY21_1117_1121_WEB_EBF_DontMissDeals_C01_19_1-1?$content$&wid=1280&hei=360"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <HomeCategory></HomeCategory>
      <TopProduct></TopProduct>
      <Reviews></Reviews>
      <Footer />
    </div>
  );
};

export default Home;
