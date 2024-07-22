import React from "react";
import "./index.css"; 
const RoomDetails = ({ roomDetails }) => {
  console.log(roomDetails, "roomDetails");
  const nameFormatting = (name) => {
    const formattedName = name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    return formattedName;
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="categories-container">
        {roomDetails.map((category, catIndex) => {
          // Check if there are any items with qty > 0
          const hasItemsWithQty = category.items.some(
            (item) => item.qty && item.qty !== 0
          );

          // Render category only if there are items with qty > 0
          if (!hasItemsWithQty) return null;

          return (
            <div key={catIndex} className="category">
              <h4 className="text-lg font-bold text-black mb-3 pb-2 ml-[8px]">
                {category.displayName}
              </h4>
              <ul>
                {category.items.map((item, itemIndex) => {
                  if (item.qty && item.qty !== 0) {
                    return (
                      <li
                        key={itemIndex}
                        className="flex justify-between items-center bg-transparent p-2"
                      >
                        <div>
                          <span className="font-medium text-gray-800">
                            {nameFormatting(item.name, category.displayName)}
                          </span>
                          <span className="font-medium text-gray-600">
                            {item.qty}
                          </span>
                        </div>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomDetails;
