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
    return eee === null || eee === undefined
      ? false
      : JSON.parse(localStorage.getItem("allUserTr"));
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

  return (
    <context.Provider
      value={{
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
