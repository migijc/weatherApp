export default class Location{
    constructor(arrayOfStats){
        this.feelsLike=arrayOfStats[0]
        this.location= arrayOfStats[1].toUpperCase()
        this.humidity=arrayOfStats[2]
        this.pop=arrayOfStats[3]
        this.windsSpeed=arrayOfStats[4]
        this.currentClimate=arrayOfStats[5]
        this.temperature=arrayOfStats[6]
    }

    showOnConsole =()=>{
        console.table(this)
    }
}
