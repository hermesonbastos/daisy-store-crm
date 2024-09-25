import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import "./styles.css";
import { NavBarData } from "./NavbarData.jsx";
import useLogin from "../pages/Login/useLogin.jsx";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const { logout } = useLogin();
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars color="#C4344C" onClick={showSidebar} />
          </Link>
          <div className="logo-container">
            <img className="logo" src="/src/assets/logo.png" alt="Daisy Store Logo" />
          </div>
          <div></div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose color="#C4344C" />
              </Link>
            </li>

            {NavBarData.map((item, index) => {
              
              return (
                <li key={index} className={item.cName} onClick={() => {
                  if(item.title === "Logout") logout();
                }}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
