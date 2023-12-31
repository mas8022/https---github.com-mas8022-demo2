import React, { useContext } from "react";
import "./ProductSlider.css";
import Slider from "react-slick";
import FavoriteIcon from "@mui/icons-material/Favorite";
import context from "../../ContextSite";

export default function ProductSlider({ array }) {
  let contextProductSlider = useContext(context);

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
          centerPadding: "100",
        },
      },
      {
        breakpoint: 408,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "90",
        },
      },
    ],
  };
  const reloadAndSetProductHandle = (item) => {
    contextProductSlider.setProductsFav((p) => [...p, item]);
    window.location.reload();
  };
  return (
    <Slider {...sliderSettings}>
      {array.slice(0, 9).map((item, index) => (
        <div key={index} data-aos="fade-left" className="newProducts">
          <div
            className="grdcd"
            style={{ background: `url('${item.image}')` }}
          ></div>
          <div className="newProductDetails">
            <h2>{item.name}</h2>
            <p>{item.price}تومان</p>
            <div className="addBtnNewProductDiv">
              <div
                onClick={() => reloadAndSetProductHandle(item)}
                className="tder"
              >
                <FavoriteIcon style={{ fontSize: 25 }} className="tderhg" />
              </div>
              <div
                onClick={() => {
                  contextProductSlider.setProductsAdd((p) => [...p, item]);
                  window.location.reload();
                }}
                className="addBtnNewProduct"
              >
                افزودن به سبد
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
