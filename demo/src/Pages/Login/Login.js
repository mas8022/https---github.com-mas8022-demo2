import React, { useState, useContext, useEffect } from "react";
import "./Login.css";
import "./Login-media.css";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import context from "../../ContextSite";
import Loader from "../../Component/Loader/Loader";
import Resizer from "react-image-file-resizer";

/////////////////////////////////////
////// admin pass:
const adminPass = "1234";
/////////////////////////////////////

export default function Login() {
  const logContext = useContext(context);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [sex, setSex] = useState("man");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [emailAlert, setEmailAlert] = useState(false);
  const [phoneAlert, setPhoneAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [loaderProf, setLoaderProf] = useState(false);

  const resetFormLoginHandle = () => {
    setEmailAlert(false);
    setPhoneAlert(false);
    setPasswordAlert(false);
    setSex("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setImage("");
  };

  const emailRegexHandle = (e) => {
    if (emailRegex.test(e.target.value)) {
      setEmail(e.target.value);
      setEmailAlert(false);
    } else {
      setEmail(e.target.value);
      setEmailAlert(true);
    }
    if (!e.target.value) {
      setEmailAlert(false);
    }
  };

  const phonNumberRegexHandle = (e) => {
    if (!isNaN(e.target.value)) {
      setPhone(e.target.value);
      setPhoneAlert(false);
    } else {
      setPhoneAlert(true);
      setPhone(e.target.value);
    }
  };

  const passwordRegexHandle = (e) => {
    if (e.target.value.length > 4) {
      setPassword(e.target.value);
      setPasswordAlert(false);
    } else {
      setPassword(e.target.value);
      setPasswordAlert(true);
    }
    if (!e.target.value) {
      setPasswordAlert(false);
    }
  };

  const loggingHandle = () => {
    let newUser = {
      sex,
      firstName,
      lastName,
      email,
      phone,
      password,
      image,
    };
    if (
      !emailAlert &&
      !phoneAlert &&
      !passwordAlert &&
      sex &&
      firstName &&
      lastName &&
      email &&
      phone &&
      password &&
      image
    ) {
      setLoaderProf(true);

      fetch("http://localhost:4000/api/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sex,
          firstName,
          lastName,
          email,
          password,
          phone,
          image,
        }),
      })
        .then((res) => {
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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    Resizer.imageFileResizer(
      file,
      300, // New width
      300, // New height
      "JPEG", // Format
      99, // Quality
      0, // Rotation
      (uri) => {
        setImage(uri); // Set state with resized image data URL
      },
      "base64" // Output type
    );
  };

  useEffect(() => {
    if (password === adminPass) {
      window.location.pathname = "/cmsProduct";
      logContext.setShowLogin(false);
    }
  }, [password]);

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
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="man">اقا</option>
            <option value="woman">خانم</option>
          </select>

          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="first name"
            placeholder="نام"
          />

          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="last name"
            placeholder="نام خانوادگی"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => emailRegexHandle(e)}
            placeholder="ایمیل"
          />
          {emailAlert ? (
            <p className="alert">لطفا ایمیل خود را صحیح وارد نمایید</p>
          ) : null}

          <input
            value={phone}
            onChange={(e) => phonNumberRegexHandle(e)}
            type="text"
            id="phone nember"
            placeholder="تلفن همراه"
          />
          {phoneAlert ? (
            <p className="alert">لطفا شماره تلفن صحیح وارد نمایید</p>
          ) : null}

          <input
            value={password}
            onChange={(e) => passwordRegexHandle(e)}
            type="password"
            placeholder="رمز عبور"
          />

          {passwordAlert ? (
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
    </>
  );
}
