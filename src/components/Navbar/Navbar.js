import React from "react";
import { AiOutlineSearch, AiFillSetting } from "react-icons/ai";
import "./index.css";
const Navbar = () => {
  return (
    <div className="mainHeader">
      <div className="header">
        <div className="textHeader">
          <div className="header-hover">Coins</div>
          <div className="header-hover">Exchange</div>
          <div className="header-hover">Swap</div>
        </div>
        <div>
          <img
            src="https://coincap.io/static/logos/black.svg"
            alt="Coin Cap Logo"
            className="logoImg"
          />
        </div>
        <div className="textHeader1">
          <AiOutlineSearch style={{ fontSize: "250%" }} />
          <button>Connect Wallets</button>
          <AiFillSetting style={{ fontSize: "250%" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
