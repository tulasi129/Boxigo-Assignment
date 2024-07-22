import React, { useState, useEffect } from "react";
import Lhs from "../Lhs/index.jsx";
import MoveDetails from "../MoveDetails/index.jsx";
import { ClipLoader } from "react-spinners";
import "./index.css";

const Home = () => {

  // State to store moves data
  const [moves, setMoves] = useState([]);

  // State for loading status
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data using fetch API
        const response = await fetch("http://test.api.boxigo.in/sample-data/");
        const jsonresponse = await response.json();
        const movesData = jsonresponse.Customer_Estimate_Flow;

        // Check data is an array or not
        if (Array.isArray(movesData)) {
          setMoves(movesData);
        } else {
          console.error("Fetched data is not an array:", movesData);
        }
      } catch (error) {
         // Log any errors during the fetch operation
        console.error("Failed to fetch data:", error);
      } finally {
         // Set loading to false
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex row">
      <div>
        <Lhs />
      </div>
      <div className="content">
        <h1 className="ml-10 text-[18px] font-bold mt-10">My Moves</h1>
        <div>
          {loading ? (
            <div className="spinner-container">
              <ClipLoader color="#007bff" size={50} />
            </div>
          ) : moves.length > 0 ? (
            moves.map((move, index) => (
              <MoveDetails
                key={move.estimate_id || index}
                move={move}
                index={index}
                allMoves={moves}
              />
            ))
          ) : (
            <p>No moves available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
