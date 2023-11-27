import React from "react";
import "./ProductFlex.css";
import Cart from "../Cart/Cart";

export default function ProductFlex({ info, mode, option, like }) {
  return (
    <div className="productFlex">
      {info
        ? info
            .slice(0, 8)
            .map((item, index) => (
              <Cart key={index} item={item} mode={mode} option={option} like={like} />
            ))
        : null}
    </div>
  );
}
