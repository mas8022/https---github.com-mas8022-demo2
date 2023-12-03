import React, { useState, useContext } from "react";
import "./Navbar.css";
import "./Navbar-media.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InventoryIcon from "@mui/icons-material/Inventory";
import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";
import context from "../../ContextSite";

export default function Navbar() {
  let navContext = useContext(context);
  const [sidebarFlag, setSidebarFlag] = useState(false);

  const scrollUpSite = () => {
    window.scrollTo(0, 0);
  };

  const searchBtnHandle = () => {
    window.location.pathname = `/showProduct/:${navContext.searchValue}`;
  };

  return (
    <>
      <div className="navbar">
        <div className="logo"></div>
        <div className="searchBar">
          <SearchIcon
            onClick={() => searchBtnHandle()}
            style={{ fontSize: 36 }}
            className="searchIcon"
          />
          <input
            value={navContext.searchValue}
            onChange={(e) => navContext.setSearchValue(e.target.value)}
            type="text"
            placeholder="کالا مورد نظرتان را جستجو کنید"
            list="dataList"
          />
          <datalist id="dataList">
            {navContext.imagesHomeWelcome
              ? navContext.imagesHomeWelcome.map((item, index) => (
                  <option key={index}>{item.name}</option>
                ))
              : null}
          </datalist>
        </div>

        <ul>
          {navContext.flagLog ? (
            <NavLink
              to="/profile"
              className={(link) =>
                link.isActive
                  ? "link navRoutes navRouteActive"
                  : "link navRoutes"
              }
              onClick={() => scrollUpSite()}
            >
              پروفایل
            </NavLink>
          ) : (
            <NavLink
              className="link navRoutes"
              onClick={() => {
                scrollUpSite();
                navContext.setShowLogin(true);
              }}
            >
              ثبت نام
            </NavLink>
          )}

          <NavLink
            className={(link) =>
              link.isActive ? "link navRoutes navRouteActive" : "link navRoutes"
            }
            to="/about"
            onClick={() => scrollUpSite()}
          >
            درباره ما
          </NavLink>

          <NavLink
            className={(link) =>
              link.isActive ? "link navRoutes navRouteActive" : "link navRoutes"
            }
            to="/contactUs"
            onClick={() => scrollUpSite()}
          >
            تماس با ما
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link navRoutes navRouteActive" : "link navRoutes"
            }
            to="/favorites"
            onClick={() => scrollUpSite()}
          >
            علاقه مندی ها
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link navRoutes navRouteActive" : "link navRoutes"
            }
            to="/basket"
            onClick={() => scrollUpSite()}
          >
            سبد خرید
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link navRoutes navRouteActive" : "link navRoutes"
            }
            to="/product"
            onClick={() => scrollUpSite()}
          >
            محصولات
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link navRoutes navRouteActive" : "link navRoutes"
            }
            to="/"
            onClick={() => scrollUpSite()}
          >
            خانه
          </NavLink>
        </ul>
        <div onClick={() => setSidebarFlag((p) => !p)} className="hamBar">
          <MenuIcon style={{ fontSize: 36 }} />
        </div>
      </div>

      <div className={sidebarFlag ? "sideBar sideBarActive" : "sideBar"}>
        <ul className="sidebarNav">
          {navContext.flagLog ? (
            <NavLink
              to="/profile"
              className={(link) =>
                link.isActive ? "link sidebarRouteActive" : "link"
              }
              onClick={() => scrollUpSite()}
            >
              <li>
                پروفایل
                <AccountCircleIcon className="aaa" style={{ fontSize: 30 }} />
              </li>
            </NavLink>
          ) : (
            <NavLink
              className="link sidebarRouteActive"
              onClick={() => navContext.setShowLogin(true)}
            >
              <li>
                ثبت نام
                <LoginIcon className="aaa" style={{ fontSize: 30 }} />
              </li>
            </NavLink>
          )}

          <NavLink
            className={(link) =>
              link.isActive ? "link sidebarRouteActive" : "link"
            }
            to="/about"
            onClick={() => scrollUpSite()}
          >
            <li>
              درباره ما
              <InfoOutlinedIcon className="aaa" style={{ fontSize: 30 }} />
            </li>
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link sidebarRouteActive" : "link"
            }
            to="/contactUs"
            onClick={() => scrollUpSite()}
          >
            <li>
              تماس با ما
              <CallIcon className="aaa" style={{ fontSize: 30 }} />
            </li>
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link sidebarRouteActive" : "link"
            }
            to="/favorites"
            onClick={() => scrollUpSite()}
          >
            <li>
              علاقه مندی ها{" "}
              <FavoriteBorderIcon className="aaa" style={{ fontSize: 30 }} />
            </li>
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link sidebarRouteActive" : "link"
            }
            to="/basket"
            onClick={() => scrollUpSite()}
          >
            <li>
              سبد خرید
              <LocalMallIcon className="aaa" style={{ fontSize: 30 }} />
            </li>
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link sidebarRouteActive" : "link"
            }
            to="/product"
            onClick={() => scrollUpSite()}
          >
            <li>
              محصولات
              <InventoryIcon className="aaa" style={{ fontSize: 30 }} />
            </li>
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link sidebarRouteActive" : "link"
            }
            to="/"
            onClick={() => scrollUpSite()}
          >
            <li>
              خانه
              <HomeIcon className="aaa" style={{ fontSize: 30 }} />
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}
