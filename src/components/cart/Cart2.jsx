import React from "react";
import "./Cart.css";

function Cart2() {
  return (
    <div className="cart">
      <div className="container-cart2">
        <div className="black-bg-div">
          <img
            className="person-img"
            src="./img/photo_2022-12-21 11.45.27.jpeg"
          />
          <div className="texts">
            <h1 className="cart2-h1">AZIZBEK JURAEV</h1>
            <p className="p-yellow">Frontend Developer</p>
            <p className="cart2-h1">azizbekjuraev.website</p>
          </div>
          <div className="btns">
            <img src="./img/Button-1.png" alt="" />
            <img src="./img/Button.png" alt="" />
          </div>
        </div>
      </div>

      <div className="about-container-cart2">
        <h1>About</h1>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>

      <div className="about-container-cart2">
        <h1>Interest</h1>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>

      <div className="footer-container-cart-2">
        <img src="./img/Twitter Icon.png" alt="" />
        <img src="./img/Facebook Icon.png" alt="" />
        <img src="./img/Instagram Icon.png" alt="" />
        <img src="./img/Linkedin Icon.png" alt="" />
      </div>
    </div>
  );
}
export default Cart2;
