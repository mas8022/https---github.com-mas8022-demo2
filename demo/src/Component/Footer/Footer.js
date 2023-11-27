import React from "react";
import "./Footer.css";
import './Footer-media.css'
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <div data-aos="fade-up" className="footer">
      <div className="footerContainer">
        <div className="topFooterContainer">
          <div className="socialMedia">
            <SupportAgentIcon
              className="footerHeadPhoneIcon"
              style={{ fontSize: 200 }}
            />
            <div className="socialMediaDiv">
              <TelegramIcon
                className="saa socialIconsFooter qw"
                style={{ fontSize: 36 }}
              />
              <InstagramIcon
                className="saa socialIconsFooter qe"
                style={{ fontSize: 36 }}
              />
              <YouTubeIcon
                className="saa socialIconsFooter gf"
                style={{ fontSize: 36 }}
              />
              <TwitterIcon
                className="saa socialIconsFooter de"
                style={{ fontSize: 36 }}
              />
              <FacebookIcon
                className="saa socialIconsFooter kj"
                style={{ fontSize: 36 }}
              />
            </div>
          </div>
          <ul className="ulsFooter thf">
            <li className="titleUlsFooter">
              خدمات مشتریان
              <ul>
                <hr />
                <li className="ggg">پاسخ به پرسش‌های متداول</li>
                <li className="ggg">رویه‌های بازگرداندن کالا</li>
                <li className="ggg">شرایط استفاده</li>
                <li className="ggg">حریم خصوصی</li>
                <li className="ggg">گزارش باگ</li>
                <li className="ggg">رویه ارسال سفارش</li>
              </ul>
            </li>
            <li className="titleUlsFooter">
              اوریجن
              <ul>
                <hr />
                <li className="ggg">درباره ما</li>
                <li className="ggg">تماس با ما</li>
                <li className="ggg">چرا اوریجن</li>
                <li className="ggg">وبلاگ</li>
                <li className="ggg">راهنمای خرید</li>
                <li className="ggg"> مجله اوریجن</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="bottomFooterContainer">
          <div className="inputFooterDiv">
            <div className="shareBtnFooter">اشتراک</div>
            <input type="text" placeholder="نظر خود را بنویسید" />
          </div>
          <h4>از تخفیف‌ها و جدیدترین‌های اوریجن باخبر شوید</h4>
        </div>
      </div>
      <div className="NS">Mohammadreza22</div>
    </div>
  );
}
