import React, { useContext } from "react";
import "./Cart.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import context from "../../ContextSite";

export default function Cart({ item, mode, option, like }) {
  let contextCart = useContext(context);

  const reloadAndDeleteProductAddedHandle = (item) => {
    contextCart.setProductsAdd(
      contextCart.productsAdd.filter((product) => product.name !== item.name)
    );
  };

  const reloadAndDeleteProductHandle = (item) => {
    contextCart.setProductsFav(
      contextCart.productsFav.filter((product) => product.name !== item.name)
    );
  };

  const reloadAndSetProductHandle = (item) => {
    contextCart.setProductsFav((p) => [...p, item]);
    window.location.reload();
  };

  const changeHandler = (event) => {
    contextCart.setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div
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
            <HighlightOffIcon style={{ fontSize: 30 }} className="tde" />
          </div>
        )}
        {option === "delete" && (
          <div
            onClick={() => reloadAndDeleteProductHandle(item)}
            className="deleteProductBtn"
          >
            <HighlightOffIcon style={{ fontSize: 30 }} className="tde" />
          </div>
        )}
        {like && (
          <div onClick={() => reloadAndSetProductHandle(item)} className="trer">
            <FavoriteIcon style={{ fontSize: 25 }} className="tde" />
          </div>
        )}
      </div>
      <div className="productDetails">
        <h2>{item.name}</h2>
        <p className="priceProduct">
          <span>{item.price}</span>
          <span>تومان</span>
        </p>
        {mode === "add" ? (
          <div
            onClick={() => {
              contextCart.setProductsAdd((p) => [...p, item]);
              window.location.reload();
            }}
            className="addProduct"
          >
            افزودن به سبد
          </div>
        ) : (
          <input
            value={
              contextCart.inputs[item.name]
                ? contextCart.inputs[item.name]
                : (contextCart.inputs[item.name] = 1)
            }
            name={item.name}
            onChange={changeHandler}
            placeholder="تعداد"
            className="addProduct dje ewweer"
            type="number"
          />
        )}
      </div>
    </div>
  );
}
