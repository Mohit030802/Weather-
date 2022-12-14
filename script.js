const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c74ff057bmsh36de890169a88e1p146495jsn0faa64769851',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>{ 
        console.log(response)
       
            
            temp.innerHTML=response.temp
            feels_like.innerHTML=response.feels_like
            humidity.innerHTML=response.humidity
            min_temp.innerHTML=response.min_temp
            max_temp.innerHTML=response.max_temp
            wind_speed.innerHTML=response.wind_speed
            wind_degrees.innerHTML=response.wind_degrees
           
          
    })
	.catch(err => console.error(err)); 
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
	.then(response => response.json())
	.then(response =>{ 
        console.log(response)
       
            
            
            humidity2.innerHTML=response.humidity2
            min_temp2.innerHTML=response.min_temp2
            max_temp2.innerHTML=response.max_temp2
            
           
          
    })
	.catch(err => console.error(err)); 


