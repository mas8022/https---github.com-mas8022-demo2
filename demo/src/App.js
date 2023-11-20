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
    return localUserInfo === null || localUserInfo === undefined
      ? {}
      : JSON.parse(localStorage.getItem("user"));
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
  const [allUser, setAllUser] = useState([]);
  const [allUserTr, setAllUserTr] = useState(() => {
    const eee = JSON.parse(localStorage.getItem("allUserTr"));
    return eee === undefined
      ? allUserTr
      : JSON.parse(localStorage.getItem("allUserTr"));
  });
  const [productsAdd, setProductsAdd] = useState(() => {
    const ssf = JSON.parse(localStorage.getItem("productsAdd"));
    return ssf ? JSON.parse(localStorage.getItem("productsAdd")) : [];
  });
  const [productsFav, setProductsFav] = useState(() => {
    const gdf = JSON.parse(localStorage.getItem("productsFav"));
    return gdf ? JSON.parse(localStorage.getItem("productsFav")) : [];
  });

  useEffect(() => {
    fetch("https://foodstore22-9bea4-default-rtdb.firebaseio.com/users.json")
      .then((res) => res.json())
      .then((data) => setAllUser(Object.entries(data)));
  }, []);

  useEffect(() => {
    setAllUserTr(allUser.map((user) => user[1]));
  }, [allUser]);

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
    localStorage.setItem("allUserTr", JSON.stringify(allUserTr));
  }, [allUserTr]);

  useEffect(() => {
    localStorage.setItem("productsAdd", JSON.stringify(productsAdd));
  }, [productsAdd]);

  useEffect(() => {
    localStorage.setItem("productsAdd", JSON.stringify(productsFav));
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
        allUserTr,
        setAllUserTr,
        productsAdd,
        setProductsAdd,
        productsFav,
        setProductsFav,
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
