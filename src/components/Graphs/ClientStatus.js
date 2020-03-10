import React, { useState, useEffect } from "react";
import { getGetActiveInActiveClients, getClients } from "../../api/clientsApi";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function ClientStatus() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients().then(res => setClients({ res }));
  }, []);

  let totalClients = 0;
  let totalActiveClients = 0;
  if (clients.hasOwnProperty("res") && Object.keys(clients.res).length > 0) {
    let indxes = Object.keys(clients.res.clients);
    for (let i = 0; i < indxes.length; i++) {
      totalClients += 1;
      let clientKeys = Object.keys(clients.res.clients[i]);
      for (let j = 0; j < clientKeys.length; j++) {
        if (
          clientKeys[j] === "IsActive" &&
          clients.res.clients[i].IsActive === true
        ) {
          totalActiveClients += 1;
        }
      }
    }
  }

  let chartData = [
    { name: "Active", y: totalActiveClients },
    { name: "InActive", y: totalClients - totalActiveClients }
  ];

  const options = {
    chart: {
      renderTo: "container",
      type: "pie",
      //borderColor: "#bdb5b1",
      //borderWidth: 2,
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
      text: "Active/InActive Clients"
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

export default ClientStatus;
