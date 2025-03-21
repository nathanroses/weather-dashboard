$(document).ready(function() {
    // Variables
    var button = document.querySelector('.button');
    var inputValue = document.querySelector('.inputValue');
    var nameElement = document.querySelector('.name');
    var descElement = document.querySelector('.desc');
    var tempElement = document.querySelector('.temp');
    var apiKey = 'a5585c2231b951e5765a92525acac5e2';

    // Function to fetch weather data
    function fetchWeather(city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                // Update the UI with weather data
                nameElement.innerHTML = data.name;
                tempElement.innerHTML = Math.round(data.main.temp) + "°F";
                descElement.innerHTML = data.weather[0].description;
            })
            .catch(err => {
                alert("City not found. Please try again.");
                console.error(err);
            });
    }

    // Event listener for search button
    button.addEventListener('click', function() {
        if (inputValue.value.trim() !== '') {
            fetchWeather(inputValue.value);
        } else {
            alert("Please enter a city name");
        }
    });

    // Event listener for pressing Enter in the input field
    inputValue.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && inputValue.value.trim() !== '') {
            fetchWeather(inputValue.value);
        }
    });

    // Event listener for city name clicks
    $('.cityname').on('click', function() {
        let city = $(this).text().trim();
        fetchWeather(city);
    });

    // Load default city on page load
    fetchWeather('New York');
});
