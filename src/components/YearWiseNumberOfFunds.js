import React, { useState, useEffect } from "react";
import { getYearWiseFunds } from "../api/fundsApi";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function YearWiseNumberOfFunds() {
  const [funds, setFunds] = useState({});

  useEffect(() => {
    getYearWiseFunds().then(res => setFunds({ res }));
  }, []);

  const options = {
    chart: {
      type: "pie"
    },
    title: {
      text: "Year Wise Fund Started"
    },
    series: [
      {
        data: funds.res
      }
    ]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default YearWiseNumberOfFunds;
