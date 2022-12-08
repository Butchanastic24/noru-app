import { React } from "react";
import "../styles/conditions.css";
import ReportsTable from "../components/ReportsTable";

function Conditions() {
  return (
    <div id="conditionsComponent">
      <div id="tableArea">
        <h3>Nearby Trail Reports</h3>
        <ReportsTable />
      </div>
    </div>
  );
}

export default Conditions;
