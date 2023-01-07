import React from 'react';
import { Component } from 'react';
import StatisticsBar from './Components/statisticsbar.jsx';
import TargetInput from './Components/targetinput.jsx';
import UserInput from './Components/userinput.jsx';
import RetryButton from './Components/retrybutton.jsx';

import "./App.css";
import DropDowns from './Components/dropdowns.jsx';

class App extends Component {
  render(){
    return(
      <div className="container">
        <div className="title__container">
          <h1 className="title">Typing test</h1>
        </div>
        <DropDowns/>
        <StatisticsBar Speed="40" Accuracy="100" AdjustedSpeed="40"/>
        <TargetInput/>
        <UserInput/>
        <RetryButton/>
      </div>
    )
  }
}

export default App;
