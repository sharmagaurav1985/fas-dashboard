import React, { useState, useEffect } from "react";
import { getYearWiseClients } from "../api/clientsApi";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function NumberOfClients() {
  const [clients, setClients] = useState({});

  useEffect(() => {
    getYearWiseClients().then(res => setClients({ res }));
  }, []);

  const options = {
    chart: {
      type: "pie"
    },
    title: {
      text: "Year Wise Client Started"
    },
    series: [
      {
        data: clients.res
      }
    ]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default NumberOfClients;
