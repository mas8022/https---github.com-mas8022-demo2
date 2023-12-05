import React, { useContext, useEffect, useState } from "react";
import "./Modals.css";
import "./Modal-media.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import context from "../../ContextSite";
import Loader from "../Loader/Loader";
import Resizer from "react-image-file-resizer";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function SiteModals() {
  let contextInfo = useContext(context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [phonNumberRegexFlag, setPhonNumberRegexFlag] = useState(false);
  const [emailRegexFlag, setEmailRegexFlag] = useState(false);
  const [passwordRegexFlag, setPasswordRegexFlag] = useState(false);
  const [colorClickFromFlag, setColorClickFromFlag] = useState(false);
  const [passEdit, setPassEdit] = useState(false);
  const [findPassHelp, setFindPassHelp] = useState("");
  const [editLoader, setEditLoader] = useState(false);
  const [findUser, setFindUser] = useState([]);

  useEffect(() => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      !phonNumberRegexFlag &&
      !emailRegexFlag &&
      !passwordRegexFlag
    ) {
      setColorClickFromFlag(true);
    } else {
      setColorClickFromFlag(false);
    }
  }, [firstName, lastName, email]);

  useEffect(() => {
    if (findPassHelp === contextInfo.user.password) {
      setEditLoader(true);

      setFirstName(contextInfo.user.firstName);
      setLastName(contextInfo.user.lastName);
      setEmail(contextInfo.user.email);

      setPassEdit(true);
      if (contextInfo.users.length !== 0) {
        setEditLoader(false);
        let ssd = contextInfo.users.find((user) => {
          return user.password === findPassHelp;
        });
        setFindUser(ssd.id);
      }
    }
  }, [findPassHelp]);

  useEffect(() => {
    setEditLoader(false);
    if (contextInfo.users) {
      setFindUser(
        contextInfo.users.find((user) => user.password === findPassHelp)
      );
    }
  }, [contextInfo.users]);

  const emailRegexHandle = (e) => {
    if (emailRegex.test(e.target.value)) {
      setEmail(e.target.value);
      setEmailRegexFlag(false);
    } else {
      setEmail(e.target.value);
      setEmailRegexFlag(true);
    }
    if (!e.target.value) {
      setEmailRegexFlag(false);
    }
  };

  const closeLoginModalHandler = () => {
    contextInfo.setCloseLoginModal((perv) => !perv);
    setFirstName("");
    setLastName("");
    setEmail("");
    setEditLoader(false);
  };

  const clickLoginModalHandler = () => {
    if (firstName && lastName && email) {
      setEditLoader(true);
      let newUserEdit = {
        sex: contextInfo.user.sex,
        firstName,
        lastName,
        email,
        password: contextInfo.user.password,
        phone: contextInfo.user.phone,
        image,
      };

      contextInfo.setUser(newUserEdit);

      fetch(`http://localhost:4000/api/users/${findUser}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          image,
        }),
      }).then((res) => {
        console.log(res);
        res.status < 400 && closeLoginModalHandler();
      });
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

  return (
    <>
      <Loader loader={editLoader} />
      <div
        className={
          contextInfo.closeLoginModal ? "momLoginModal active" : "momLoginModal"
        }
      >
        <div className="loginModal">
          <form className="loginForm" action="#">
            {passEdit ? (
              <>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="userNameLoginForm"
                  type="text"
                  placeholder="نام"
                />
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  className="userNameLoginForm"
                  type="text"
                  placeholder="نام خانوادگی"
                />
                <input
                  onChange={(e) => emailRegexHandle(e)}
                  value={email}
                  className="emailLoginForm"
                  type="text"
                  placeholder="ایمیل"
                />
                <p
                  className={
                    emailRegexFlag
                      ? "formAlerts formAlertsActive"
                      : "formAlerts"
                  }
                >
                  please write correct email
                </p>

                <input
                  onChange={handleImageUpload}
                  className="passwordLoginForm"
                  type="file"
                  placeholder="set image"
                />
                <div className="btnsLoginModal">
                  <div
                    onClick={() => {
                      clickLoginModalHandler();
                    }}
                    className={
                      colorClickFromFlag
                        ? "loginBtnModal LoginBtnModal colorClickFromActive"
                        : "loginBtnModal LoginBtnModal colorClickFromDeActive"
                    }
                  >
                    ویرایش
                  </div>

                  <div
                    onClick={() => {
                      closeLoginModalHandler();
                      setPhonNumberRegexFlag("");
                      setEmailRegexFlag("");
                      setPasswordRegexFlag("");
                    }}
                    className="loginBtnModal CloseBtnModal"
                  >
                    بستن
                  </div>
                </div>
              </>
            ) : (
              <>
                <HighlightOffIcon
                  onClick={() => {
                    contextInfo.setCloseLoginModal(false);
                    setFindPassHelp("");
                    setFirstName("");
                    setLastName("");
                    setEmail("");

                    setImage("");
                  }}
                  className="fdwqewe"
                  style={{ fontSize: 50 }}
                />
                <p className="helpEditText">
                  اول رمز عبور قبلی تان را وارد نمایید
                </p>

                <input
                  value={findPassHelp}
                  onChange={(e) => setFindPassHelp(e.target.value)}
                  className="passwordLoginForm"
                  type="password"
                  placeholder="رمز عبور"
                />
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
