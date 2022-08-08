import Location from "./location"
import displayLocationData from "./displayLocation"
import fetchNow from "./BG"

let displayErrorMessage=()=>{
    const searchContainer=document.getElementById("searchContainer")
    const searchInput=document.getElementById("location")
    const errorMessage=document.createElement("p")
    errorMessage.classList.add("errorMessage")
    errorMessage.textContent= "*Your search didn't match any results. Try again."
    searchContainer.appendChild(errorMessage)
    searchInput.oninput=()=>{
        if(searchInput.value.length==1){
            searchContainer.removeChild(errorMessage)
        }
    }
}

let essentialsForRequest={
    myApiKey: "c8c50550bd51b757bdea4a3ab439b988",
    longAndLangURLArray:["http://api.openweathermap.org/geo/1.0/direct?q=","City","&limit=5&appid=c8c50550bd51b757bdea4a3ab439b988"],
    allWeatherInfoURLArray:["https://api.openweathermap.org/data/2.5/onecall?lat=", "{lat}","&lon=", "{lon}","&exclude=&appid=c8c50550bd51b757bdea4a3ab439b988"],
    test: function(){console.log(this)},
}
let a=essentialsForRequest.allWeatherInfoURLArray

function getCurrentURl(){
    return((a[0] + a[1] + a[2] + a[3] + a[4])) 
}

let lat
let lon
let currentLocation

 export default function getLocationData(location){
    let city=location
    let cityInfo=[]
    essentialsForRequest.longAndLangURLArray[1]=city;

    fetch(essentialsForRequest.longAndLangURLArray[0]+ essentialsForRequest.longAndLangURLArray[1]+ essentialsForRequest.longAndLangURLArray[2], {mode:"cors"})
        .then(function(response){
            //this response is the first think we recieve from promise
            return response.json()
        })
        .then(function(response){
            a[1]= (lat=response[0].lat)
            a[3]= (lon=response[0].lon)
        })
        .catch(function(rejection){
            a[1]=19.8968
            a[3]=155.5828
            throw new Error("err") 
        })
        .then(function(response){
            fetch(getCurrentURl(), {mode:"cors"})
             .then(function(response){
                 return response.json()
             })
             .then(function(response){
                 cityInfo.push(response.current["feels_like"])
                 cityInfo.push(location)
                 cityInfo.push(response.current.humidity)
                 cityInfo.push(response.hourly[0].pop)
                 cityInfo.push(response.current["wind_speed"])
                 cityInfo.push(response.current.weather[0].description)
                 cityInfo.push(response.current.temp)
                 cityInfo.push(response.daily)
                 currentLocation=new Location(cityInfo)
                 displayLocationData(currentLocation)
             })
             .then(response=>{
                fetchNow(currentLocation.location)
             })
        })
        .catch(function(response){
            displayErrorMessage()
        })
        
   
}





