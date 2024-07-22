import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckArrowRight,
  faUser,
  faFileInvoice,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import "./index.css"; 
const Lhs = () => {
  
  // Get the current route path
  const location = useLocation();

  // Determine the active route
  const getActiveClass = (path) => (location.pathname === path ? "active" : "");

  return (
    <div className="lhs">
      <ul>
        <li className={getActiveClass("/moves")}>
          <Link to="/moves">
            <span className="text-[#f55b39] mr-[10px] w-10">
              <FontAwesomeIcon icon={faTruckArrowRight} className="fa-lg" />
            </span>
            My Moves
          </Link>
        </li>
        <li className={getActiveClass("/profile")}>
          <Link to="/profile">
            <span className="text-[#f55b39] mr-[10px] w-10">
              <FontAwesomeIcon icon={faUser} className="fa-lg" />
            </span>
            My Profile
          </Link>
        </li>
        <li className={getActiveClass("/quote")}>
          <Link to="/quote">
            <span className="text-[#f55b39] mr-[10px] w-10">
              <FontAwesomeIcon icon={faFileInvoice} className="fa-lg" />
            </span>
            Get Quote
          </Link>
        </li>
        <li className={getActiveClass("/logout")}>
          <Link to="/logout">
            <span className="text-[#f55b39] mr-[10px] w-10">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="fa-lg rotate-left"
              />
            </span>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Lhs;
