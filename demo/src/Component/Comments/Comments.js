import React from "react";
import "./Comments.css";
import './Comments-media.css'
import Slider from "react-slick";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

export default function Comments() {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 408,
        settings: {
          slidesToShow: 1,
          centerPadding: "-15px",
        },
      },
    ],
  };

  return (
    <div className="comments">
      <Slider {...sliderSettings}>
        <div className="comment">
          <div
            className="commenterImage"
            style={{
              background: `url(${"https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"})`,
            }}
          ></div>
          <p className="commenterName">فاطمه عباس زاده</p>

          <p className="commenterComment">
            با توجه به اهمیت افزایش بازدید از وب سایت و همچنین افزایش میزان سود
            خود از طریق سایت ایجاد مطالب مفید و مرتب توجه بیشتری را به خود جلب
            می کند.قرار دادن مقالات پشت سر هم نیازمند دریافت بازخورد می باشد که
            در این مقاله از طراحی سایت می خواهیم شما را با هفت روش دریافت نظر و
            کامنت در پست های وب سایت آشنا کنیم.
          </p>
          <div className="commentReActionsBtn">
            <div className="like">
              <ThumbUpOutlinedIcon className="fdgu" style={{ fontSize: 20 }} />
            </div>
            <div className="dislike">
              <ThumbDownOutlinedIcon
                className="tgdfr"
                style={{ fontSize: 20 }}
              />
            </div>
          </div>
        </div>
        <div className="comment">
          <div
            className="commenterImage"
            style={{
              background: `url(${"https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"})`,
            }}
          ></div>
          <p className="commenterName">فاطمه عباس زاده</p>

          <p className="commenterComment">
            با توجه به اهمیت افزایش بازدید از وب سایت و همچنین افزایش میزان سود
            خود از طریق سایت ایجاد مطالب مفید و مرتب توجه بیشتری را به خود جلب
            می کند.قرار دادن مقالات پشت سر هم نیازمند دریافت بازخورد می باشد که
            در این مقاله از طراحی سایت می خواهیم شما را با هفت روش دریافت نظر و
            کامنت در پست های وب سایت آشنا کنیم.
          </p>
          <div className="commentReActionsBtn">
            <div className="like">
              <ThumbUpOutlinedIcon className="fdgu" style={{ fontSize: 20 }} />
            </div>
            <div className="dislike">
              <ThumbDownOutlinedIcon
                className="tgdfr"
                style={{ fontSize: 20 }}
              />
            </div>
          </div>
        </div>
        <div className="comment">
          <div
            className="commenterImage"
            style={{
              background: `url(${"https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"})`,
            }}
          ></div>
          <p className="commenterName">فاطمه عباس زاده</p>

          <p className="commenterComment">
            با توجه به اهمیت افزایش بازدید از وب سایت و همچنین افزایش میزان سود
            خود از طریق سایت ایجاد مطالب مفید و مرتب توجه بیشتری را به خود جلب
            می کند.قرار دادن مقالات پشت سر هم نیازمند دریافت بازخورد می باشد که
            در این مقاله از طراحی سایت می خواهیم شما را با هفت روش دریافت نظر و
            کامنت در پست های وب سایت آشنا کنیم.
          </p>
          <div className="commentReActionsBtn">
            <div className="like">
              <ThumbUpOutlinedIcon className="fdgu" style={{ fontSize: 20 }} />
            </div>
            <div className="dislike">
              <ThumbDownOutlinedIcon
                className="tgdfr"
                style={{ fontSize: 20 }}
              />
            </div>
          </div>
        </div>
        <div className="comment">
          <div
            className="commenterImage"
            style={{
              background: `url(${"https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"})`,
            }}
          ></div>
          <p className="commenterName">فاطمه عباس زاده</p>

          <p className="commenterComment">
            با توجه به اهمیت افزایش بازدید از وب سایت و همچنین افزایش میزان سود
            خود از طریق سایت ایجاد مطالب مفید و مرتب توجه بیشتری را به خود جلب
            می کند.قرار دادن مقالات پشت سر هم نیازمند دریافت بازخورد می باشد که
            در این مقاله از طراحی سایت می خواهیم شما را با هفت روش دریافت نظر و
            کامنت در پست های وب سایت آشنا کنیم.
          </p>
          <div className="commentReActionsBtn">
            <div className="like">
              <ThumbUpOutlinedIcon className="fdgu" style={{ fontSize: 20 }} />
            </div>
            <div className="dislike">
              <ThumbDownOutlinedIcon
                className="tgdfr"
                style={{ fontSize: 20 }}
              />
            </div>
          </div>
        </div>
        <div className="comment">
          <div
            className="commenterImage"
            style={{
              background: `url(${"https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"})`,
            }}
          ></div>
          <p className="commenterName">فاطمه عباس زاده</p>

          <p className="commenterComment">
            با توجه به اهمیت افزایش بازدید از وب سایت و همچنین افزایش میزان سود
            خود از طریق سایت ایجاد مطالب مفید و مرتب توجه بیشتری را به خود جلب
            می کند.قرار دادن مقالات پشت سر هم نیازمند دریافت بازخورد می باشد که
            در این مقاله از طراحی سایت می خواهیم شما را با هفت روش دریافت نظر و
            کامنت در پست های وب سایت آشنا کنیم.
          </p>
          <div className="commentReActionsBtn">
            <div className="like">
              <ThumbUpOutlinedIcon className="fdgu" style={{ fontSize: 20 }} />
            </div>
            <div className="dislike">
              <ThumbDownOutlinedIcon
                className="tgdfr"
                style={{ fontSize: 20 }}
              />
            </div>
          </div>
        </div>
        <div className="comment">
          <div
            className="commenterImage"
            style={{
              background: `url(${"https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"})`,
            }}
          ></div>
          <p className="commenterName">فاطمه عباس زاده</p>

          <p className="commenterComment">
            با توجه به اهمیت افزایش بازدید از وب سایت و همچنین افزایش میزان سود
            خود از طریق سایت ایجاد مطالب مفید و مرتب توجه بیشتری را به خود جلب
            می کند.قرار دادن مقالات پشت سر هم نیازمند دریافت بازخورد می باشد که
            در این مقاله از طراحی سایت می خواهیم شما را با هفت روش دریافت نظر و
            کامنت در پست های وب سایت آشنا کنیم.
          </p>
          <div className="commentReActionsBtn">
            <div className="like">
              <ThumbUpOutlinedIcon className="fdgu" style={{ fontSize: 20 }} />
            </div>
            <div className="dislike">
              <ThumbDownOutlinedIcon
                className="tgdfr"
                style={{ fontSize: 20 }}
              />
            </div>
          </div>
        </div>
        <div className="comment">
          <div
            className="commenterImage"
            style={{
              background: `url(${"https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"})`,
            }}
          ></div>
          <p className="commenterName">فاطمه عباس زاده</p>

          <p className="commenterComment">
            با توجه به اهمیت افزایش بازدید از وب سایت و همچنین افزایش میزان سود
            خود از طریق سایت ایجاد مطالب مفید و مرتب توجه بیشتری را به خود جلب
            می کند.قرار دادن مقالات پشت سر هم نیازمند دریافت بازخورد می باشد که
            در این مقاله از طراحی سایت می خواهیم شما را با هفت روش دریافت نظر و
            کامنت در پست های وب سایت آشنا کنیم.
          </p>
          <div className="commentReActionsBtn">
            <div className="like">
              <ThumbUpOutlinedIcon className="fdgu" style={{ fontSize: 20 }} />
            </div>
            <div className="dislike">
              <ThumbDownOutlinedIcon
                className="tgdfr"
                style={{ fontSize: 20 }}
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
