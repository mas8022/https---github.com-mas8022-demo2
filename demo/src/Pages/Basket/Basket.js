import React, { useContext, useEffect, useState } from "react";
import "./Basket.css";
import "./Basket-media.css";
import ProductFlex from "../../Component/ProductFlex/ProductFlex";
import context from "../../ContextSite";
import IsExistProduct from "../../Component/IsExistProduct/IsExistProduct";

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
    setAllCost(0);
    contextBasket.productsAdd.map((item) =>
      setAllCost((p) => Number(p) + Number(item.price))
    );
  }, [contextBasket.productsAdd]);

  return (
    <div className="basket">
      {contextBasket.productsAdd.length > 0 ? (
        <>
          <div className="buyDiv">
            <div className="buyBtn">خرید</div>
            <p className="allCost">
              <span>تومان</span>
              <span>{allCost}</span>
            </p>
          </div>
          <ProductFlex
            option="deleteAdded"
            mode="number"
            info={contextBasket.productsAdd}
          />
        </>
      ) : (
        <IsExistProduct text={"کالایی در لیست خریدتان وجود ندارد"} />
      )}
    </div>
  );
}
