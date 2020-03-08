import React, { PureComponent } from "react";
import Highcharts from "highcharts";

export default class HomePage extends PureComponent {
  instance;

  options = {
    chart: {
      type: "bar"
    },
    title: {
      text: "Bar Chart"
    },
    series: [
      {
        data: [1, 3, 4, 10, 9]
      }
    ]
  };

  componentDidMount() {
    this.instance = Highcharts.chart("dummy-id", this.options);
  }

  render() {
    return (
      <div>
        <div id="dummy-id" />
      </div>
    );
  }
}
//export default HomePage;
