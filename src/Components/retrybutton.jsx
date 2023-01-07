import React from "react";
import "./retrybutton.css";

const RetryButton = () => {
    return(
        <div>
            <button className="retry-button" onClick={() => {window.location.reload()}}>Retry</button>
        </div>
    )
}

export default RetryButton;