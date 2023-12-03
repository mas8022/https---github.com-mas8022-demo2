import React, { useState, useContext, useEffect } from "react";
import "./CmsProduct.css";
import CmsNavbar from "../../../Component/CmsNavbar/CmsNavbar";
import SearchIcon from "@mui/icons-material/Search";
import Loader from "../../../Component/Loader/Loader";
import Resizer from "react-image-file-resizer";
import context from "../../../ContextSite";

export default function CmsProduct() {
  let cmsProductContext = useContext(context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [cover, setCover] = useState(null);
  const [loader, setLoader] = useState(false);
  const [selectProductId, setSelectProductId] = useState("");
  const [cmsProductSearchBar, setCmsProductSearchBar] = useState("");
  const [cmsProductList, setCmsProductList] = useState([]);

  useEffect(() => {
    const listProduct = cmsProductContext.products.filter((item) => {
      if (cmsProductSearchBar) {
        return item.name
          .toLowerCase()
          .trim()
          .includes(cmsProductSearchBar.toLowerCase().trim());
      }
    });
    setCmsProductList(listProduct);
  }, [cmsProductSearchBar]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    Resizer.imageFileResizer(
      file,
      300, // New width
      300, // New height
      "JPEG", // Format
      99, // Quality
      0, // Rotation
      (uri) => {
        setCover(uri); // Set state with resized image data URL
      },
      "base64" // Output type
    );
  };

  const registerProduct = (e) => {
    e.preventDefault();
    setLoader(true);
    fetch("http://localhost:4000/api/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        count,
        cover,
      }),
    })
      .then((res) => {
        if (res.ok) {
          clearInputs();
          setLoader(false);
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  const editProduct = (e) => {
    e.preventDefault();
    setLoader(true);
    fetch(`http://localhost:4000/api/products/${selectProductId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        count,
        cover,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          clearInputs();
          setLoader(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteProduct = (e) => {
    e.preventDefault();
    setLoader(true);
    fetch(`http://localhost:4000/api/products/${selectProductId}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          clearInputs();
          setLoader(false);
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  const DataTr = (food) => {
    console.log(food);
    setSelectProductId(food.id);
    setName(food.name);
    setPrice(food.price);
    setCount(food.count);
    setCmsProductSearchBar("");
  };

  const clearInputs = () => {
    setName("");
    setPrice("");
    setCount("");
    setCover("");
  };

  return (
    <div className="cmsProduct">
      <Loader loader={loader} />
      <CmsNavbar />
      <div className="cmsProductFlex">
        <form className="productRegisterForm" action="#">
          <label htmlFor="productName">نام محصول</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="productName"
            type="text"
            required
            autoFocus
            placeholder="نام محصول:"
          />
          <br />
          <br />
          <label htmlFor="productPrice">قیمت محصول</label>
          <br />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="productPrice"
            type="text"
            required
            autoFocus
            placeholder="قیمت محصول:"
          />
          <br />
          <br />
          <label htmlFor="productCount">موجودی محصول</label>
          <br />
          <input
            value={count}
            onChange={(e) => setCount(e.target.value)}
            id="productCount"
            type="text"
            required
            autoFocus
            placeholder="موجودی محصول:"
          />
          <br />
          <br />
          <label htmlFor="productimage">عکس محصول</label>
          <br />
          <input
            className="fileInputCmsProduct"
            onChange={handleImageUpload}
            id="productimage"
            type="file"
          />
          <br />
          <br />
          <br />
          <br />
          <div className="cmsProductFormsBtn">
            <input
              onClick={(e) => registerProduct(e)}
              className="productRegisterFormBtn"
              type="submit"
              value="ثبت محصول"
            />

            <input
              onClick={(e) => editProduct(e)}
              className="productRegisterFormBtn grr"
              type="submit"
              value="ویرایش محصول"
            />
            <input
              onClick={(e) => deleteProduct(e)}
              className="productRegisterFormBtn tgr"
              type="submit"
              value="حذف محصول"
            />
          </div>
        </form>

        <div className="cmsProductFinding">
          <div className="cmsProductFindingSearchBar">
            <SearchIcon className="gree" style={{ fontSize: 38 }} />
            <input
              value={cmsProductSearchBar}
              onChange={(e) => setCmsProductSearchBar(e.target.value)}
              className="rfrr"
              type="text"
              placeholder="اسم کالایه مورد نظرتان را جستجو کنید"
            />
          </div>

          <div className="cmsProductFindingList">
            <div className="cmsProductFindingListItem fgf">
              <p>نام غذا</p>
              <p>قیمت غذا</p>
              <p>غذایه موجود</p>
              <p>عکس غذا</p>
            </div>

            {cmsProductList.length > 0 ? (
              cmsProductList.map((food) => (
                <div
                  onClick={() => DataTr(food)}
                  key={food.id}
                  className="cmsProductFindingListItem erfer"
                >
                  <p>{food.name}</p>
                  <p>{food.price}تومان</p>
                  <p>{food.count}</p>
                  <img src={food.cover} alt="cmsFoodimage" />
                </div>
              ))
            ) : (
              <div className="isExistCmsProductBox">موردی یافت نشده است</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
