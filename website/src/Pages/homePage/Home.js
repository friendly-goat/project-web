import React from "react";
import Header from "../../Components/Header/Header";
import SwiperSlider from "../../Components/Slider/SwiperSlider";
// import Catalog from "../Components/Catalog/Catalog";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="scrollhost">
        <div id="slider_div">
          <div id="header_div">
            <Header />
          </div>
          <SwiperSlider />
        </div>
      </div>
    </div>
  );
}

export default Home;
