import React, { useState, useEffect } from "react";
import { getYearWiseClients } from "../../api/clientsApi";
import { getYearWiseFunds } from "../../api/fundsApi";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function YearWiseNumberOfClients() {
  const [clients, setClients] = useState([]);
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    getYearWiseFunds().then(res => setFunds({ res }));
    getYearWiseClients().then(res => setClients({ res }));
  }, []);

  let xAxisCategory = [];
  let clientData = [];
  let fundData = [];
  let minYear = 2025;
  let maxYear = new Date().getFullYear();
  if (clients.hasOwnProperty("res") && Object.keys(clients.res).length > 0) {
    const _minYear = fundData.reduce((p, c) => {
      if (c.StartingYear < minYear) {
        return c.StartingYear;
      } else return minYear;
    }, 0);

    console.log(_minYear);

    let clientKeys = Object.keys(clients.res);
    for (let i = 0; i < clientKeys.length; i++) {
      xAxisCategory.push(clients.res[i][0]);
      clientData.push(clients.res[i][1]);
      //fundData.push(clients.res[i][0]);
      fundData.push(funds.res[clients.res[i][0]] || "0");
    }
  }

  const options = {
    chart: {
      renderTo: "11",
      type: "line",
      borderColor: "#bdb5b1",
      borderWidth: 2,
      style: {
        color: "#1a1817",
        fontFamily: "sans-serif"
      }
    },
    xAxis: {
      categories: xAxisCategory,
      title: {
        text: "Year"
      }
    },
    yAxis: {
      title: {
        text: "Counts"
      }
    },
    legend: {
      align: "left",
      borderWidth: 0,
      showInLegend: true
    },
    plotOptions: {
      series: {
        cursor: "pointer",
        events: {
          click: function(event) {
            alert(
              this.name +
                " clicked\n" +
                "Alt: " +
                event.altKey +
                "\n" +
                "Control: " +
                event.ctrlKey +
                "\n" +
                "Meta: " +
                event.metaKey +
                "\n" +
                "Shift: " +
                event.shiftKey
            );
          }
        }
      }
    },
    title: {
      text: "Year Wise Client and Fund Started"
    },
    series: [
      {
        data: clientData,
        name: "Clients"
      },
      {
        data: fundData,
        name: "Funds"
      }
    ]
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { height: "300px" } }}
      />
    </div>
  );
}

export default YearWiseNumberOfClients;
