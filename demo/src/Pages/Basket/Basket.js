import React, { useContext, useEffect } from "react";
import "./Basket.css";
import "./Basket-media.css";
import ProductFlex from "../../Component/ProductFlex/ProductFlex";
import context from "../../ContextSite";
import IsExistProduct from "../../Component/IsExistProduct/IsExistProduct";

export default function Basket() {
  let contextBasket = useContext(context);

  useEffect(() => {
    contextBasket.setAllCost(0);
    contextBasket.productsAdd.map((item) =>
      contextBasket.setAllCost((p) => Number(p) + Number(item.price))
    );
  }, [contextBasket.productsAdd]);

  return (
    <div className="basket">
      {contextBasket.productsAdd.length > 0 ? (
        <>
          <div data-aos='fade-down' className="buyDiv">
            <div className="buyBtn">خرید</div>
            <p className="allCost">
              <span>تومان</span>
              <span>{contextBasket.allCost}</span>
            </p>
          </div>
          <ProductFlex
            option="deleteAdded"
            mode="number"
            info={contextBasket.productsAdd}
            like={true}
          />
        </>
      ) : (
        <IsExistProduct text={"کالایی در لیست خریدتان وجود ندارد"} />
      )}
    </div>
  );
}
