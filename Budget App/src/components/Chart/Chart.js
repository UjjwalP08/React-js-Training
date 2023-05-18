import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(dataPoints => dataPoints.value)
    const totalMax = Math.max(...dataPointsValue)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (<ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />);
      })}
    </div>
  );
};

export default Chart;
