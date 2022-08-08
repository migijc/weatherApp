const months=["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let degreeUnitToggle=document.getElementById("degreeUnit")

degreeUnitToggle.addEventListener("click", ()=>{
    if(degreeUnitToggle.classList=="faranheit"){
        degreeUnitToggle.classList.remove("faranheit")
        degreeUnitToggle.classList.add("celsius")
        let numbersToConvert=document.querySelectorAll(".temperature, .feelsLike, .highOf, .lowOf")
        numbersToConvert.forEach(number =>{
            number.textContent=Math.trunc((parseInt(number.textContent)-32) * .5556) +"°"
        })
    } else {
        degreeUnitToggle.classList.remove("celsius")
        degreeUnitToggle.classList.add("faranheit")
        let numbersToConvert=document.querySelectorAll(".temperature, .feelsLike, .highOf, .lowOf")
        numbersToConvert.forEach(number =>{
            number.textContent=Math.trunc((parseInt(number.textContent)* 1.8) + 32) +"°"
        })
    }
})

export default function displayLocationData(obj) {
    let todaysDate=new Date().getDate()
    let todaysMonth=new Date().getMonth()
    class ElementsInDiv{
        constructor(div,obj){
            this.date=todaysDate++
            this.index=null
            this.index=div.dataset.index
            this.elementID=div.id
            this.header=document.querySelector("." + this.elementID + "Header").textContent=`${months[todaysMonth]}/${this.date}`
            this.pop=document.querySelector("."+this.elementID+"Pop").textContent=Math.trunc(obj.weeklyWeather[this.index].pop *100)+"%"
            this.humidity=document.querySelector("."+this.elementID+"Humidity").textContent=obj.weeklyWeather[this.index].humidity +"%"
            this.highTemp=document.querySelector("."+this.elementID+"HighOf").textContent=Math.trunc(1.8*(obj.weeklyWeather[this.index].temp.max -273)+32)+"°"
            this.lowTemp=document.querySelector("."+this.elementID+"MinOf").textContent=Math.trunc(1.8*(obj.weeklyWeather[this.index].temp.min -273)+32)+"°"
            this.windSpeed=document.querySelector("."+this.elementID+"WindSpeed").textContent=obj.weeklyWeather[this.index]["wind_speed"]+" MPH"
        }
    }
    let weatherDataElements = document.querySelectorAll("p.weatherData")
    weatherDataElements.forEach(element => {
        if (obj[element.id]) {
            element.textContent = obj[element.id]
        } else { console.log(element.id + "nope") }
    })

    let currentDayDiv
    let dailyWeatherDivs = document.querySelectorAll(".weatherDiv")
    let i=0
    dailyWeatherDivs.forEach(function(div){
        currentDayDiv= new ElementsInDiv(div, obj)
        i++
    })


        
  
    

    // let test=new ElementsInDiv(document.getElementById("dayFour", obj))
    // console.log(test)

    
    // console.log(dailyWeatherDivs)
}