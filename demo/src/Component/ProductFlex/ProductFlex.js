import React, { useEffect } from "react";
import "./ProductFlex.css";
import "./ProductFlex-media.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductFlex({ info }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
    });
  }, []);

  return (
    <div className="productFlex">
      {info
        ? info.slice(0, 8).map((item) => {
          console.log(item);
            return (
              <div
                data-aos="fade-up"
                className="productCard"
                style={{ background: `url('${item.image}')` }}
              >
                <div className="productTop">
                  <div className="trer">
                    <FavoriteIcon style={{ fontSize: 25 }} className="tde" />
                  </div>
                </div>
                <div className="productDetails">
                  <h2>{item.name}</h2>
                  <p className="priceProduct">{item.price}تومان</p>
                  <div className="addProduct">افزودن به سبد</div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
