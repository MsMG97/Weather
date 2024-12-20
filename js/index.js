
const searchInput=document.getElementById('searchInput');
const findBtn=document.getElementById('findBtn')


findBtn.addEventListener('click', function(){

search(searchInput.value)
    
})

searchInput.addEventListener('input',()=>{

    search(searchInput.value)
})
async function search(city) {

   
        let response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e6f328a89a83405aaed84911241712&q=${city}&days=3`)
        let final =await response.json()
        console.log(final);
        displayToday(final.current,final.location)
        displayTomorrow(final.forecast.forecastday)
        displayAfterTomorrow(final.forecast.forecastday) 
    
        
    
    
}

search('cairo')

const dayName=['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
const monthName=['January', 'February',' March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',' November',' December']


function displayToday(current,location){
const date= new Date(current.last_updated.split(' ',1).toString());
const day =date.getDay()
const month =date.getMonth()
let todayWeather ='';
todayWeather =`<div class="header d-flex justify-content-between">
                    <span class="day">${dayName[day]}</span>
                    <span class="date">${ date.getDate()+monthName[month]}</span>
                </div>
                <div class="forecast-content p-4">
                    <span class="location ">${location.name}</span>
                    <div class="degree">
                        <span >${current.temp_c}</span>
                        <sup>o</sup>
                        <span>c</span>
                    </div>
                    <span class="forecast-icon">
                        <img src="https:${current.condition.icon}">
                    </span>
                    <span class=" weather d-block text-primary my-3">
                    ${current.condition.text}
                    </span>
                    <span class="me-3">
                        <img src="image/icon-umberella.png" alt="icon">
                    20%
                    </span>
                    <span class="me-3">
                        <img src="image/icon-wind.png" alt="icon">
                       ${current.wind_kph}Km/h
                    </span>
                    <span class="me-3">
                        <img src="image/icon-compass.png" alt="icon">
                    ${current.wind_dir}
                    </span>
                </div>
                
`
document.getElementById('todayForecast').innerHTML=todayWeather;

}

function displayTomorrow(forecast){
    const date= new Date(forecast[1].date);
    const day =date.getDay()
    
    
  
    let tomorrowForecast=`<div class="header text-center bg-dark-header">
                <span class="day">${dayName[day]}</span>
            </div>
            <div class="forecast-content text-center p-5 ">
                <div class="icon">
                  <img src=' https:${forecast[1].day.condition.icon}'/> 
                </div>
                <div class="max-degree">
<span> ${forecast[1].day.maxtemp_c}</span>
<sup>o</sup>
<span>C</span>
                </div>
                <div class="min-degree">
                    <span>${forecast[1].day.mintemp_c}</span>
                    <sup>o</sup>
                </div>
                <div class="weather text-primary py-4">
                    <span>${forecast[1].day.condition.text}</span>
                </div>
            </div>`
            document.getElementById('tomorrow').innerHTML=tomorrowForecast;



}
function displayAfterTomorrow(forecast){
    const date= new Date(forecast[2].date);
    const day =date.getDay()
  
    
  
    let afterTomorrowForecast=`<div class="header text-center bg-dark-header">
                <span class="day">${dayName[day]}</span>
            </div>
            <div class="forecast-content text-center p-5 ">
                <div class="icon">
                  <img src=' https:${forecast[2].day.condition.icon}'/> 
                </div>
                <div class="max-degree">
<span> ${forecast[2].day.maxtemp_c}</span>
<sup>o</sup>
<span>C</span>
                </div>
                <div class="min-degree">
                    <span>${forecast[2].day.mintemp_c}</span>
                    <sup>o</sup>
                </div>
                <div class="weather text-primary py-4">
                    <span>${forecast[2].day.condition.text}</span>
                </div>
            </div>`
            document.getElementById('afterTomorrow').innerHTML=afterTomorrowForecast;


}


