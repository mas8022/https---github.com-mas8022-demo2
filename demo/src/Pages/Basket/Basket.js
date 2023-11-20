import React, { useContext, useEffect, useState } from "react";
import "./Basket.css";
import "./Basket-media.css";
import ProductFlex from "../../Component/ProductFlex/ProductFlex";
import context from "../../ContextSite";

export default function Basket() {
  let contextBasket = useContext(context);
  const [allCost, setAllCost] = useState(() => {
    const cost = JSON.parse(localStorage.getItem("allCost"));
    return cost ? JSON.parse(localStorage.getItem("allCost")) : 0;
  });

  useEffect(() => {
    localStorage.setItem("allCost", JSON.stringify(allCost));
  }, [allCost]);

  useEffect(() => {
    setAllCost(0)
    contextBasket.productsAdd.map((item) =>
      setAllCost((p) => Number(p) + Number(item.price))
    );
  }, []);

  useEffect(() => {
    console.log(allCost);
  }, [allCost]);

  return (
    <div className="basket">
      <div className="buyDiv">
        <div className="buyBtn">خرید</div>
        <p className="allCost"><span>تومان</span><span>{allCost}</span></p>
      </div>
      <ProductFlex mode="number" info={contextBasket.productsAdd} />
    </div>
  );
}
