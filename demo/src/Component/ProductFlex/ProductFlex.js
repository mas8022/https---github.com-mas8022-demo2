import React, { useEffect, useContext } from "react";
import "./ProductFlex.css";
import "./ProductFlex-media.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AOS from "aos";
import context from "../../ContextSite";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function ProductFlex({ info, mode, option }) {
  let contextProductFlex = useContext(context);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
    });
  }, []);
  const reloadAndDeleteProductAddedHandle = (item) => {
    contextProductFlex.setProductsAdd(
      contextProductFlex.productsAdd.filter(
        (product) => product.name !== item.name
      )
    );
  };
  const reloadAndDeleteProductHandle = (item) => {
    contextProductFlex.setProductsFav(
      contextProductFlex.productsFav.filter(
        (product) => product.name !== item.name
      )
    );
  };
  const reloadAndSetProductHandle = (item) => {
    contextProductFlex.setProductsFav((p) => [...p, item]);
    window.location.reload();
  };
  return (
    <div className="productFlex">
      {info
        ? info.slice(0, 8).map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={mode === "add" ? "productCard" : "productCard dwhwe"}
              style={{ background: `url('${item.image}')` }}
            >
              <div className="productTop">
                {option === "deleteAdded" && (
                  <div
                    onClick={() => reloadAndDeleteProductAddedHandle(item)}
                    className="deleteProductBtn"
                  >
                    <HighlightOffIcon
                      style={{ fontSize: 30 }}
                      className="tde"
                    />
                  </div>
                )}
                {option === "delete" && (
                  <div
                    onClick={() => reloadAndDeleteProductHandle(item)}
                    className="deleteProductBtn"
                  >
                    <HighlightOffIcon
                      style={{ fontSize: 30 }}
                      className="tde"
                    />
                  </div>
                )}

                <div
                  onClick={() => reloadAndSetProductHandle(item)}
                  className="trer"
                >
                  <FavoriteIcon style={{ fontSize: 25 }} className="tde" />
                </div>
              </div>
              <div className="productDetails">
                <h2>{item.name}</h2>
                <p className="priceProduct">{item.price}تومان</p>
                {mode === "add" ? (
                  <div
                    onClick={() => {
                      contextProductFlex.setProductsAdd((p) => [...p, item]);
                      window.location.reload();
                    }}
                    className="addProduct"
                  >
                    افزودن به سبد
                  </div>
                ) : (
                  <div className="addProduct dje">2</div>
                )}
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
