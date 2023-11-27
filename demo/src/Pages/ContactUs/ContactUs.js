import React from "react";
import "./ContactUs.css";
import "./ContactUs-media.css";
import Title from "../../Component/Title/Title";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

export default function ContactUs() {
  return (
    <div className="contactUs">
      <Title title={"تماس با ما"} />
      <div className="addressDiv">
        <div data-aos='fade-right' data-aos-delay='100' className="addressDivSon locationContactUs">
          <MapsHomeWorkIcon style={{ fontSize: 80 }} />
          <p>تهران , تجریش , خیابان نیلوفر</p>
        </div>

        <div data-aos='fade-right' data-aos-delay='200' className="addressDivSon phoneNumberContactUs">
          <PhoneEnabledIcon style={{ fontSize: 80 }} />
          <p>
            موبایل : 09123456789
            <br />
            تلفن :0213456789{" "}
          </p>
        </div>

        <div data-aos='fade-right' data-aos-delay='300' className="addressDivSon emailContactUs">
          <ForwardToInboxIcon style={{ fontSize: 80 }} />
          <p>
            info@gmail.com
            <br />
            support@gmail.com
          </p>
        </div>
      </div>
      <Title title={"یک پیام برای ما بگذارید"} />
      <div className="dee sdd"></div>
      <form  data-aos='fade-up' action="#">
        <input
          type="text"
          id="massagerName"
          placeholder=" نام و نام خانوادگی"
        />

        <input type="text" id="massagerEmail" placeholder="ایمیل" />

        <input type="text" id="massagerTitle" placeholder="عنوان" />

        <textarea type="text" id="massagerText" placeholder="متن پیام" />

        <div className="formBtns">
          <div className="sw redza">
            <ForwardToInboxIcon className="rerdza" style={{ fontSize: 35 }} />
          </div>
          <div className="sw redweza">
            <ClearOutlinedIcon className="rerdza" style={{ fontSize: 35 }} />
          </div>
        </div>
      </form>
    </div>
  );
}
