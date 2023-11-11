//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import '../styles/trafficLightStyle.css';
//import your own components
import TrafficLight from "./component/TrafficLight.js";

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
