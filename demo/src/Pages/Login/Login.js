import React, { useState, useContext, useEffect } from "react";
import "./Login.css";
import "./Login-media.css";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import context from "../../ContextSite";
import Loader from "../../Component/Loader/Loader";

/////////////////////////////////////
////// admin pass = 1234 ////////////
/////////////////////////////////////

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
  const [loaderProf, setLoaderProf] = useState(false);

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
    if (e.target.value.length > 4) {
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
      setLoaderProf(true);
      fetch("https://parseapi.back4app.com/classes/users", {
        method: "POST",
        headers: {
          "X-Parse-Application-Id": "SJPABe5OJHZ106zwv8Sfc79oJZz7oUR8bndbVFiC",
          "X-Parse-REST-API-Key": "2IxFijYb4hbFqjRhrrQs3enMpax87qgSUKixgOSY",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "A string",
          email: "A string",
          userSex,
          userEmail,
          userFirstName,
          userPhoneNumber,
          userLastName,
          userPassword,
          userImage,
          phoneNumber: "A string",
          old: "A string",
          sex: "A string",
          name: "A string",
        }),
      })
        .then((res) => {
          console.log(res);
          if (res.ok) {
            logContext.setFlagLog(true);
            logContext.setShowLogin(false);
            logContext.setUser(newUser);
            resetFormLoginHandle();
            setLoaderProf(false);
          } else {
            alert("لطفا به وی پی ان قوی تر متصل شوید");
          }
        })
        .catch((err) =>
          err !== undefined ? alert("لطفا به وی پی ان متصل شوید") : null
        );
    }
  };

  const handleimageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      setUserImage(imageDataUrl);
    };

    reader.readAsDataURL(file);
  };


  useEffect(() => {
    if (userPassword === "1234") {
      window.location.pathname = '/cmsProduct'
      logContext.setShowLogin(false)
    }
  },[userPassword])

  return (
    <>
      <Loader loader={loaderProf} />
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
            <option value="man">اقا</option>
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

          <input onChange={handleimageUpload} type="file" />
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
    </>
  );
}
