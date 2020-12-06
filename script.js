/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using 
 * TODO: Complete showWeatherData() to set the data in the html
 */

 // API_KEY for maps api
 let API_KEY = "8768ed9eeba04ee8018d5d6e52b69b8b";

 /**
  * Retrieve weather data from openweathermap
  * HINT: Use fetch()
  * HINT: Url should look like this:
  * https://api.openweathermap.ord/data/2.5/weather?q=detroit&appid=8768ed9eeba04ee8018d5d6e52b69b8b&units=imperial

  */
 getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather"
    // HINT: Use template literals to create a url with input and an API key
    //CODE GOES HERE
    const Full_Url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise = fetch(Full_Url);
    return weatherPromise.then((response)=>{
       return response.json();
    })
 }

 /**
  * Retrieve city input and get the weather data
  * HINT: Use the promise returned from getWeatherData()
  */
 searchCity = () => {
    const city = document.getElementById('city-input').value;
    //CODE GOES HERE
    getWeatherData(city)
    .then((response)=>{
       console.log(response);
      showWeatherData(response);
    }).catch((error)=>{
       console.log(error);
    })
 }

 /**
  * Show the weather data in HTML
  * HINT: make sure to console log the weatherData to see the data looks like
  */
 showWeatherData = (weatherData) => {
    // CODE GOES HERE
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("weather-description").innerText = weatherData.weather[0].description;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
 }