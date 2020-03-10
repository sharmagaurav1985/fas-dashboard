import React, { useState, useEffect } from "react";
import { getFunds } from "../../api/fundsApi";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Fundstatus() {
  const [Funds, setFunds] = useState([]);

  useEffect(() => {
    getFunds().then(res => setFunds({ res }));
  }, []);

  let totalFunds = 0;
  let totalActiveFunds = 0;
  if (Funds.hasOwnProperty("res") && Object.keys(Funds.res).length > 0) {
    let indxes = Object.keys(Funds.res.funds);
    for (let i = 0; i < indxes.length; i++) {
      totalFunds += 1;
      let fundKeys = Object.keys(Funds.res.funds[i]);
      for (let j = 0; j < fundKeys.length; j++) {
        if (
          fundKeys[j] === "IsActive" &&
          Funds.res.funds[i].IsActive === true
        ) {
          totalActiveFunds += 1;
        }
      }
    }
  }

  let chartData = [
    { name: "Active", y: totalActiveFunds },
    { name: "InActive", y: totalFunds - totalActiveFunds }
  ];

  const options = {
    chart: {
      renderTo: "container",
      type: "pie",
      borderColor: "#bdb5b1",
      borderWidth: 2,
      height: 300,
      style: {
        color: "#1a1817",
        fontFamily: "sans-serif"
      }
    },
    plotOptions: {
      pie: {
        innerSize: "70%",
        size: "100%"
      }
    },
    title: {
      text: "Active Funds"
    },
    series: [
      {
        data: chartData
      }
    ]
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Fundstatus;
