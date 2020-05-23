// global variables 
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var repoSearchTerm = document.querySelector("#repo-search-term");
var repoContainerEl = document.querySelector("#repos-container");

var formSubmitHandler = function(event) {
    event.preventDefault();
    //get city name from user input
    var city = cityInputEl.value.trim();

    if (city) {
        getCityWeather(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a City");
    }  
};

// api fetch call function for city's weather conditions
var getCityWeather = function(city) {
    // format the github api url
    var apiUrl = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=7b426fc3500aff841c7ff77e32992af5";

    // make a request to the url
    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
            response.json().then(function(data) {
                console,log(name);
            });
            } else {
            alert("Error: " + response.statusText);
            }
        })
        .catch(function(error) {
            // Notice this '.catch()' getting chained onto the end of the '.then()' method
            alert("Unable to connect to OpenWeatherMap.org");
        });
};
// render current weather conditions

// render 5 day forecast

// save past searches into local storage

// event listener for search button 
cityFormEl.addEventListener("submit", formSubmitHandler)