import React, { useState, useEffect } from "react";
import { getClients } from "../../api/clientsApi";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function ClientStatus() {
  const [clients, setClients] = useState({});

  useEffect(() => {
    getClients().then(res => setClients({ res }));
  }, []);

  let totalClients = 0;
  let totalActiveClients = 0;
  if (clients.hasOwnProperty("res") && Object.keys(clients.res).length > 0) {
    Object.keys(clients.res).forEach(function(key, index) {
      totalClients += 1;
      if (clients.res[key].IsActive === 1) totalActiveClients += 1;
    });
  }

  const options = {
    chart: {
      renderTo: "container",
      type: "pie"
    },
    colors: ["#1BA8BB", "#C5D930", "#C1A0C5"],
    title: {
      x: 0, // Positioning total title towards the left
      text: "Clients",
      style: { fontsize: 80 }
    },
    tooltip: {
      formatter: function() {
        return "<b>" + this.point.name + "</b>: €" + this.y;
      }
    },
    legend: {
      enabled: true,
      floating: false,
      borderWidth: 0,
      layout: "vertical", // Display in columns
      verticalAlign: "middle",
      itemMarginTop: 5, // Space between each category in the legend
      itemMarginBottom: 5,
      itemStyle: {
        lineHeight: "40px" // Aligning icons and text
      }
    },
    plotOptions: {
      pie: {
        center: [180, 60], // Positioning the donut chart
        shadow: true
      }
    },
    series: [
      {
        name: "Transactions",
        data: [
          {
            name: "Fuel",
            y: 7450.0
          },
          {
            name: "Lubricants",
            y: 435.0
          }
        ],
        size: "60%", // Size of the donut
        innerSize: "70%",
        showInLegend: false,
        dataLabels: {
          enabled: false
        }
      }
    ]
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default ClientStatus;
