import React, { useState, useContext } from "react";
import "./Login.css";
import "./Login-media.css";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import context from "../../ContextSite";

export default function Login() {
  const logContext = useContext(context);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [userSex, setUserSex] = useState("man");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userEmailAlert, setUserEmailAlert] = useState(false);
  const [userPhoneNumberAlert, setUserPhoneNumberAlert] = useState(false);
  const [userPasswordAlert, setUserPasswordAlert] = useState(false);

  const resetFormLoginHandle = () => {
    setUserEmailAlert(false);
    setUserPhoneNumberAlert(false);
    setUserPasswordAlert(false);
    setUserSex("");
    setUserFirstName("");
    setUserLastName("");
    setUserEmail("");
    setUserPhoneNumber("");
    setUserPassword("");
    setUserImage("");
  };

  const emailRegexHandle = (e) => {
    if (emailRegex.test(e.target.value)) {
      setUserEmail(e.target.value);
      setUserEmailAlert(false);
    } else {
      setUserEmail(e.target.value);
      setUserEmailAlert(true);
    }
    if (!e.target.value) {
      setUserEmailAlert(false);
    }
  };

  const phonNumberRegexHandle = (e) => {
    if (!isNaN(e.target.value)) {
      setUserPhoneNumber(e.target.value);
      setUserPhoneNumberAlert(false);
    } else {
      setUserPhoneNumberAlert(true);
      setUserPhoneNumber(e.target.value);
    }
  };

  const passwordRegexHandle = (e) => {
    if (e.target.value.length > 4 && e.target.value.length < 9) {
      setUserPassword(e.target.value);
      setUserPasswordAlert(false);
    } else {
      setUserPassword(e.target.value);
      setUserPasswordAlert(true);
    }
    if (!e.target.value) {
      setUserPasswordAlert(false);
    }
  };

  const loggingHandle = () => {
    let newUser = {
      userSex,
      userFirstName,
      userLastName,
      userEmail,
      userPhoneNumber,
      userPassword,
      userImage,
    };

    if (
      !userEmailAlert &&
      !userPhoneNumberAlert &&
      !userPasswordAlert &&
      userSex &&
      userFirstName &&
      userLastName &&
      userEmail &&
      userPhoneNumber &&
      userPassword &&
      userImage
    ) {
      fetch(
        "https://foodstore22-9bea4-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(newUser),
        }
      ).then((res) => {
        console.log(res);
        logContext.setUser(newUser);
        resetFormLoginHandle();
        window.location.pathname = "/profile";
        logContext.setShowLogin(false)
      });
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      setUserImage(imageDataUrl);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={logContext.showLogin ? "login loginActive" : "login"}>
      <form action="#">
        <LogoutIcon
          onClick={() => logContext.setShowLogin(false)}
          style={{ fontSize: 50 }}
          className="existLogBtn"
        />
        <h4>ثبت نام کنید</h4>

        <select
          className="sex-select"
          value={userSex}
          onChange={(e) => setUserSex(e.target.value)}
        >
          <option value="man">آقای</option>
          <option value="woman">خانم</option>
        </select>

        <input
          value={userFirstName}
          onChange={(e) => setUserFirstName(e.target.value)}
          type="text"
          id="first name"
          placeholder="نام"
        />

        <input
          value={userLastName}
          onChange={(e) => setUserLastName(e.target.value)}
          type="text"
          id="last name"
          placeholder="نام خانوادگی"
        />

        <input
          type="email"
          value={userEmail}
          onChange={(e) => emailRegexHandle(e)}
          placeholder="ایمیل"
        />
        {userEmailAlert ? (
          <p className="alert">لطفا ایمیل خود را صحیح وارد نمایید</p>
        ) : null}

        <input
          value={userPhoneNumber}
          onChange={(e) => phonNumberRegexHandle(e)}
          type="text"
          id="phone nember"
          placeholder="تلفن همراه"
        />
        {userPhoneNumberAlert ? (
          <p className="alert">لطفا شماره تلفن صحیح وارد نمایید</p>
        ) : null}

        <input
          value={userPassword}
          onChange={(e) => passwordRegexHandle(e)}
          type="password"
          placeholder="رمز عبور"
        />

        {userPasswordAlert ? (
          <p className="alert">رمز عبورتان بیش از 5 کاراکتر باشد</p>
        ) : null}

        <input onChange={handleImageUpload} type="file" />
        <div className="formBtns">
          <div onClick={() => loggingHandle()} className="sw redza deded">
            <LoginIcon className="rerdza ehyrt" style={{ fontSize: 35 }} />
          </div>
          <div onClick={() => resetFormLoginHandle()} className="sw redweza">
            <ClearOutlinedIcon className="rerdza" style={{ fontSize: 35 }} />
          </div>
        </div>
      </form>
    </div>
  );
}
