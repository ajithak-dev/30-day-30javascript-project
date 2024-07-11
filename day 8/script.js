
function getWeather(){

const input = document.getElementById('search-city').value
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

let api_key = 'your_api_key'
let api_city = input
let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${api_city}&appid=${api_key}&units=Metric`

fetch(api_url)
    .then(res=>(res.json()))
    .then(data=>{temp.innerHTML = `${Math.floor(data.main.temp)}°`;
        city.innerHTML = data.name;
    })

}
