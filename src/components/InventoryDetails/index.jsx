import React, { useState } from "react";
import RoomDetails from "../RoomDetails/index.jsx";
import "./index.css";

const InventoryDetails = ({ inventory }) => {
  // State to keep track of the currently selected button index
  const [selectButtonIndex, setButtonIndex] = useState(null);

  // Toggle function to handle which inventory section is expanded
  const handleToggle = (inventIndex) => {
    
    // Set the selected button index, or null if already selected
    setButtonIndex(inventIndex === selectButtonIndex ? null : inventIndex);
  };

  return (
    <div className="mt-[15px] ml-[10px] mb-[10px]">
      <div>
        <h3 className="text-[18px] mb-4 font-bold">
          Inventory Details
          <button className="bg-black text-white rounded ml-4 p-2 text-[14px]">
            Edit Inventory
          </button>
        </h3>
      </div>
      {inventory.map((invent, inventIndex) => (
        <div key={inventIndex}>
          <button
            type="button"
            className="inventor-button"
            onClick={() => handleToggle(inventIndex)}
            aria-expanded={selectButtonIndex === inventIndex}
          >
            <span className="flex items-center">
              <span className="title text-[#f55b39] text-left">
                {invent.displayName}
              </span>
              <span className="bg-orange-600 text-white flex items-center justify-center w-6 h-6 rounded-full ml-2 text-xs font-semibold">
                {invent.category.length}
              </span>
            </span>
            <svg
              className={`w-5 h-5 text-gray-800 transform transition-transform duration-200 ${
                selectButtonIndex === inventIndex ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9l-7 7-7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
          {selectButtonIndex === inventIndex && (
            <RoomDetails roomDetails={invent.category} />
          )}
        </div>
      ))}
    </div>
  );
};

export default InventoryDetails;
