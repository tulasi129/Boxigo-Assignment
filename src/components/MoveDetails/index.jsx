import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHouse,
  faBoxesStacked,
  faLocationDot,
  faCalendarDays,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import './index.css'
import InventoryDetails from "../InventoryDetails/index.jsx";
const MoveDetails = ({ move, index, allMoves }) => {
  const [viewPropertyIndex, setViewPropertyIndex] = useState(null);
  const [isShowInventoryDetails, setIsShowInventoryDetails] = useState(false);

  const viewPropertyRooms = (index) => {
    setViewPropertyIndex(index);
    setIsShowInventoryDetails(
      (prevShowInventoryDetails) => !prevShowInventoryDetails
    );
  };

  return (
    <div className="move-details">
      <div className="move-from-to">
        <div className="move-from" style={{ width: "300px" }}>
          <p style={{ fontWeight: "bold" }}>From</p>
          <p>{move.moving_from}</p>
        </div>
        <div className="move-to-arrow">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="move-to" style={{ width: "300px" }}>
          <p style={{ fontWeight: "bold" }}>To</p>
          <p>{move.moving_to}</p>
        </div>
        <div className="move-request" style={{ marginLeft: "150px" }}>
          <p style={{ fontWeight: "bold" }}>Request#</p>
          <p style={{ color: "#F55B39", fontWeight: "bold", width: "300px" }}>
            {move.estimate_id}
          </p>
        </div>
      </div>
      <div className="move-property-details">
        <div className="property-details">
          <div className="each-detail">
            <FontAwesomeIcon icon={faHouse} />
            <p style={{ marginLeft: "10px" }}>{move.property_size}</p>
          </div>
          <div className="each-detail">
            <FontAwesomeIcon icon={faBoxesStacked} />
            <p style={{ marginLeft: "10px" }}>{move.property_size}</p>
          </div>
          <div className="each-detail">
            <FontAwesomeIcon icon={faLocationDot} />
            <p style={{ marginLeft: "10px" }}>{move.distance}</p>
          </div>
          <div className="each-detail">
            <FontAwesomeIcon icon={faCalendarDays} />
            <p style={{ marginLeft: "10px" }}>{move.order_date}</p>
          </div>
          <div className="each-detail">
            <input type="checkbox" checked={move.move_date_flexible === 1} />
            <p style={{ marginLeft: "10px" }}>Is flexible</p>
          </div>
        </div>
        <div className="property-more-details">
          <button
            className="view-more-details-button"
            onClick={() => viewPropertyRooms(index)}
          >
            View More Details
          </button>
          <button className="awaiting-button">Quotes Awaiting</button>
        </div>
      </div>
      <div className="flex row mt-[10px]">
        <FontAwesomeIcon
          className="text-[#f55b39] ml-[10px]"
          icon={faTriangleExclamation}
        />
        <p className="ml-[10px] mb-[12px]">
          <span className="font-bold text-[14px]">Disclaimer : </span> Please
          Update move date before two days of shifting
        </p>
      </div>

      {/* inventory={move[viewPropertyIndex].items.inventory} */}

      {viewPropertyIndex === index && isShowInventoryDetails && (
        <InventoryDetails
          inventory={allMoves[viewPropertyIndex].items.inventory}
        />
      )}
    </div>
  );
};
export default MoveDetails;
