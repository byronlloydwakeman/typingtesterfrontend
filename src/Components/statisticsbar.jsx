import React from "react";
import "./statisticsbar.css";

const StatisticsBar = () => {
    return(
        <div className="statsbar__container">
            <div className="statsbar-item__container">
                <h2 className="statsbar__title">Speed</h2>
                <h2 className="statsbar__title" id="speed">0 WPM</h2>
            </div>
            <div className="statsbar-item__container">
                <h2 className="statsbar__title" >Accuracy</h2>
                <h2 className="statsbar__title"  id="accuracy">100%</h2>
            </div>
            <div className="statsbar-item__container">
                <h2 className="statsbar__title" >Adjusted Speed</h2>
                <h2 className="statsbar__title"  id="adjustedSpeed">0 AWPM</h2>
            </div>
            <div className="statsbar-item__container">
                <h2 className="statsbar__title" >Time left</h2>
                <h2 className="statsbar__title"  id="timeLeft">0 seconds</h2>
            </div>
        </div>
    )
}

export default StatisticsBar;