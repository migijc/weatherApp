import css from "./main.css"
import getLocationData from "./weatherData"
import weeklyWeathercss from "./weeklyWeather.css"
getLocationData("Miami")


let locationInput=document.querySelector("input")
let searchButton=document.querySelector("button")
searchButton.onclick=()=>{getLocationData(locationInput.value)}

