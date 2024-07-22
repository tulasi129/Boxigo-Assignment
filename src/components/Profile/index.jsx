import React from "react";
import "./index.css";
import Lhs from "../Lhs/index.jsx";

const Profile = () => {
  return (
    <div className="flex row">
      <Lhs />
      <div className="profile-containe ml-[500px] mt-10">
        <div className="profile-header">
          <div className="profile-picture">
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <div className="profile-info text-left">
            <h1 className="font-bold">G T SAI TEJA</h1>
            <p>Software Engineer</p>
            <p>
              <span className="font-bold">Email</span>: saitejatulasig@gmail.com
            </p>
            <p>
              <span className="font-bold">Phone</span>: +91 7396247388
            </p>
            <p>
              <span className="font-bold">Location</span>: Hyderabad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
