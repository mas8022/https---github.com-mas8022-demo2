import React, { useEffect, useContext, useState } from "react";
import "./ShowProduct.css";
import ProductFlex from "../../Component/ProductFlex/ProductFlex";
import context from "../../ContextSite";
import { useParams } from "react-router-dom";

export default function ShowProduct() {
  let contextShowProduct = useContext(context);
  let Params = useParams();
  const [findProduct, setfindProduct] = useState([]);

  useEffect(() => {
    let findProduct = contextShowProduct.ImagesHomeWelcome.find(
      (item) => item.name === Params.food.slice(1)
    );
    setfindProduct(findProduct);
  }, []);

  return (
    <div className="showProduct">
      <ProductFlex like={true} mode={"add"} info={[findProduct]} />
    </div>
  );
}
