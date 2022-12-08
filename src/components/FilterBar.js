import React, { useState } from "react";
import "../styles/filterBar.css";
import { GoArrowDown } from "react-icons/go";

function FilterBar() {
  const [isOpaque, setIsOpaque] = useState(true);

  //Make all filter options visable or not
  const [difficulty, setDifficulty] = useState(false);
  const [distance, setDistance] = useState(false);
  const [trailType, setTrailType] = useState(false);
  const [elevation, setElevation] = useState(false);
  const [rating, setRating] = useState(false);

  return (
    <div
      id="trailFilters"
      style={{ opacity: isOpaque ? 0.5 : 1 }}
      onMouseEnter={() => {
        setIsOpaque(false);
      }}
      onMouseLeave={() => {
        setIsOpaque(true);
      }}
    >
      <div
        className="filterBox"
        onMouseEnter={() => {
          setDifficulty(true);
        }}
        onMouseLeave={() => {
          setDifficulty(false);
        }}
      >
        Difficulty <GoArrowDown />
        {difficulty && (
          <div className="filterMenu" id="difficultyMenu">
            Difficulty
          </div>
        )}
      </div>

      <div
        className="filterBox"
        onMouseEnter={() => {
          setDistance(true);
        }}
        onMouseLeave={() => {
          setDistance(false);
        }}
      >
        Distance <GoArrowDown />
        {distance && (
          <div className="filterMenu" id="distanceMenu">
            Distance
          </div>
        )}
      </div>
      <div
        className="filterBox"
        onMouseEnter={() => {
          setTrailType(true);
        }}
        onMouseLeave={() => {
          setTrailType(false);
        }}
      >
        Trail Type <GoArrowDown />
        {trailType && (
          <div className="filterMenu" id="trailTypeMenu">
            Trail Type
          </div>
        )}
      </div>
      <div
        className="filterBox"
        onMouseEnter={() => {
          setElevation(true);
        }}
        onMouseLeave={() => {
          setElevation(false);
        }}
      >
        Elevation <GoArrowDown />
        {elevation && (
          <div className="filterMenu" id="elevationMenu">
            Elevation
          </div>
        )}
      </div>
      <div
        className="filterBox"
        onMouseEnter={() => {
          setRating(true);
        }}
        onMouseLeave={() => {
          setRating(false);
        }}
      >
        Rating <GoArrowDown />
        {rating && (
          <div className="filterMenu" id="ratingMenu">
            Rating
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterBar;
