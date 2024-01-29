import React, { useState } from "react";
import './Practice.css';
 const Practice =() =>{

  const[temperature,setTemperature] = useState("10");
  const [temperatureColor,setTemperatureColor] = useState("hot");

  const IncereaseTemperature = () =>{
    if(temperature===30)
    return;
    const newTemperature = temperature +1;
    if(newTemperature>=15){
      setTemperatureColor('hot');
    }
    setTemperature(newTemperature);
  }

  const DecreaseTemperature = () =>{
    if(temperature===0)
    return;
    const newTemperature = temperature -1;
    if(newTemperature<15){
      setTemperatureColor('cold');
    }
    setTemperature(newTemperature);
  }

  return(
    <div className="app-container">
    <div className="temperature-display-container">
    <div className={`temperature-display ${temperatureColor}`}>{temperature}°C</div>
    </div>
    {/* <h1>this is practice component</h1> */}
    <div className="button-container">
      <button className="rounded-circle" onClick={()=>IncereaseTemperature()}>+</button>
      <button className="rounded-circle" onClick={()=>DecreaseTemperature()}>-</button>
    </div>

    </div>
  )

 }

 export default Practice;

