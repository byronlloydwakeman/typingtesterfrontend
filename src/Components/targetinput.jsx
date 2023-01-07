import React from "react";
import "./targetinput.css";

import Data from "./defaultValue";

const IntoSpan = (text) => {
    var textArray = text.split("");
    return (
        text.split("").map((char, index) => <span id={index}>{char}</span>)
    )
}

const TargetInput = () => {
    return(
        <div className="targetinput__container">
            <p className="targetinput" id="targetInput">
                {IntoSpan(Data.defaultValue)}
            </p>
        </div>
    )
}

export default TargetInput;
export { IntoSpan }