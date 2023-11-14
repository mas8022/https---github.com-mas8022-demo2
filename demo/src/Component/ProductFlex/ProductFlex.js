import React from "react";
import "./ProductFlex.css";
import "./ProductFlex-media.css";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ProductFlex({ info }) {
  return (
    <div className="productFlex">
      {info
        ? info.slice(0,8).map((item) => {
            return (
              <div
              className="productCard"
              style={{ background: `url('${item}')` }}
              >
                <div className="productTop">
                  <div className="trer">
                  <FavoriteIcon style={{fontSize: 25}} className="tde"/>
                  </div>
                </div>
                <div className="productDetails">
                  <h2>خورشت مرغ شکم پر</h2>
                  <p className="priceProduct">150000تومان</p>
                  <div className="addProduct">افزودن به سبد</div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
