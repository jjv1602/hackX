import React, { useState } from "react";
import st from "./Navbar.module.css";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { AiOutlineUser, AiOutlineFieldTime } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { FaKitMedical } from "react-icons/fa6";
import { BsCart3, BsFillJournalBookmarkFill } from "react-icons/bs";
import { GiMedicinePills } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className={st.par}>
      <div className={st.nav}>
        <Link to="/Dashboard" className={st.a}>
          <div
            className={
              activeItem === "Home" ? `${st.actnavbtn} ` : `${st.navbtn}`
            }
            onClick={() => handleItemClick("Home")}
          >
            <BsFillClipboard2DataFill
              style={{ color: "#ffffff" }}
              size={"4vh"}
            ></BsFillClipboard2DataFill>
            <div
              className={
                activeItem === "Home" ? `${st.actnavtxt} ` : `${st.navtxt}`
              }
            >
              Dashboard
            </div>
          </div>
        </Link>
        <Link to="/Appointments" className={st.a}>
          <div
            className={
              activeItem === "Cart" ? `${st.actnavbtn} active` : `${st.navbtn}`
            }
            onClick={() => handleItemClick("Cart")}
          >
            <div
              className={
                activeItem === "Cart" ? `${st.actnavtxt} ` : `${st.navtxt}`
              }
            >
            <FaKitMedical style={{ color: "white" }} size={"4vh"}></FaKitMedical>
            </div>
            <div
              className={
                activeItem === "Cart" ? `${st.actnavtxt} ` : `${st.navtxt}`
              }
            >
              Appointments
            </div>
          </div>
        </Link>

        <Link to="/medicnes" className={st.a}>
          <div
            className={
              activeItem === "Cart" ? `${st.actnavbtn} active` : `${st.navbtn}`
            }
            onClick={() => handleItemClick("Cart")}
          >
            <GiMedicinePills style={{ color: "#ffffff" }} size={"4vh"}></GiMedicinePills>
            <div
              className={
                activeItem === "Cart" ? `${st.actnavtxt} ` : `${st.navtxt}`
              }
            >
                Medicines
            </div>
          </div>
        </Link>
        <div className={st.navbtn}>
          <AiOutlineUser
            style={{ color: "#ffffff" }}
            size={"4vh"}
          ></AiOutlineUser>
          <div className={st.navtxt}>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
