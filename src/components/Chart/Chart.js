import React from "react";
import "../../style/Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const valueArray = dataPoints.map((item) => item.value); //return just values
  const totalMax = Math.max(...valueArray);

  return (
    <div className="chart">
      {dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={totalMax}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
