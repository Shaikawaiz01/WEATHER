const apikey = "8a5c3c7fee0a38f6d121fd6296202587";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchbar = document.querySelector(".searchbar");
let btn = document.querySelector(".searchicon");
async function check(citysearch) {
    const response = await fetch(apiurl + citysearch + `&appid=${apikey}`);
    const data = await response.json();

    if (response.ok) {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humid").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";
        console.log(data);
    } else {
        alert("City not found!");
    }
    let imgg = document.querySelector(".imgg");
    let weather = data.weather[0].main;
    let text = document.querySelector(".img_text");
   if(weather === "Clear"){
    imgg.src = "clean.png";
    text.innerHTML = "Clear Sky";
   }else if(weather==="Drizzle"){
    imgg.src = "drizzle.png";
    text.innerHTML = "Drizzle";
   }else if(weather==="Clouds"){
    imgg.src = "clouds.png";
    text.innerHTML = "Cloudy";
   }else if(weather==="Humidity"){
    imgg.src = "humidity.png";
    text.innerHTML = "Humidity";
   }else if(weather==="Mist"){
    imgg.src = "mist.png";
    text.innerHTML = "MIST";
   }else if(weather==="Rain"){
    imgg.src = "rainny.png";
    text.innerHTML = "RAINY";
   }else if(weather==="Snow"){
    imgg.src = "snow.png";
    text.innerHTML = "SNOWY";
   }else if(weather==="Wind"){
    imgg.src = "windy.png";
    text.innerHTML = "WINDY";
   }
}

btn.addEventListener("click", () => {
    const citysearch = searchbar.value; 
    check(citysearch);
});
