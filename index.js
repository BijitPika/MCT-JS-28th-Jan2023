const searchInput = document.getElementById("searchInput")
const name1 = document.getElementById("name1")
const weather=document.getElementById("weather")
const temperature = document.getElementById("temperature")
const wind = document.getElementById("wind")
const desc = document.getElementById("desc")
const button= document.getElementById("button")

async function func(){
    const location = searchInput.value
    const streamResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
    const data = await streamResponse.json();
    console.log(data)
    name1.innerText=`Weather of ${data.name}`
    temperature.innerText=`${data.main.temp}° C`
    desc.innerText=`Sky Condition : ${data.weather[0].main}`
    wind.innerText= `Wind Speed : ${data.wind.speed} Km/hr`
    document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?"+ `${data.name}` +"')" //Changing bg image based on seach value

}

setTimeout(function(){
    alert("Enter location to check")
},10000)
