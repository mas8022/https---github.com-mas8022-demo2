import React from "react";
import "./ProductSlider.css";
import Slider from "react-slick";
import ImagesHomeWelcome from "../../DataBase";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductSlider() {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '100'
        },
      },
      {
        breakpoint: 408,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '90'
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      {ImagesHomeWelcome.slice(0, 9).map((item) => (
        <div className="newProducts">
          <div className="grdcd" style={{ background: `url('${item.image}')` }}></div>
          <div className="newProductDetails">
            <h2>{item.name}</h2>
            <p>{item.price}تومان</p>
            <div className="addBtnNewProductDiv">
              <div className="tder">
                <FavoriteIcon style={{ fontSize: 25 }} className="tderhg" />
              </div>
              <div className="addBtnNewProduct">افزودن به سبد</div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
