import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import "./userinput.css";

var TimerStarted = false
var StartTime = 0

const UserInput = () => {

    const maxTime = 60;
    const [time, setTime] = useState(maxTime)
    const Ref = useRef(null);

    const getTimeRemaining = (e) => {
        return (Date.parse(e) - Date.parse(new Date())) / 1000 % 60;
    }

    const startTimer = (e) => {
        let timeRemaining = getTimeRemaining(e);
        if(timeRemaining >= 0)
        {
            setTime(timeRemaining);
        }
    }

    const clearTime = (e) => {
        setTime(maxTime);

        if(Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + maxTime);
        return deadline;
    }

    useEffect(() => {
        const timeLeftText = document.getElementById("timeLeft");
        timeLeftText.innerHTML = time + " seconds";

        //Disable textarea once time hits 0
        if(time == 0)
        document.getElementById("userInput").disabled = true;
    }, [time])

    const onClickReset = () => {
        clearTime(getDeadTime());
    }

    return(
        <div className="userinput__container">
            <textarea className="userinput" id="userInput" placeholder="Begin typing to start" onChange={() => 
            {
                var userInput = document.getElementById("userInput").value;
                var userInputAsChars = userInput.split("");

                var targetInputContainer = document.getElementById("targetInput");
                
                for(var i = 0; i < targetInputContainer.childNodes.length; i++)
                {
                    var tempCharDom = document.getElementById(i);
                    tempCharDom.classList.remove("incorrect-char");
                    tempCharDom.classList.remove("correct-char");
                }

                userInputAsChars.map((char, index) => 
                {
                    var tempCharDom = document.getElementById(index);
                    if(tempCharDom.innerHTML === char)
                    {
                        tempCharDom.classList.remove("incorrect-char");
                        tempCharDom.classList.add("correct-char");
                    }
                    else
                    {
                        tempCharDom.classList.remove("correct-char");
                        tempCharDom.classList.add("incorrect-char");
                    }
                })

                //When the user starts the timer
                if(!TimerStarted)
                {
                    document.getElementById("texts").disabled = true;
                    StartTime = Math.round(Date.now() / 1000);
                    TimerStarted = true;
                    onClickReset();
                }

                var userInputValue = document.getElementById("userInput").value

                var json = JSON.stringify
                ({
                    timeElapsed : Math.round(Date.now() / 1000) - StartTime,
                    userInput : userInputValue,
                    targetInput : document.getElementById("texts").value
                })

                fetch(`https://wzowik.deta.dev/CalcAverageWordsPerMinute/Post`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: json 
                    })
                    .then(res => res.json())
                    .then(json => 
                    {
                        document.getElementById("speed").innerHTML = (Math.round(json.WordsPerMinute * 10) / 10) + " WPM";
                        document.getElementById("accuracy").innerHTML = (Math.round(json.Accuracy * 10) / 10) + "%";
                        document.getElementById("adjustedSpeed").innerHTML = (Math.round(json.AdjustedWordsPerMinute * 10) / 10) + " AWPM";
                    });
            }}/>
        </div>
    )
}

export default UserInput;