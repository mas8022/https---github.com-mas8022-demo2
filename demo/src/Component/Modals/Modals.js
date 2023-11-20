import React, { useContext, useEffect, useState } from "react";
import "./Modals.css";
import "./Modal-media.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import context from "../../ContextSite";
import Loader from "../Loader/Loader";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function SiteModals() {
  let contextInfo = useContext(context);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userImage, setUserImage] = useState(undefined);
  const [phonNumberRegexFlag, setPhonNumberRegexFlag] = useState(false);
  const [emailRegexFlag, setEmailRegexFlag] = useState(false);
  const [passwordRegexFlag, setPasswordRegexFlag] = useState(false);
  const [colorClickFromFlag, setColorClickFromFlag] = useState(false);
  const [passEdit, setPassEdit] = useState(false);
  const [findPassHelp, setFindPassHelp] = useState("");
  const [editLoader, setEditLoader] = useState(false);
  const [findUser, setFindUser] = useState([]);
  const [findUserId, setFindUserId] = useState("");

  useEffect(() => {
    if (
      userFirstName !== "" &&
      userLastName !== "" &&
      userEmail !== "" &&
      userPhoneNumber !== "" &&
      userPassword !== "" &&
      !phonNumberRegexFlag &&
      !emailRegexFlag &&
      !passwordRegexFlag
    ) {
      setColorClickFromFlag(true);
    } else {
      setColorClickFromFlag(false);
    }
  }, [userFirstName, userLastName, userEmail, userPhoneNumber, userPassword]);

  useEffect(() => {
    if (findPassHelp === contextInfo.user.userPassword) {
      setEditLoader(true);

      setUserFirstName(contextInfo.user.userFirstName);
      setUserLastName(contextInfo.user.userLastName);
      setUserEmail(contextInfo.user.userEmail);
      setUserPhoneNumber(contextInfo.user.userPhoneNumber);
      setUserPassword(contextInfo.user.userPassword);

      setPassEdit(true);
      if (contextInfo.allUserTr.length !== 0) {
        setEditLoader(false);
        let ssd = contextInfo.allUserTr.find((user) => {
          return user.userPassword === findPassHelp;
        });
        setFindUser(ssd);
      }
    }
  }, [findPassHelp]);

  useEffect(() => {
    if (
      contextInfo.allUserTr.length !== 0 &&
      contextInfo.allUserTr !== undefined
    ) {
      setEditLoader(false);
      let ssd = contextInfo.allUserTr.find((user) => {
        return user.userPassword === findPassHelp;
      });
      setFindUser(ssd);
    }
  }, [contextInfo.allUserTr]);



  useEffect(() => {
    if (findUser !== undefined) {
      setFindUserId(contextInfo.allUser.find((user) => user[1] === findUser));
    }
  }, [findUser]);

  const emailRegexHandle = (e) => {
    if (emailRegex.test(e.target.value)) {
      setUserEmail(e.target.value);
      setEmailRegexFlag(false);
    } else {
      setUserEmail(e.target.value);
      setEmailRegexFlag(true);
    }
    if (!e.target.value) {
      setEmailRegexFlag(false);
    }
  };

  const phonNumberRegexHandle = (e) => {
    if (!isNaN(e.target.value)) {
      setUserPhoneNumber(e.target.value);
      setPhonNumberRegexFlag(false);
    } else {
      setPhonNumberRegexFlag(true);
      setUserPhoneNumber(e.target.value);
    }
  };

  const passwordRegexHandle = (e) => {
    if (e.target.value.length > 4) {
      setUserPassword(e.target.value);
      setPasswordRegexFlag(false);
    } else {
      setUserPassword(e.target.value);
      setPasswordRegexFlag(true);
    }
    if (!e.target.value) {
      setPasswordRegexFlag(false);
    }
  };

  const closeLoginModalHandler = () => {
    contextInfo.setCloseLoginModal((perv) => !perv);
    setUserFirstName("");
    setUserLastName("");
    setUserEmail("");
    setUserPhoneNumber("");
    setUserPassword("");
    setEditLoader(false);
  };

  const clickLoginModalHandler = () => {
    if (
      userFirstName &&
      userLastName &&
      userEmail &&
      userPhoneNumber &&
      userPassword
    ) {
      setEditLoader(true);
      let newUserEdit = {
        userFirstName,
        userLastName,
        userEmail,
        userPhoneNumber,
        userPassword,
        userImage,
      };

      contextInfo.setUser(newUserEdit);

      fetch(
        `https://foodstore22-9bea4-default-rtdb.firebaseio.com/users/${findUserId[0]}.json`,
        {
          method: "PUT",
          body: JSON.stringify(newUserEdit),
        }
      ).then((res) => {
        res.status < 400 && closeLoginModalHandler();
        window.location.reload();
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
                  onChange={(e) => setUserFirstName(e.target.value)}
                  value={userFirstName}
                  className="userNameLoginForm"
                  type="text"
                  placeholder="نام"
                />
                <input
                  onChange={(e) => setUserLastName(e.target.value)}
                  value={userLastName}
                  className="userNameLoginForm"
                  type="text"
                  placeholder="نام خانوادگی"
                />
                <input
                  onChange={(e) => phonNumberRegexHandle(e)}
                  value={userPhoneNumber}
                  className="PhoneNumberLoginForm"
                  type="text"
                  placeholder="تلفن همراه"
                />
                <p
                  className={
                    phonNumberRegexFlag
                      ? "formAlerts formAlertsActive"
                      : "formAlerts"
                  }
                >
                  please write correct phone number
                </p>
                <input
                  onChange={(e) => emailRegexHandle(e)}
                  value={userEmail}
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
                  onChange={(e) => passwordRegexHandle(e)}
                  value={userPassword}
                  className="passwordLoginForm"
                  type="password"
                  placeholder="رمز عبور"
                />
                <p
                  className={
                    passwordRegexFlag
                      ? "formAlerts formAlertsActive"
                      : "formAlerts"
                  }
                >
                  write corrector between 5 and 8
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
                    setUserFirstName("");
                    setUserLastName("");
                    setUserEmail("");
                    setUserPhoneNumber("");
                    setUserPassword("");
                    setUserImage("");
                  }}
                  className="fdwqewe"
                  style={{ fontSize: 50 }}
                />
                <p className="helpEditText">
                  اول رمز عبور قبلی تان را وارد نمایید
                </p>

                <input
                  onChange={(e) => setFindPassHelp(e.target.value)}
                  value={findPassHelp}
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
