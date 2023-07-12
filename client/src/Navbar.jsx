import { FaBars, FaTimes } from "react-icons/fa";
import { Finder } from "./finder";
import { Body } from "./body";
import { Products } from "./ourproduct";
import { Link, Route, Routes } from "react-router-dom";
import { useState, useRef } from "react";
import BDealer from "./dealer";
import { UserLogin } from "./login";
import { Support } from "./support";
import { UserRegister } from "./Register";
import "./Navbar.css";
import { About } from "./About";
export function Navbar() {
  const [userType, setUserType] = useState("A");
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState("login");
  const toggleForm = (formName) => {
    setCurrent(formName);
  };
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">BATTERY-WALA</Link>
        </div>

        <nav ref={navRef}>
          <Link to="/">Home</Link>
          {userType && <Link to="/products">Products</Link>}
          <Link to="/batteryFinder">Battery Finder</Link>
          <Link to="/dealer">Dealers</Link>
          <Link to="/help">Help & Support</Link>
          <Link to="/about">About Us</Link>
          {current === "login" ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link to="/register" onFormSwitch={toggleForm}>
              Register
            </Link>
          )}

          <button className="nav_btn nav_close " onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav_btn " onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/batteryFinder" element={<Finder />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dealer" element={<BDealer />} />
        <Route path="/help" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
      </Routes>
    </>
  );
}
