import React from "react";
import "./CmsNavbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
export default function CmsNavbar() {
  return (
    <div className="cmsNavbar">
      
      <Link className="link" to={'/'}><div className="logo dsfsd"></div></Link>
      <div className="cmsNavBarsBtn">
        <NavLink
          to={"/cmsProduct"}
          className={(link) =>
            link.isActive ? "cmsNavBarBtnActive link" : "link"
          }
        >
          محصولات
        </NavLink>
        <NavLink
          to={"/cmsUsers"}
          className={(link) =>
            link.isActive ? "cmsNavBarBtnActive link" : "link"
          }
        >
          کاربران
        </NavLink>
      </div>
    </div>
  );
}
