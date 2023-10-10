import React from "react";

import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    const values=props.dataPoints.map(datapoint=>datapoint.value);
    const maxValue=Math.max(...values);
    return (
        <div className="chart">
            {props.dataPoints.map(datapoint =>{
                console.log(datapoint.label,datapoint.value);
                return <ChartBar key={datapoint.label} label={datapoint.label} value={datapoint.value} maxValue={maxValue} />
})}
        </div>
    );
}

export default Chart;