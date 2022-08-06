import css from "./main.css"
import test from "./weatherData"
import getLocationData from "./weatherData"

let locationInput=document.querySelector("input")
let searchButton=document.querySelector("button")
searchButton.onclick=()=>{getLocationData(locationInput.value)}
