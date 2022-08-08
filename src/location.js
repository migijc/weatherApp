export default class Location{
    constructor(arrayOfStats){
        this.feelsLike=Math.trunc(1.8 * (arrayOfStats[0]-273) +32)+"°"
        this.location= arrayOfStats[1].toUpperCase()
        this.humidity=arrayOfStats[2]
        this.pop=(arrayOfStats[3]* 100).toString()
        this.windSpeed=arrayOfStats[4]
        this.currentClimate=arrayOfStats[5][0].toUpperCase() + arrayOfStats[5].slice(1,arrayOfStats[5].length)
        this.temperature=Math.trunc(1.8 * (arrayOfStats[6]-273) +32)+"°"
        this.weeklyWeather=arrayOfStats[7]
    }

    showOnConsole =function(){
        console.table(this)
    }
}

