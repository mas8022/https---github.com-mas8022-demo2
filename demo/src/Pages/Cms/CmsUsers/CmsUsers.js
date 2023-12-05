import React, { useState, useContext, useEffect } from "react";
import "./CmsUsers.css";
import CmsNavbar from "../../../Component/CmsNavbar/CmsNavbar";
import SearchIcon from "@mui/icons-material/Search";
import Loader from "../../../Component/Loader/Loader";
import Resizer from "react-image-file-resizer";
import context from "../../../ContextSite";

export default function CmsUsers() {
  let cmsUsersContext = useContext(context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const [selectUserId, setSelectUserId] = useState("");
  const [cmsUsersSearchBar, setCmsUsersSearchBar] = useState("");
  const [cmsUserList, setCmsUserList] = useState([]);

  useEffect(() => {
    if (cmsUsersContext.users.length > 0) {
      const listUsers = cmsUsersContext.users.filter((item) => {
        if (cmsUsersSearchBar) {
          return item.email
            .toLowerCase()
            .trim()
            .includes(cmsUsersSearchBar.toLowerCase().trim());
        }
      });
      setCmsUserList(listUsers);
    }
  }, [cmsUsersSearchBar]);

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

  const registerProduct = (e) => {
    e.preventDefault();
    setLoader(true);
    fetch("http://localhost:4000/api/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        image,
      }),
    })
      .then((res) => {
        if (res.ok) {
          clearInputs();
          setLoader(false);
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  const editProduct = (e) => {
    e.preventDefault();
    setLoader(true);
    fetch(`http://localhost:4000/api/users/${selectUserId}`, {
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
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          clearInputs();
          setLoader(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteProduct = (e) => {
    e.preventDefault();
    setLoader(true);
    fetch(`http://localhost:4000/api/users/${selectUserId}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          clearInputs();
          setLoader(false);
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  const DataTr = (user) => {
    setSelectUserId(user.id);
    setFirstName(user.firstname);
    setLastName(user.lastname);
    setEmail(user.email);
    setImage(user.image);
    setCmsUsersSearchBar("");
  };

  const clearInputs = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setImage("");
  };

  return (
    <div className="cmsProduct">
      <Loader loader={loader} />
      <CmsNavbar />
      <div className="cmsProductFlex">
        <form className="productRegisterForm frfre" action="#">
          <label htmlFor="firstName">نام</label>

          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            type="text"
            required
            autoFocus
            placeholder="نام:"
          />

          <br />
          <label htmlFor="lastName">نام خانوادگی</label>

          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="lastName"
            type="text"
            required
            autoFocus
            placeholder="نام خانوادگی:"
          />

          <br />
          <label htmlFor="email">ایمیل</label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="text"
            required
            autoFocus
            placeholder="ایمیل:"
          />

          <br />
          <label htmlFor="userImage">عکس کاربر</label>

          <input
            className="fileInputCmsProduct"
            onChange={handleImageUpload}
            id="userImage"
            type="file"
          />

          <br />
          <div className="cmsProductFormsBtn dsddfs">
            <input
              onClick={(e) => registerProduct(e)}
              className="productRegisterFormBtn"
              type="submit"
              value="ثبت کاربر"
            />

            <input
              onClick={(e) => editProduct(e)}
              className="productRegisterFormBtn grr"
              type="submit"
              value="ویرایش کاربر"
            />
            <input
              onClick={(e) => deleteProduct(e)}
              className="productRegisterFormBtn tgr"
              type="submit"
              value="حذف کاربر"
            />
          </div>
        </form>

        <div className="cmsProductFinding frfre">
          <div className="cmsProductFindingSearchBar">
            <SearchIcon className="gree" style={{ fontSize: 38 }} />
            <input
              value={cmsUsersSearchBar}
              onChange={(e) => setCmsUsersSearchBar(e.target.value)}
              className="rfrr"
              type="text"
              placeholder="ادرس ایمیل شخص مورد نظر را وارد نمایید"
            />
          </div>

          <div className="cmsProductFindingList">
            <div className="cmsProductFindingListItem fgf dffssf">
              <p>جنسیت</p>
              <p>نام و نام خانوادگی</p>
              <p>ایمیل</p>
              <p>رمز عبور</p>
              <p>شماره موبایل</p>
              <p className="rgg">عکس کاربر</p>
            </div>

            {cmsUserList.length > 0 ? (
              cmsUserList.map((user) => (
                <div
                  onClick={() => DataTr(user)}
                  key={user.id}
                  className="cmsProductFindingListItem erfer dffssf"
                >
                  <p>{user.sex}</p>
                  <p>
                    {user.firstname} {user.lastname}
                  </p>
                  <p className="dsd">{user.email}</p>
                  <p>{user.password}</p>
                  <p>{user.phonenumber}</p>
                  <img src={user.image} alt="cmsFoodimage" className="rgg" />
                </div>
              ))
            ) : (
              <div className="isExistCmsProductBox">موردی یافت نشده است</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
