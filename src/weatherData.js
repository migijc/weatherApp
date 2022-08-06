import Location from "./location"

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

// let locationInput=document.querySelector("input")
// let searchButton=document.querySelector("button")
// searchButton.onclick=()=>{getLongAndLangURL(locationInput.value)}

 export default function getLocationData(location){
    let city=location
    let cityInfo=[]
    essentialsForRequest.longAndLangURLArray[1]=city;

    fetch(essentialsForRequest.longAndLangURLArray[0]+ essentialsForRequest.longAndLangURLArray[1]+ essentialsForRequest.longAndLangURLArray[2], {mode:"cors"})
        .then(function(response){
            return response.json()
        })
        .catch(function(rejection){
            console.log(rejection)
        })
        .then(function(response){
            console.log(response[0])
            a[1]= (lat=response[0].lat)
            a[3]= (lon=response[0].lon)
        })
        .then(function(response){
            fetch(getCurrentURl(), {mode:"cors"})
             .then(function(response){
                 return response.json()
             })
             .then(function(response){
                 console.log(response)
                 console.log(response.current)
                 cityInfo.push(response.current["feels_like"])
                 cityInfo.push(location)
                 cityInfo.push(response.current.humidity)
                 cityInfo.push(response.hourly[0].pop)
                 cityInfo.push(response.current["wind_speed"])
                 cityInfo.push(response.current.weather[0].description)
                 cityInfo.push(response.current.temp)
                 currentLocation=new Location(cityInfo)
                 currentLocation.showOnConsole()
             })
        })
}



