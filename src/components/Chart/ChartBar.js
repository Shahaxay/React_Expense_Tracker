import React from "react";

import './ChartBar.css';

const ChartBar = props => {
    // console.log("chatBar reexecuted");
    let chartFillHeight = '0%';
    if (props.maxValue > 0) {
        //rounding in percent may round some expense to 0 if it is so tiny in compare of maxValue
        chartFillHeight = Math.round((props.value / props.maxValue)*100) + '%';
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: chartFillHeight }}>
                </div>
            </div>
            <div className="chart-bar__label">
                {props.label}
            </div>
        </div>
    );
};

export default ChartBar;