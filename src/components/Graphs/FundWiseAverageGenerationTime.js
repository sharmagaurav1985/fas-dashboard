import React, { useState, useEffect } from "react";
import { getFundGenerationDuration } from "../../api/fundGenerationDurationApi";
import { getFunds } from "../../api/fundsApi";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function getFilteredData(fundId, chartData) {
  let finalChartData = [];
  if (chartData.hasOwnProperty("fundGenerationDuration")) {
    let keys = Object.keys(chartData.fundGenerationDuration);
    for (let i = 0; i < keys.length; i++) {
      if (chartData.fundGenerationDuration[i].fundId === parseInt(fundId)) {
        finalChartData.push([
          chartData.fundGenerationDuration[i].generationDate,
          chartData.fundGenerationDuration[i].dataGeneratedForDays
        ]);
      }
    }
  }
  return finalChartData;
}

function FundWiseAverageGeneration() {
  const [chartData, setChartData] = useState([]);
  const [selectedFund, setSelectedFund] = useState([]);
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    setSelectedFund(0);
    getFunds().then(res => setFunds(res));
    getFundGenerationDuration().then(res => setChartData(res));
  }, []);

  let fd = [];
  if (
    funds.hasOwnProperty("funds") &&
    chartData.hasOwnProperty("fundGenerationDuration")
  ) {
    if (selectedFund === 0) {
      setSelectedFund(funds.funds[0].fundId);
    }
    //fundId = funds.funds[0].fundId;
    fd = getFilteredData(selectedFund, chartData);
  }
  let newFund = selectedFund;
  //if(funds.hasOwnProperty("res"))

  let options = {
    chart: { type: "bar" },
    xAxis: {
      type: "category"
    },
    title: {
      text: "Days for which data generated"
    },
    series: [
      {
        type: "bar",
        name: "People",
        data: fd,
        keys: ["name", "y"]
      }
    ]
  };

  /*let select = document.getElementById("select");
    select.addEventListener('change', (e) => {
    var month = e.target.value;
    var monthsArr = Highcharts.defaultOptions.lang.shortMonths;
    var monthIndex = monthsArr.indexOf(month) + 1;
    var data = [];
  
    for (var j = 0; j < csv.data.length; j++) {
      data.push([
        csv.data[j][0], +csv.data[j][monthIndex]
      ]);
    }
  
    Highcharts.charts.forEach((chart) => {
      chart.series[0].update({
        data: data
      }, false, false, false);
  
      chart.redraw();
    })*/
  let allFunds = funds.funds || [{}];
  function handleOnChange(event) {
    setSelectedFund(event.target.value);
  }

  return (
    <>
      <select value={selectedFund} onChange={handleOnChange}>
        {allFunds.map(x => {
          return <option value={x.fundId}>{x.fundName}</option>;
        })}
      </select>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { height: "300px" } }}
      />
    </>
  );
}
/* */
export default FundWiseAverageGeneration;
