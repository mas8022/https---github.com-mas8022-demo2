import React, { useContext } from "react";
import "./Product.css";
import ProductSlider from "../../Component/ProductSlider/ProductSlider";
import context from "../../ContextSite";
import Title from "../../Component/Title/Title";
import ProductFlex from "../../Component/ProductFlex/ProductFlex";

export default function Product() {
  let contextProduct = useContext(context);

  return (
    <div className="product">
      <Title title={"محبوب ترین غذاها"} />
      <ProductSlider array={contextProduct.imagesHomeWelcome} />
      <hr className="underLine" />
      <Title title={"جدید ترین غذاها"} />
      <ProductSlider array={contextProduct.imagesHomeWelcome} />
      <hr className="underLine" />

      <Title title={"غذاهای اقتصادی"} />
      <ProductFlex
        like={true}
        mode={"add"}
        info={contextProduct.imagesHomeWelcome.slice(0, 4)}
      />
      <hr className="underLine" />
      <Title title={"پرفروش ترین غذاها"} />
      <ProductSlider array={contextProduct.imagesHomeWelcome} />
      <hr className="underLine" />
    </div>
  );
}
