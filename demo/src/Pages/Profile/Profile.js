import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import "./Profile-media.css";
import EditIcon from "@mui/icons-material/Edit";
import context from "../../ContextSite";

export default function Profile() {
  const profContext = useContext(context);

  return (
    <>
      <div
        className="profilePage"
        style={{
          background: `url(${"images/wp3982966.jpg"})`,
        }}
      >
        <div className="leftProfilePage">
          <div className="UserInfo">
            <label htmlFor="#username">نام کاربری:</label>
            <label className="frfr" id="username">
              {profContext.user.userFirstName} {profContext.user.userLastName}
            </label>
            <label htmlFor="#phoneNumber">شماره موبایل:</label>
            <label className="frfr" id="phoneNumber">
              {profContext.user.userPhoneNumber}
            </label>
            <label htmlFor="#email">ایمیل:</label>
            <label className="frfr" id="email">
              {profContext.user.userEmail}
            </label>
            <label htmlFor="#password">رمز عبور:</label>
            <label className="frfr" id="password">
              {profContext.user.userPassword}
            </label>
          </div>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/favorites"
            className="link"
          >
            <div className="moreBtnProfilePage">غذا های مورد علاقه</div>
          </Link>
        </div>

        <div className="rightProfilePage">
          <img
            className="ProfilePageimage"
            src={
              !profContext.user.userimage
                ? "https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=360"
                : profContext.user.userimage
            }
            alt="profileimage"
          />
          <p>
            مَرد، یک انسان بالغ نر است. عموماً پسری را که دوران بلوغ و نوجوانی
            خود را تمام کرده‌است و به سنی که در اکثر فرهنگ‌ها و جوامع، معمولاً
            ۱۸ سالگی می‌باشد، برسد را مرد گویند اما این تعریف می‌تواند در هر
            فرهنگ، جامعه، تمدن یا قانون، متفاوت باشد. به‌طور معمول، یک مرد
            توانایی باروری دارد. به مرد دارای فرزند، پدر گویند. در فارسی، واژه
            «آقا» برای اشاره محترمانه به مرد، کاربرد دارد.
          </p>

          <div
            onClick={() => profContext.setCloseLoginModal(true)}
            className="editModalBtn"
          >
            <EditIcon style={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
    </>
  );
}
