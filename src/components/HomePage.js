import React from "react";
import YearWiseNumberOfClients from "./Graphs/YearWiseNumberOfClients";
import ClientStatus from "./Graphs/ClientStatus";

function HomePage() {
  return (
    <div className="container-fluid">
      <div class="row" key="1">
        <div class="col-sm" key="11">
          <YearWiseNumberOfClients />
        </div>
        <div class="col-sm" key="12">
          <ClientStatus />
        </div>
        <div class="col-sm" key="13">
          One of three columns
        </div>
      </div>
      <div class="row" key="2">
        <div class="col-sm" key="21">
          Two of three columns
        </div>
        <div class="col-sm" key="22">
          Two of three columns
        </div>
        <div class="col-sm" key="23">
          Two of three columns
        </div>
      </div>
      <div class="row" key="3">
        <div class="col-sm" key="31">
          Three of three columns
        </div>
        <div class="col-sm" key="32">
          Three of three columns
        </div>
        <div class="col-sm" key="33">
          Three of three columns
        </div>
      </div>
      <div class="row" key="4">
        <div class="col-sm" key="41">
          Four of three columns
        </div>
        <div class="col-sm" key="42">
          Four of three columns
        </div>
        <div class="col-sm" key="43">
          Four of three columns
        </div>
      </div>
    </div>
  );
}
/*
 */
export default HomePage;
