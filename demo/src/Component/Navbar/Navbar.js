import React, { useState } from "react";
import "./Navbar.css";
import "./Navbar-media.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [sidebarFlag, setSidebarFlag] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="logo"></div>
        <div className="searchBar">
          <SearchIcon style={{ fontSize: 36 }} className="searchIcon" />
          <input
            type="text"
            placeholder="کالا مورد نظرتان را جستجو کنید...؟"
            list="dataList"
          />
          <datalist id="dataList">
            <option>fast food</option>
            <option>hot food</option>
            <option>ice food</option>
            <option>cold food</option>
            <option>favorite food</option>
          </datalist>
        </div>

        <ul>
          <NavLink
            className={(link) =>
              link.isActive ? "link navRoutes navRouteActive" : "link navRoutes"
            }
            to="/profile"
          >
            پروفایل
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link navRoutes navRouteActive" : "link navRoutes"
            }
            to="/about"
          >
            درباره ما
          </NavLink>

          <NavLink
            className={(link) =>
              link.isActive ? "link navRoutes navRouteActive" : "link navRoutes"
            }
            to="/contactUs"
          >
            تماس با ما
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link navRoutes navRouteActive" : "link navRoutes"
            }
            to="/favorites"
          >
            علاقه مندی ها
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link navRoutes navRouteActive" : "link navRoutes"
            }
            to="/basket"
          >
            خرید
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link navRoutes navRouteActive" : "link navRoutes"
            }
            to="/"
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
          <NavLink
            className={(link) =>
              link.isActive ? "link sidebarRouteActive" : "link"
            }
            to="/profile"
          >
            <li>
              پروفایل
              <AccountCircleIcon className="aaa" style={{ fontSize: 30 }} />
            </li>
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link sidebarRouteActive" : "link"
            }
            to="/about"
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
          >
            <li>
              خرید
              <LocalMallIcon className="aaa" style={{ fontSize: 30 }} />
            </li>
          </NavLink>
          <NavLink
            className={(link) =>
              link.isActive ? "link sidebarRouteActive" : "link"
            }
            to="/"
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
