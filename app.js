const api = {
    key : "12afff9d6eeab017f4af87e7f86b3701",
    base : "https://api.openweathermap.org/data/2.5/"
}
const searchbox = document.querySelector('.search_box');
searchbox.addEventListener('keypress' , loc);
function loc(e){
    if (e.keyCode == 13) {
        getlocation(searchbox.value);
    }
    
}
function getlocation(e){
    fetch(`${api.base}weather?q=${e}&units=metric&APPID=${api.key}`)
    .then( function (weather) {
        return weather.json();
    }).then(results);
}
function results (weather){
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name} , ${weather.sys.country}`;

    let temp = document.querySelector('.curr .temperature');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_data = document.querySelector('.curr .weather');
    weather_data.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.range');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

    let d = new Date()
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(d);
}
function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
