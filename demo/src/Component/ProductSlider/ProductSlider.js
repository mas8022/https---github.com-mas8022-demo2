import React from "react";
import "./ProductSlider.css";
import "./ProductSlider-media.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImagesHomeWelcome from "../../DataBase";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductSlider() {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider className="productSlider" {...sliderSettings}>
      {ImagesHomeWelcome.slice(0, 9).map((item) => (
        <div className="newProducts">
          <div className="grdcd" style={{ background: `url('${item}')` }}>
          </div>
          <div className="newProductDetails">
            <h2>سالاد ماکارونی</h2>
            <p>20000تومان</p>
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
