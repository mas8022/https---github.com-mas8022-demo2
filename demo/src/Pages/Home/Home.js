import React from "react";
import "./Home.css";
import "./Home-media.css";
import Slider from "react-slick";
import ProductFlex from "../../Component/ProductFlex/ProductFlex";
import imagesHomeWelcome from "../../DataBase";
import ProductSlider from "../../Component/ProductSlider/ProductSlider";
import Comments from "../../Component/Comments/Comments";
import Title from "../../Component/Title/Title";

export default function Home() {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="home">
      <Slider className="momWelcomeDiv" {...sliderSettings}>
        <div className="welcomeDiv tgf">
          <h3>
            تابستان شاد <br />
            با غذاهای ارگانیک سالم
          </h3>
          <p>پیشنهاد منحصر به فرد -20٪ تخفیف در این هفته </p>
          <div className="welcomeBtn">خرید کن</div>
        </div>
        <div className="welcomeDiv hhy">
          <h3>
            تابستان شاد
            <br /> با غذاهای ارگانیک سالم
          </h3>
          <p>پیشنهاد منحصر به فرد -20٪ تخفیف در این هفته </p>
          <div className="welcomeBtn">خرید کن</div>
        </div>
        <div className="welcomeDiv lki">
          <h3>
            تابستان شاد <br />
            با غذاهای ارگانیک سالم
          </h3>
          <p>پیشنهاد منحصر به فرد -20٪ تخفیف در این هفته </p>
          <div className="welcomeBtn">خرید کن</div>
        </div>
      </Slider>
      <div className="homeSelectionFood">
        <div className="homeSelectionFoodSon gtr">فست فود ها</div>
        <div className="homeSelectionFoodSon jry">غذاهای ایرانی</div>
      </div>
      <hr />
      <ProductFlex like={true} mode="add" info={imagesHomeWelcome} />
      <div className="dee"></div>
      <Title title={"جدید ترین خوراکی ها"} />
      <ProductSlider array={imagesHomeWelcome} />
      <div className="dee"></div>
      <Title title={"محبوب ترین خوراکی ها"} />
      <ProductSlider array={imagesHomeWelcome.slice(2)} />
      <div className="dee"></div>
      <Comments />
      <div className="dee"></div>
    </div>
  );
}
