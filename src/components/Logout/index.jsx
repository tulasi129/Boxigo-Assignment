import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lhs from "../Lhs/index.jsx";
import "./index.css"; 

const Logout = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to the home page
    navigate("/");
  };

  return (
    <div className="logout-container">
      <Lhs />
      <div className="rhs">
        <button
          className="logout-button mt-[200px]"
          onClick={() => setShowModal(true)}
        >
          Logout
        </button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <p>Are you sure you want to logout?</p>
              <button className="modal-button" onClick={handleLogout}>
                Yes
              </button>
              <button
                className="modal-button"
                onClick={() => setShowModal(false)}
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logout;
