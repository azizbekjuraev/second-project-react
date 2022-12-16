import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import Cart from "./components/cart/Cart";
import Cart2 from "./components/cart/Cart2";

function App() {
  return (
    <div className="main">
      <Cart />
      <Cart />
      <Cart2 />
      <Cart2 />
    </div>
  );
}

export default App;
