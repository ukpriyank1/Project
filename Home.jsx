import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import Homeproduct from "./homeproduct.js";

import "./Home.css";

const Home = ({ detail, view, close, setClose, addtocart }) => {
  const [homeproduct, setHomeProduct] = useState(Homeproduct);
  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div className="productbox">
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title} />
                  </div>
                  <div className="detail">
                    <h4>{curElm.Cat}</h4>
                    <h3>{curElm.Title}</h3>
                    <p>
                      AScreen Everyone will Love: Whether your family is
                      streaming or video chatting with friends tablet A8...
                    </p>
                    <h3>₹{curElm.Price}</h3>
                    <button>Add To Cart</button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
          </div>
        </div>
      ) : null}

      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Collection 2023</h2>

            <Link to="/product" className="link">
              shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img
              src="https://www.worldshop.eu/medias/img/8940144754718_w1260_734647504/samsung-galaxy-tab-s9-ultra-wi-fi-tablet-512gb-beige.webp"
              alt="sliderimg"
              width="500px"
            ></img>
          </div>
        </div>
      </div>

      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img
                src="https://img-prd-pim.poorvika.com/product/Apple-iphone-15-pro-blue-titanium-128gb-Front-Back-View.png"
                width="300px"
                alt="mobile.png"
              />
            </div>
            <div className="detail">
              <p>23 products</p>
            </div>
          </div>

          {/* ================> */}

          <div className="box">
            <div className="img_box">
              <img
                src="https://i.pinimg.com/originals/d9/db/11/d9db11953a2d185d37246bb1f500c957.png"
                width="250px"
                alt="headphone.png"
              />
            </div>
            <div className="detail">
              <p>52 products</p>
            </div>
          </div>
          {/* =======================> */}
          <div className="box">
            <div className="img_box">
              <img
                src="https://www.pngall.com/wp-content/uploads/11/CPU-PNG-Image-HD.png"
                width="260px"
                alt="cpu.png"
              />
            </div>
            <div className="detail">
              <p>63 products</p>
            </div>
          </div>

          {/* =======================> */}

          <div className="box">
            <div className="img_box">
              <img
                src="https://media.croma.com/image/upload/v1685023687/Croma%20Assets/Communication/Wearable%20Devices/Images/270670_0_diqife.png"
                width="280px"
                alt="smartwatch.png"
              />
            </div>
            <div className="detail">
              <p>18 products</p>
            </div>
          </div>
        </div>
      </div>
      {/* =============================> */}
      <div className="about">
        <div className="container">
          {/* =====================> */}
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>

          {/* ====================> */}
          <div className="box">
            <div className="icon">
              <BsCurrencyDollar />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Money Back Gureenty</p>
            </div>
          </div>

          {/* ===================> */}
          <div className="box">
            <div className="icon">
              <CiPercent />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On every Order</p>
            </div>
          </div>

          {/* =======================> */}
          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {homeproduct.map((curElm) => {
            return (
              <div className="box" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className="icon">
                    <li onClick={() => addtocart(curElm)}>
                      <AiOutlineShoppingCart />
                    </li>
                    <li onClick={() => view(curElm)}>
                      <BsEye />
                    </li>
                    <li>
                      <AiOutlineHeart />
                    </li>
                  </div>
                </div>
                <div className="detail">
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>₹{curElm.Price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple ipad 10.2 9th Gen - 2021</h3>
            <p>$ 986</p>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="./Assets/image3.webp" alt="sliderimg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
