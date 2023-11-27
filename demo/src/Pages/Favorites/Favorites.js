import React, { useContext } from "react";
import "./Favorites.css";
import ProductFlex from "../../Component/ProductFlex/ProductFlex";
import Title from "../../Component/Title/Title";
import context from "../../ContextSite";
import IsExistProduct from "../../Component/IsExistProduct/IsExistProduct";
export default function Favorites() {
  let contextFavorites = useContext(context);
  return (
    <div className="favorites">
      {contextFavorites.productsFav.length > 0 ? (
        <>
          <Title title={"غذاهای مورد علاقه شما"} />
          <ProductFlex
          like={false}
            option="delete"
            mode="add"
            info={contextFavorites.productsFav}
          />
        </>
      ) : (
        <IsExistProduct text={"کالای مورد علاقه ای ثبت نشده است"} />
      )}
    </div>
  );
}
