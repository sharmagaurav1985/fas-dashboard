import React, { useState, useEffect } from "react";
import { getYearWiseClients } from "../../api/clientsApi";
import { getYearWiseFunds } from "../../api/fundsApi";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function YearWiseNumberOfClients() {
  const [clients, setClients] = useState({});
  const [funds, setFunds] = useState({});

  useEffect(() => {
    getYearWiseFunds().then(res => setFunds({ res }));
    getYearWiseClients().then(res => setClients({ res }));
  }, []);

  let xAxisCategory = [];
  let clientData = [];
  let fundData = [];
  if (clients.hasOwnProperty("res") && Object.keys(clients.res).length > 0) {
    Object.keys(clients.res).forEach(function(key, index) {
      xAxisCategory.push(key);
      clientData.push(clients.res[key]);
      if (key in funds.res) {
        fundData.push(funds.res[key]);
      } else {
        fundData.push("0");
      }
    });
  }
  const options = {
    chart: {
      type: "line"
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
      text: "Year Wise Client Started"
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
