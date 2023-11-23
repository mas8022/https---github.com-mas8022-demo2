import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { useRoutes } from "react-router-dom";
import routesArray from "./routes";
import Footer from "./Component/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import context from "./ContextSite";
import { useEffect, useState } from "react";
import Login from "./Pages/Login/Login";
import SiteModals from "./Component/Modals/Modals";
import ImagesHomeWelcome from "./DataBase";

function App() {
  let routes = useRoutes(routesArray);
  const [user, setUser] = useState(() => {
    const localUserInfo = JSON.parse(localStorage.getItem("user"));
    return localUserInfo ? JSON.parse(localStorage.getItem("user")) : {};
  });
  const [flagLog, setFlagLog] = useState(() => {
    const localLoginFlag = JSON.parse(localStorage.getItem("login"));
    return localLoginFlag === null || localLoginFlag === undefined
      ? false
      : JSON.parse(localStorage.getItem("login"));
  });
  const [showLogin, setShowLogin] = useState(() => {
    const localLoginShowFlag = JSON.parse(localStorage.getItem("loginShow"));
    return localLoginShowFlag === null || localLoginShowFlag === undefined
      ? false
      : JSON.parse(localStorage.getItem("loginShow"));
  });
  const [closeLoginModal, setCloseLoginModal] = useState(false);
  const [allUser, setAllUser] = useState(() => {
    const hwc = JSON.parse(localStorage.getItem("allUsers"));
    return hwc !== null && hwc !== undefined && hwc.length > 0
      ? JSON.parse(localStorage.getItem("allUsers"))
      : [];
  });
  const [productsAdd, setProductsAdd] = useState(() => {
    const sdfsd = JSON.parse(localStorage.getItem("productsAdd"));
    const sdsddsfds = [];
    const dfsdsddsajdfdf = new Set();
    if (sdfsd) {
      sdfsd.forEach((obj) => {
        const key = obj.name;
        if (!dfsdsddsajdfdf.has(key)) {
          dfsdsddsajdfdf.add(key);
          sdsddsfds.push(obj);
        }
      });
    }
    return sdsddsfds ? sdsddsfds : [];
  });
  const [productsFav, setProductsFav] = useState(() => {
    const gdf = JSON.parse(localStorage.getItem("productsFav"));
    const uniqueObjects = [];
    const keySet = new Set();
    if (gdf) {
      gdf.forEach((obj) => {
        const key = obj.name;
        if (!keySet.has(key)) {
          keySet.add(key);
          uniqueObjects.push(obj);
        }
      });
    }
    return uniqueObjects ? uniqueObjects : [];
  });
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://parseapi.back4app.com/classes/users", {
      method: "GET",
      headers: {
        "X-Parse-Application-Id": "SJPABe5OJHZ106zwv8Sfc79oJZz7oUR8bndbVFiC",
        "X-Parse-REST-API-Key": "2IxFijYb4hbFqjRhrrQs3enMpax87qgSUKixgOSY",
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })

      .then((data) => {
        if (data) {
          localStorage.setItem(
            "allUsers",
            JSON.parse(Object.entries(data)[0][1])
          );
          setAllUser(Object.entries(data)[0][1]);
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(flagLog));
  }, [flagLog]);

  useEffect(() => {
    localStorage.setItem("loginShow", JSON.stringify(showLogin));
  }, [showLogin]);

  useEffect(() => {
    localStorage.setItem("productsAdd", JSON.stringify(productsAdd));
  }, [productsAdd]);

  useEffect(() => {
    localStorage.setItem("productsFav", JSON.stringify(productsFav));
  }, [productsFav]);

  return (
    <context.Provider
      value={{
        ImagesHomeWelcome,
        user,
        setUser,
        flagLog,
        setFlagLog,
        showLogin,
        setShowLogin,
        closeLoginModal,
        setCloseLoginModal,
        allUser,
        setAllUser,
        productsAdd,
        setProductsAdd,
        productsFav,
        setProductsFav,
        searchValue,
        setSearchValue,
      }}
    >
      <div className="App">
        <SiteModals />
        <Login />
        <Navbar />
        {routes}
        <Footer />
      </div>
    </context.Provider>
  );
}

export default App;
