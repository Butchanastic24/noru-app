import React from "react";
import "../styles/conditions.css";
import caution from "../images/caution.png";
import closed from "../images/closed.png";

//Eventually this will come from an API
let conditionsList = [
  {
    status: caution,
    name: "Cowley's Curse",
    location: "Pleasant Grove, UT",
    date: "Apr 12th, 2022",
    description: "Fallen branches on trail",
    condition: "Good",
  },
  {
    status: closed,
    name: "Gamble",
    location: "Pleasant Grove, UT",
    date: "October 23rd, 2022",
    description: "Trail Closed for the season",
    condition: "Unknown",
  },
];

function ReportsTable() {
  return (
    <div id="reportsTable">
      <div id="topBanner">
        <p className="bannerCell">Status</p>
        <p className="bannerCell1">Trail</p>
        <p className="bannerCell1">Location</p>
        <p className="bannerCell" style={{ paddingRight: "145px" }}>
          Date
        </p>
        <p className="bannerCell2">Description</p>
        <p className="bannerCell">Condition</p>
      </div>
      <div id="reportList">
        <div className="reportRow1">
          <img
            className="statusIMG"
            src={conditionsList[0].status}
            alt="caution"
          />
          <p className="conditionListCells" style={{ marginLeft: "48px" }}>
            {conditionsList[0].name}
          </p>
          <p className="conditionListCells" style={{ marginLeft: "92px" }}>
            {conditionsList[0].location}
          </p>
          <p className="conditionListCells" style={{ marginLeft: "92px" }}>
            {conditionsList[0].date}
          </p>
          <p className="conditionListCells" style={{ marginLeft: "50px" }}>
            {conditionsList[0].description}
          </p>
          <p className="conditionListCells" style={{ marginLeft: "72px" }}>
            {conditionsList[0].condition}
          </p>
        </div>
        <div className="reportRow2">
          <img
            className="statusIMG"
            src={conditionsList[1].status}
            alt="closed"
          />
          <p className="conditionListCells" style={{ marginLeft: "48px" }}>
            {conditionsList[1].name}
          </p>
          <p className="conditionListCells" style={{ marginLeft: "144px" }}>
            {conditionsList[1].location}
          </p>
          <p className="conditionListCells" style={{ marginLeft: "92px" }}>
            {conditionsList[1].date}
          </p>
          <p className="conditionListCells" style={{ marginLeft: "15px" }}>
            {conditionsList[1].description}
          </p>
          <p className="conditionListCells" style={{ marginLeft: "50px" }}>
            {conditionsList[1].condition}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReportsTable;
