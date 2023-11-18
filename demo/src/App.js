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


  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(flagLog));
  }, [flagLog]);

  useEffect(() => {
    localStorage.setItem("loginShow", JSON.stringify(showLogin));
  }, [showLogin]);




  return (
    <context.Provider
      value={{ user, setUser, flagLog, setFlagLog, showLogin, setShowLogin }}
    >
      <div className="App">
        <Login />
        <Navbar />
        {routes}
        <Footer />
      </div>
    </context.Provider>
  );
}

export default App;
