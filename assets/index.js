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
        getUserRepos(username);
        cityInputEl.value = "";
    } else {
        alert("Please enter a City");
    }  
};
// api fetch call function for city's weather conditions

// render current weather conditions

// render 5 day forecast

// save past searches into local storage

// event listener for search button 
cityFormEl.addEventListener("submit", formSubmitHandler)